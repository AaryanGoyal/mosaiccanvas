import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const categories = [
  {
    name: 'Famous Artworks',
    image: '/images/products/girl-with-a-pearl-earring/main.png',
    href: '/products?category=Famous+Artworks',
  },
  {
    name: 'Floral',
    image: '/images/products/lotus-bloom/main.png',
    href: '/products?category=Floral',
  },
  {
    name: 'Animals',
    image: '/images/products/lion-portrait/main.png',
    href: '/products?category=Animals',
  },
  {
    name: 'Custom Commission',
    image: '/images/products/girl-with-a-pearl-earring/lifestyle.png',
    href: '/custom-quote',
  },
]

export default function CategoryTiles() {
  return (
    <section
      style={{
        padding: 'clamp(64px, 8vw, 96px) clamp(24px, 4vw, 48px)',
        background: '#F9F7F4',
      }}
    >
      <SectionHeader
        eyebrow="Shop by Subject"
        title="Four collections, one atelier"
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 18,
        }}
        className="category-grid"
      >
        {categories.map(({ name, image, href }) => (
          <Link
            key={name}
            href={href}
            style={{
              display: 'block',
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              textDecoration: 'none',
            }}
            className="category-tile"
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="25vw"
              style={{
                objectFit: 'cover',
                transition: 'transform 600ms cubic-bezier(0.22,0.61,0.36,1)',
              }}
              className="category-tile-img"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(26,26,26,0.78) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                right: 24,
                color: '#F9F7F4',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 34,
                  letterSpacing: '0.02em',
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#EADBAE',
                  marginTop: 6,
                }}
              >
                Shop the collection →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .category-tile:hover .category-tile-img {
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .category-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
