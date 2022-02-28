import * as React from 'react'
import {Links, Meta, MetaFunction, ScrollRestoration} from 'remix'
import {LiveReload, Outlet} from 'remix'

import styles from './styles/tailwind.css'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () => {
  return {
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
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
      <body>
        <Outlet />
        <ScrollRestoration />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}
