'use client'

import Link from 'next/link'
import { useState } from 'react'

type Variant = 'primary' | 'gold' | 'ghost' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
  disabled?: boolean
}

const sizes: Record<Size, React.CSSProperties> = {
  sm: { fontSize: 12, padding: '10px 20px' },
  md: { fontSize: 14, padding: '16px 30px' },
  lg: { fontSize: 15, padding: '18px 36px' },
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
  style,
  disabled,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const base: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: '0.04em',
    border: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 4,
    transition: 'all 260ms cubic-bezier(0.22, 0.61, 0.36, 1)',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    transform: pressed ? 'translateY(1px)' : 'none',
    opacity: disabled ? 0.5 : 1,
    ...sizes[size],
  }

  const variants: Record<Variant, React.CSSProperties> = {
    primary: {
      background: hovered ? '#3A3A3A' : '#2D2D2D',
      color: '#F9F7F4',
    },
    gold: {
      background: hovered ? 'var(--mc-gold-deep)' : 'var(--mc-gold)',
      color: hovered ? '#F9F7F4' : '#1A1A1A',
    },
    ghost: {
      background: hovered ? '#F2EDE4' : 'transparent',
      color: '#2D2D2D',
      boxShadow: 'inset 0 0 0 1px #2D2D2D',
    },
    light: {
      background: hovered ? '#F9F7F4' : 'transparent',
      color: '#F9F7F4',
      boxShadow: `inset 0 0 0 1px var(--mc-gold)`,
    },
  }

  const combined: React.CSSProperties = { ...base, ...variants[variant], ...style }

  if (href) {
    return (
      <Link
        href={href}
        style={combined}
        className={className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combined}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {children}
    </button>
  )
}
