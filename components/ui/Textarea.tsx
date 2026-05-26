'use client'

interface TextareaProps {
  label: string
  rows?: number
  error?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  name?: string
}

export default function Textarea({
  label,
  rows = 4,
  error,
  required,
  value,
  onChange,
  placeholder,
  name,
}: TextareaProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--mc-grey-warm)',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--mc-gold)', marginLeft: 4 }}>*</span>}
      </label>
      <textarea
        name={name}
        rows={rows}
        required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '14px 16px',
          border: `1px solid ${error ? 'var(--status-error)' : 'var(--mc-border-strong)'}`,
          background: '#FFFFFF',
          borderRadius: 4,
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          color: 'var(--mc-charcoal)',
          outline: 'none',
          width: '100%',
          resize: 'vertical',
          transition: 'border-color 200ms',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--mc-gold)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? 'var(--status-error)' : 'var(--mc-border-strong)'
        }}
      />
      {error && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--status-error)' }}>
          {error}
        </span>
      )}
    </div>
  )
}
