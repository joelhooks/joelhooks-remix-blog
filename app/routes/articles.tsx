import * as React from 'react'
import {json, LoaderFunction, useLoaderData} from 'remix'
import Layout from '~/components/layout'
import {getFullContentIndexFrontMatter} from '~/utils/compile-mdx.server'
import {Link} from '@remix-run/react'

export const loader: LoaderFunction = async ({request, params}) => {
  const allContent = await getFullContentIndexFrontMatter()

  const headers = {
    'Cache-Control': 'private, max-age=3600',
  }

  return json({allContent}, {status: 200, headers})
}

type Content = {title: string; slug: any; banner?: string}

type LoaderData = {
  allContent: Content[]
}

export default function PageRoute() {
  const data = useLoaderData<LoaderData>()
  const allContent = data.allContent || []

  return (
    <Layout>
      <article className="prose lg:prose-xl">
        <ul>
          {allContent.map((content: Content) => {
            return (
              <li>
                <Link to={content.slug}>{content.title}</Link>
              </li>
            )
          })}
        </ul>
      </article>
    </Layout>
  )
}
