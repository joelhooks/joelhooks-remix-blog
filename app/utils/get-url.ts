import {removeTrailingSlash} from '~/utils/remove-trailing-slash'

export function getUrl(requestInfo?: {origin: string; path: string}) {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? 'https://joelhooks.com'}${
      requestInfo?.path ?? ''
    }`,
  )
}
