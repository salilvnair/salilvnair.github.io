/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#060610',
          surface: '#0d0d1a',
          card: '#111127',
        },
        border: {
          DEFAULT: '#1e1e35',
          bright: '#2a2a4a',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
          glow: 'rgba(99,102,241,0.25)',
        },
        /* ── Themed tokens (CSS vars, swap on .dark) ── */
        'th-bg':      'var(--th-bg)',
        'th-surface': 'var(--th-surface)',
        'th-card':    'var(--th-card)',
        'th-alt':     'var(--th-alt)',
        'th-border':  'var(--th-border)',
        'th-bright':  'var(--th-bright)',
        'th-hi':      'var(--th-hi)',
        'th-mid':     'var(--th-mid)',
        'th-lo':      'var(--th-lo)',
        'th-faint':   'var(--th-faint)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'typing-dot': 'typingDot 1.4s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        typingDot: {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '30%': { transform: 'translateY(-6px)', opacity: '1' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.1), 0 0 60px rgba(99,102,241,0.05)' },
          '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.25), 0 0 80px rgba(99,102,241,0.1)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(99,102,241,0.15)',
        'glow-md': '0 0 40px rgba(99,102,241,0.2)',
        'glow-lg': '0 0 60px rgba(99,102,241,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
