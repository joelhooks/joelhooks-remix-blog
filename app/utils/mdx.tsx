import * as React from 'react'
import * as mdxBundler from 'mdx-bundler/client'
import {downloadMdxFileOrDirectory} from '~/utils/compile-mdx.server'
import ResponsiveEmbed from 'react-responsive-embed'
import {TwitterTweetEmbed} from 'react-twitter-embed'
import {cachified} from '~/utils/cache.server'
import {redisCache} from '~/utils/redis.server'

const mdxComponents = {
  ResponsiveEmbed,
  TwitterTweetEmbed,
}

const defaultMaxAge = 1000 * 60 * 60 * 24 * 30

const getCompiledKey = (contentDir: string, slug: string) =>
  `${contentDir}:${slug}:compiled`
const checkCompiledValue = (value: unknown) =>
  typeof value === 'object' &&
  (value === null || ('code' in value && 'frontmatter' in value))

const getDownloadKey = (contentDir: string, slug: string) =>
  `${contentDir}:${slug}:downloaded`

export async function getMdxPage(options: {contentDir: string; slug?: string}) {
  const {contentDir, slug = ''} = options
  const key = getCompiledKey(contentDir, slug)
  const page = await cachified({
    cache: redisCache,
    maxAge: defaultMaxAge,
    ...options,
    // reusing the same key as compiledMdxCached because we just return that
    // exact same value. Cachifying this allows us to skip getting the cached files
    key,
    checkValue: checkCompiledValue,
    getFreshValue: async () => {
      const compiledPage = await downloadMdxFileOrDirectory(
        `${contentDir}/${slug}`,
      ).catch((err) => {
        console.error(`Failed to get a fresh value for mdx:`, {
          contentDir,
          slug,
        })
        return Promise.reject(err)
      })
      return compiledPage
    },
  })
  if (!page) {
    // if there's no page, let's remove it from the cache
    void redisCache.del(key)
  }
  return page
}

/**
 * This should be rendered within a useMemo
 * @param code the code to get the component from
 * @returns the component
 */
export function getMdxComponent(code: string) {
  const Component = mdxBundler.getMDXComponent(code)

  function MdxComponent({
    components,
    ...rest
  }: Parameters<typeof Component>['0']) {
    return (
      <Component components={{...mdxComponents, ...components}} {...rest} />
    )
  }

  return MdxComponent
}

export function useMdxComponent(code: string) {
  return React.useMemo(() => getMdxComponent(code), [code])
}
