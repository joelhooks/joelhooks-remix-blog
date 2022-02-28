import * as React from 'react'
import * as mdxBundler from 'mdx-bundler/client'
import { downloadMdxFileOrDirectory } from '~/utils/compile-mdx.server';
import ResponsiveEmbed from 'react-responsive-embed'
import {TwitterTweetEmbed} from 'react-twitter-embed'

const mdxComponents = {
    ResponsiveEmbed,
    TwitterTweetEmbed
}

export async function getMdxPage(options: {contentDir: string, slug?:string}) {
  const { contentDir, slug } = options
  return downloadMdxFileOrDirectory(`${contentDir}/${slug}`)
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