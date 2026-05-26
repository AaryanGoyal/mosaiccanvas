import type { Metadata } from 'next'
import QuoteForm from '@/components/sections/QuoteForm'

export const metadata: Metadata = {
  title: 'Custom Mosaic Quote — Mosaic Canvas',
  description:
    'Commission a one-of-one mosaic portrait from your photograph. Tell us about your piece and our artisans in Jaipur will come back within 48 hours.',
}

export default function CustomQuotePage() {
  return (
    <div style={{ background: '#F9F7F4', minHeight: '60vh' }}>
      <QuoteForm />
    </div>
  )
}
