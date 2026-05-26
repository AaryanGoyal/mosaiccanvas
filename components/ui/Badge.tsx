interface BadgeProps {
  label: string
  variant?: 'default' | 'gold' | 'dark'
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    default: {
      background: 'rgba(249,247,244,0.92)',
      color: 'var(--mc-gold-deep)',
    },
    gold: {
      background: 'var(--mc-gold)',
      color: '#1A1A1A',
    },
    dark: {
      background: 'var(--mc-charcoal-ink)',
      color: 'var(--mc-gold-pale)',
    },
  }

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '5px 10px',
        fontFamily: 'var(--font-sans)',
        fontSize: 9.5,
        fontWeight: 500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase' as const,
        ...styles[variant],
      }}
    >
      {label}
    </span>
  )
}
