import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // OvioPlus brand — deep blue base with purple + cyan accents
        brand: {
          // Brand colors — kept consistent for buttons/accents
          cyan: '#2CABE6',
          'cyan-dark': '#1A8AC0',
          'cyan-light': '#5CC4F0',
          'cyan-50': '#E8F4FB',
          amber: '#FFA042',
          // Light sky-blue theme — soft pastel backgrounds
          ink: '#0F172A',          // Headline text, almost-black
          surface: '#FFFFFF',       // Card surface — pure white
          'surface-2': '#F5F8FF',  // Soft tint surface
          'surface-3': '#E4EDFB',  // Deeper tint for hover/elevated
          'sky': '#D7E7FA',         // Page background — light sky blue
          'sky-light': '#EAF3FE',  // Lighter sky
        },
        text: {
          primary: '#0F172A',       // Near-black headlines
          secondary: '#475569',     // Body / subtitle gray-blue
          muted: '#94A3B8',         // Captions, metadata
        },
        line: 'rgba(15, 23, 42, 0.08)',
        'line-strong': 'rgba(15, 23, 42, 0.14)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'gradient-shift': 'gradientShift 14s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'marquee': 'marquee 38s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -20px) rotate(60deg)' },
          '66%': { transform: 'translate(-20px, 30px) rotate(120deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2CABE6 0%, #5CC4F0 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(44,171,230,0.20) 0%, rgba(44,171,230,0.05) 100%)',
        'grid': "linear-gradient(rgba(166,180,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(166,180,212,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
