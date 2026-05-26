import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import GoldRule from '@/components/ui/GoldRule'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.metaTitle} — Mosaic Canvas Journal`,
    description: post.metaDescription,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article style={{ background: '#F9F7F4' }}>
      {/* Cover image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', maxHeight: 520, overflow: 'hidden' }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 48px)' }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 32, display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mc-grey-warm)', letterSpacing: '0.08em' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span>→</span>
          <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Journal</Link>
          <span>→</span>
          <span style={{ color: 'var(--mc-charcoal)' }}>{post.title}</span>
        </nav>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--mc-gold-deep)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 400,
            color: 'var(--mc-charcoal)',
            margin: '0 0 16px',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}
        >
          {post.title}
        </h1>

        {/* Meta */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mc-grey-soft)', letterSpacing: '0.08em' }}>
          <span>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div style={{ marginBottom: 40 }}>
          <GoldRule />
        </div>

        {/* Content */}
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 18,
            lineHeight: 1.8,
            color: 'var(--mc-charcoal)',
          }}
        >
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, color: 'var(--mc-charcoal)', margin: '48px 0 16px', letterSpacing: '-0.01em' }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, color: 'var(--mc-charcoal)', margin: '36px 0 12px' }}>
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p style={{ margin: '0 0 24px', fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.8, color: 'var(--mc-charcoal)' }}>
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong style={{ fontWeight: 600, color: 'var(--mc-charcoal)' }}>{children}</strong>
              ),
              em: ({ children }) => (
                <em style={{ fontStyle: 'italic', color: 'var(--mc-grey-warm)' }}>{children}</em>
              ),
              hr: () => (
                <div style={{ margin: '48px 0', display: 'flex', justifyContent: 'center' }}>
                  <GoldRule />
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Back link */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--mc-border)' }}>
          <Link
            href="/blog"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--mc-charcoal)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--mc-gold)',
              paddingBottom: 3,
            }}
          >
            ← Back to Journal
          </Link>
        </div>
      </div>
    </article>
  )
}
