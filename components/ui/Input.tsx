'use client'

interface InputProps {
  label: string
  type?: string
  error?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  name?: string
}

export default function Input({
  label,
  type = 'text',
  error,
  required,
  value,
  onChange,
  placeholder,
  name,
}: InputProps) {
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
      <input
        type={type}
        name={name}
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
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--status-error)',
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}
