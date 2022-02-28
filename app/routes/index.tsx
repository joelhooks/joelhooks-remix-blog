import * as React from 'react'
import {json, LoaderFunction, useLoaderData} from 'remix'
import {getMdxPage, useMdxComponent} from '~/utils/mdx'
import Layout from '~/components/layout'

export const loader: LoaderFunction = async ({request, params}) => {
  const page = await getMdxPage({
    contentDir: 'pages',
    slug: 'home',
  })

  return json({page})
}

type LoaderData = {
  page: {code: string; frontmatter?: any}
}

export default function IndexRoute() {
  const data = useLoaderData<LoaderData>()
  const {code, frontmatter} = data.page

  const Component = useMdxComponent(code)
  return (
    <Layout>
      <article className="prose lg:prose-xl">
        <Component />
      </article>
    </Layout>
  )
}
