import * as React from 'react'

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
      <div className={`p-5 flex flex-col min-h-screen  ${className}`}>
        <main className="flex-grow flex flex-col justify-center mx-auto mw-80">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
