import nodePath from "path";
import fs from "fs/promises";

import { bundleMDX } from 'mdx-bundler';

export async function downloadMdxFileOrDirectory(relativeMdxFileOrDirectory: string) {
  const mdxFileOrDirectory = nodePath.join(__dirname, "..", "content", relativeMdxFileOrDirectory);
  let isDirectory = false;

  try {
    const stats = await fs.stat(mdxFileOrDirectory)
     isDirectory = stats.isDirectory() 
  } catch (error) {
    
  }

  try {
    const fileName = isDirectory ? `${mdxFileOrDirectory}/index` : mdxFileOrDirectory;
    const file = await fs.readFile(fileName + '.mdx', "utf8")

    const {frontmatter, code} = await bundleMDX({
      source: file,
    })

    return {
      code,
      frontmatter
    }
  } catch (error) {
    console.log(error)
  }
}