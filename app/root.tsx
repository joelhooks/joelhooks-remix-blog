import * as React from 'react'
import {Links} from 'remix'
import {LiveReload, Outlet} from 'remix'

import styles from './styles/tailwind.css'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Joel Hooks Digital Gardener</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}
