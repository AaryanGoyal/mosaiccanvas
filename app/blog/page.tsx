import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import BlogGrid from '@/components/sections/BlogGrid'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Journal — Mosaic Canvas',
  description:
    'Stories from the atelier — how mosaics are made, the stones we use, and the process of commissioning a custom piece.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section style={{ padding: 'clamp(48px, 6vw, 72px) clamp(24px, 4vw, 48px) 120px', background: '#F9F7F4' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="The Atelier Journal"
          title="Letters from Jaipur"
          subtitle="Stories of craft, material, and the slow work of making something enduring."
        />
        <BlogGrid posts={posts} />
      </div>
    </section>
  )
}
