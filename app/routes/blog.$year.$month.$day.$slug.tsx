import * as React from 'react'
import {json, LoaderFunction, useLoaderData} from 'remix'
import {getMdxPage, useMdxComponent} from '~/utils/mdx'
import Layout from '~/components/layout'

export const loader: LoaderFunction = async ({request, params}) => {
  const page = await getMdxPage({
    contentDir: 'legacy_blog',
    slug: `${params.year}-${params.month}-${params.day}-${params.slug}`,
  })

  const headers = {
    'Cache-Control': 'private, max-age=3600',
  }

  return json({page}, {status: 200, headers})
}

type LoaderData = {
  page: {code: string; frontmatter?: any}
}

export default function PageRoute() {
  const data = useLoaderData<LoaderData>()
  const {code, frontmatter} = data.page

  const Component = useMdxComponent(code)
  return (
    <Layout>
      <article className="prose lg:prose-xl">
        {frontmatter.banner && <img src={frontmatter.banner} />}
        <h1>{frontmatter.title}</h1>
        <Component />
      </article>
    </Layout>
  )
}
