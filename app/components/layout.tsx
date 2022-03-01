import * as React from 'react'
import Logo from '~/components/Logo'
import {Link} from '@remix-run/react'

export type LayoutProps = {
  meta?: any
  noIndex?: boolean
  className?: string
  showNavigation?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  meta,
  noIndex,
  showNavigation = true,
}) => {
  const {
    title,
    description,
    titleAppendSiteName = false,
    url,
    ogImage,
  } = meta || {}

  return (
    <>
      <div className={`flex flex-col min-h-screen max-w-4xl mx-auto mb-72`}>
        <Link
          to="/"
          className="flex w-full lg:py-12 py-8 text-black items-center"
        >
          <div>
            <Logo />
          </div>
          <div className="ml-5 mt-4 text-xl">
            your friend Joel's digital garden
          </div>
        </Link>
        <main className="flex-grow flex flex-col justify-center mx-auto ">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
