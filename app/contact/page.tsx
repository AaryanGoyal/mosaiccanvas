import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us — Mosaic Canvas',
  description: 'Reach the Mosaic Canvas atelier. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div style={{ background: '#F9F7F4', minHeight: '60vh' }}>
      <ContactSection />
    </div>
  )
}
