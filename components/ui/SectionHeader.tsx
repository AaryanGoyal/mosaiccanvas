import Eyebrow from './Eyebrow'
import GoldRule from './GoldRule'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        marginBottom: 56,
        gap: 12,
      }}
    >
      {eyebrow && <Eyebrow light={light}>◆ &nbsp;{eyebrow}</Eyebrow>}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400,
          color: light ? '#F9F7F4' : 'var(--mc-charcoal)',
          margin: '4px 0 0',
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <GoldRule />
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 19,
            color: light ? '#B5AFA4' : 'var(--mc-grey-warm)',
            maxWidth: 560,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
