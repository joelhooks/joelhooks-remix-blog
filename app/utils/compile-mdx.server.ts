import nodePath from 'path'
import fs from 'fs/promises'

import {bundleMDX} from 'mdx-bundler'
import {last, first, take, drop} from 'lodash'

const getAllFiles = async function (
  dirPath: string,
  arrayOfFiles: string[][] = [],
) {
  const files = await fs.readdir(dirPath)

  arrayOfFiles = arrayOfFiles || []

  for (const file of files) {
    const isDirectory = await isPathDirectory(dirPath + '/' + file)
    if (isDirectory) {
      arrayOfFiles = await getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      const filePath = nodePath.join(dirPath, '/', file)

      const slugFile: string[] = []
      const blockList = ['.DS_Store', 'tsconfig.json', 'content/pages/home.mdx']
      const notBlocked = !blockList.some((fileOrPath) =>
        filePath.includes(fileOrPath),
      )

      if (notBlocked) {
        if (file.includes('index.mdx')) {
          slugFile.push(`/${last(dirPath.split('/'))}`)
        } else {
          if (filePath.includes('content/legacy_blog')) {
            const parts = file.split('-')

            const dateSegments = take(parts, 3).join('/')
            const slugSegments = drop(parts, 3).join('-')
            slugFile.push(
              `/blog/${dateSegments}/${first(slugSegments.split('.')) || ''}`,
            )
          } else {
            const slug = first(file.split('.')) || ''
            slugFile.push(`/${slug}`)
          }
        }

        slugFile.push(filePath)
        arrayOfFiles.push(slugFile)
      }
    }
  }

  return arrayOfFiles
}

export async function isPathDirectory(path: string) {
  let isDirectory = false
  try {
    const stats = await fs.stat(path)
    isDirectory = stats.isDirectory()
  } catch (error) {
    isDirectory = false
  }

  return isDirectory
}

export async function getFullContentIndexFrontMatter() {
  const allContent = await getAllFiles(
    nodePath.join(__dirname, '..', 'content'),
  )

  const pages = []

  for (const allContentElement of allContent) {
    try {
      const file = await fs.readFile(
        nodePath.resolve(last(allContentElement) || ''),
        'utf8',
      )

      const {frontmatter, code} = await bundleMDX({
        source: file,
      })

      pages.push({...frontmatter, slug: first(allContentElement)})
    } catch (e) {}
  }

  return pages.sort(function (a: any, b: any) {
    const secondDate: any = new Date(b.date)
    const firstDate: any = new Date(a.date)
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return secondDate - firstDate
  })
}

export async function downloadMdxFileOrDirectory(
  relativeMdxFileOrDirectory: string,
) {
  const mdxFileOrDirectory = nodePath.join(
    __dirname,
    '..',
    'content',
    relativeMdxFileOrDirectory,
  )

  const isDirectory = await isPathDirectory(mdxFileOrDirectory)

  try {
    const fileName = isDirectory
      ? `${mdxFileOrDirectory}/index`
      : mdxFileOrDirectory
    const file = await fs.readFile(fileName + '.mdx', 'utf8')

    const {frontmatter, code} = await bundleMDX({
      source: file,
    })

    return {
      code,
      frontmatter,
    }
  } catch (error) {
    console.log(error)
  }
}
