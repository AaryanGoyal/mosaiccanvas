import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/types'

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article style={{ background: '#FFFFFF', boxShadow: 'var(--shadow-sm)' }}>
      <Link
        href={`/blog/${post.slug}`}
        style={{ display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '3/2' }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover', transition: 'transform 600ms cubic-bezier(0.22,0.61,0.36,1)' }}
          className="blog-card-img"
        />
      </Link>
      <div style={{ padding: '24px 24px 28px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 9.5,
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
        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 22,
              fontWeight: 500,
              color: 'var(--mc-charcoal)',
              lineHeight: 1.25,
              margin: '0 0 10px',
            }}
          >
            {post.title}
          </h3>
        </Link>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 15,
            color: 'var(--mc-grey-warm)',
            lineHeight: 1.6,
            margin: '0 0 16px',
          }}
        >
          {post.excerpt}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '0.1em',
            color: 'var(--mc-grey-soft)',
          }}
        >
          <span>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  )
}
