export const SITE_URL = 'https://josephdeferio.com'
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-PRMRV9QL'
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const sitePages = [
  { path: '/', title: 'Overview' },
  { path: '/experience/', title: 'Experience' },
  { path: '/research/', title: 'Research' },
  { path: '/userguide/', title: 'Working with me' },
]

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).href
}
