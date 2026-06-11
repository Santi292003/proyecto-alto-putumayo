import type { MetadataRoute } from 'next'
import { brand } from '@/lib/brand'

const base = brand.site.url

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* Homepage */
    {
      url:             base,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        1.0,
    },

    /* Main sections — one entry per brand.sections route */
    {
      url:             `${base}/historia`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/cultura`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/mapa`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/turismo`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/galeria`,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        0.8,
    },

    /* Subsections */
    {
      url:             `${base}/historia/kamentsa`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.6,
    },
    {
      url:             `${base}/historia/inga`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.6,
    },
    {
      url:             `${base}/cultura/betscnate`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.6,
    },
    {
      url:             `${base}/cultura/lengua`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.6,
    },
  ]
}
