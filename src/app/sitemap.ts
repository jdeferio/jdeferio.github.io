import type { MetadataRoute } from 'next'
import { absoluteUrl, sitePages } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map(({ path }) => ({ url: absoluteUrl(path) }))
}
