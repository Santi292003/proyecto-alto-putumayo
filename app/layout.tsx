import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { brand } from '@/lib/brand'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(brand.site.url),

  title: {
    default: brand.site.name,
    template: `%s | ${brand.site.name}`,
  },

  description: brand.site.description,

  keywords: [
    'Alto Putumayo',
    'Kamëntsá',
    'Inga',
    'Valle de Sibundoy',
    'Bëtscnaté',
    'Putumayo Colombia',
    'turismo Putumayo',
    'cultura indígena Colombia',
  ],

  authors: [{ name: brand.site.name }],
  creator: brand.site.name,

  openGraph: {
    type:        'website',
    url:         brand.site.url,
    locale:      'es_CO',
    siteName:    brand.site.name,
    title:       brand.site.name,
    description: brand.site.description,
    images: [
      {
        url:    '/images/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    `${brand.names.valle} — ${brand.names.region}`,
      },
    ],
  },

  verification: {
    google: 'XWSb9C08jWy-GjOl7anfP2TtGrDAODseq4qDLpzxRJ8',
  },

  twitter: {
    card:        'summary_large_image',
    title:       brand.site.name,
    description: brand.site.description,
    images:      ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bg-light text-forest-deep min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
