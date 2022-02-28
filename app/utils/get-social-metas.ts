export function getSocialMetas({
  url,
  title = 'Ramblings of a software developer',
  description = `joel's digital garden`,
  origin,
  image = '',
  keywords = '',
}: {
  origin: string
  image?: string
  url: string
  title?: string
  description?: string
  keywords?: string
}) {
  return {
    title,
    description,
    keywords,
    image,
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:creator': '@jhooks',
    'twitter:site': '@jhooks',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:alt': title,
  }
}
