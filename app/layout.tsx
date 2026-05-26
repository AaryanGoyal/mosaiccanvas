import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Italiana } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italiana',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mosaic Canvas — Handcrafted Mosaic Wall Art',
    template: '%s — Mosaic Canvas',
  },
  description:
    'Handcrafted stone and marble mosaic wall art, made by artisans in Jaipur, India. Shipped worldwide.',
  metadataBase: new URL('https://mosaiccanvas.com'),
  openGraph: {
    type: 'website',
    siteName: 'Mosaic Canvas',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${italiana.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
