import type { MetadataRoute } from 'next'
import { getSitemapPaths } from '@/lib/seo-config'

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapPaths().map(({ url, priority, changefreq }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: changefreq,
    priority,
  }))
}
