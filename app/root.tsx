import * as React from 'react'
import {Links, Meta, MetaFunction, ScrollRestoration} from 'remix'
import {LiveReload, Outlet} from 'remix'

import styles from './styles/tailwind.css'
import type {getEnv} from '~/utils/env.server'
import {getUrl} from '~/utils/get-url'
import {getSocialMetas} from '~/utils/get-social-metas'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export type LoaderData = {
  ENV: ReturnType<typeof getEnv>
  requestInfo: {
    origin: string
    path: string
    session?: {
      email: string | undefined
      magicLinkVerified: boolean | undefined
    }
  }
}

export const meta: MetaFunction = ({data}) => {
  const requestInfo = (data as LoaderData | undefined)?.requestInfo
  const title = "Joel's digital garden"
  const description = 'Ramblings of a software developer'
  return {
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
    ...getSocialMetas({
      origin: requestInfo?.origin ?? '',
      keywords: '',
      url: getUrl(requestInfo),
      image:
        'https://res.cloudinary.com/joelhooks-com/image/upload/v1646023414/seo/joelhooks-com.png',
      title,
      description,
    }),
  }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Joel Hooks Digital Gardener</title>
        <Meta />
        <Links />
      </head>
      <body className="p-3">
        <Outlet />
        <ScrollRestoration />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}
