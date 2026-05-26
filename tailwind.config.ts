import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mc-charcoal': '#2D2D2D',
        'mc-charcoal-ink': '#1A1A1A',
        'mc-slate': '#3A3A3A',
        'mc-grey-warm': '#6B6B6B',
        'mc-grey-soft': '#9A9590',
        'mc-gold': '#C9A84C',
        'mc-gold-deep': '#A88A33',
        'mc-gold-leaf': '#D9BC6A',
        'mc-gold-pale': '#EADBAE',
        'mc-white': '#FFFFFF',
        'mc-cream': '#F9F7F4',
        'mc-cream-warm': '#F2EDE4',
        'mc-parchment': '#EDE6D8',
        'mc-border': '#E8E4DF',
        'mc-border-strong': '#D8D2C8',
      },
      fontFamily: {
        display: ['Italiana', 'Cormorant Garamond', 'Didot', 'Bodoni 72', 'serif'],
        serif: ['Cormorant Garamond', 'EB Garamond', 'Didot', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        gallery: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      boxShadow: {
        'sm-warm': '0 1px 2px rgba(45,45,45,0.06), 0 1px 1px rgba(45,45,45,0.04)',
        'md-warm': '0 6px 18px -6px rgba(45,45,45,0.14), 0 2px 6px rgba(45,45,45,0.06)',
        'lg-warm': '0 24px 48px -16px rgba(45,45,45,0.22), 0 8px 18px -6px rgba(45,45,45,0.10)',
        'frame': '0 30px 60px -20px rgba(26,26,26,0.35), 0 12px 24px -10px rgba(26,26,26,0.18)',
      },
    },
  },
  plugins: [],
}

export default config
