interface EyebrowProps {
  children: React.ReactNode
  light?: boolean
}

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: light ? 'var(--mc-gold)' : 'var(--mc-gold-deep)',
      }}
    >
      {children}
    </div>
  )
}
