import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ValueStrip from '@/components/sections/ValueStrip'
import CategoryTiles from '@/components/sections/CategoryTiles'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import NewsletterSection from '@/components/sections/NewsletterSection'

export const metadata: Metadata = {
  title: 'Mosaic Canvas — Handcrafted Mosaic Wall Art',
  description:
    'Original mosaic wall art, composed tessera by tessera from cut marble, stone, and 22k gold leaf. Handcrafted in Jaipur, shipped worldwide.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <CategoryTiles />
      <FeaturedProducts />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
      <NewsletterSection />
    </>
  )
}
