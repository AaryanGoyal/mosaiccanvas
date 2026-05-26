'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/config'

const navLinks = [
  { label: 'Shop All', href: '/products' },
  { label: 'Famous Artworks', href: '/products?category=Famous+Artworks' },
  { label: 'Floral', href: '/products?category=Floral' },
  { label: 'Animals', href: '/products?category=Animals' },
  { label: 'Custom Quote', href: '/custom-quote' },
  { label: 'Journal', href: '/blog' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          background: '#1A1A1A',
          color: '#EADBAE',
          textAlign: 'center',
          padding: '10px 16px',
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}
      >
        ◆ &nbsp; White-glove shipping, worldwide &nbsp;·&nbsp; Hand-cut in {siteConfig.city}, {siteConfig.country} &nbsp; ◆
      </div>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: scrolled
            ? 'rgba(249,247,244,0.88)'
            : 'rgba(249,247,244,0.95)',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.1)' : 'none',
          borderBottom: '1px solid #E8E4DF',
          transition: 'background 260ms, backdrop-filter 260ms',
        }}
      >
        {/* Top row: search, logo, actions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            padding: '18px clamp(24px, 4vw, 48px)',
            gap: 24,
          }}
        >
          {/* Left: tagline */}
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--mc-grey-warm)',
            }}
          >
            Art, set in stone.
          </div>

          {/* Center: Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, justifySelf: 'center', textDecoration: 'none' }}>
            <Image
              src="/images/logos/mosaic-canvas-mark.png"
              alt="Mosaic Canvas mark"
              width={44}
              height={44}
              style={{ objectFit: 'contain' }}
            />
            <div className="mc-wordmark" style={{ userSelect: 'none' }}>
              <span className="mc-wordmark__mosaic">MOSAIC</span>
              <span className="mc-wordmark__canvas">Canvas</span>
            </div>
          </Link>

          {/* Right: actions */}
          <div
            style={{
              justifySelf: 'end',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--mc-grey-warm)',
                textDecoration: 'none',
              }}
            >
              Contact
            </Link>
            <Link
              href="/custom-quote"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                background: 'var(--mc-gold)',
                padding: '8px 16px',
                textDecoration: 'none',
                transition: 'background 260ms',
              }}
            >
              Get a Quote
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'none',
                padding: 4,
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <path d="M6 6l12 12M6 18L18 6" />
                  </>
                ) : (
                  <>
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom nav row */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(16px, 3vw, 36px)',
            padding: '14px clamp(24px, 4vw, 48px)',
            borderTop: '1px solid #EDE6D8',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--mc-charcoal)',
                cursor: 'pointer',
                paddingBottom: 4,
                textDecoration: 'none',
                transition: 'color 200ms',
                borderBottom: '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--mc-gold-deep)'
                e.currentTarget.style.borderBottomColor = 'var(--mc-gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--mc-charcoal)'
                e.currentTarget.style.borderBottomColor = 'transparent'
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            style={{
              background: 'var(--mc-cream)',
              borderTop: '1px solid var(--mc-border)',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--mc-charcoal)',
                  textDecoration: 'none',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--mc-border)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
