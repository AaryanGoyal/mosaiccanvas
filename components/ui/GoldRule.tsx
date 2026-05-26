export default function GoldRule({ width = 48 }: { width?: number }) {
  return (
    <span className="inline-flex items-center" style={{ gap: 10 }}>
      <span style={{ width, height: 1, background: 'var(--mc-gold)', display: 'block' }} />
      <span
        style={{
          width: 5,
          height: 5,
          background: 'var(--mc-gold)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <span style={{ width, height: 1, background: 'var(--mc-gold)', display: 'block' }} />
    </span>
  )
}
