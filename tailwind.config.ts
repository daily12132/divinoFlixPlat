import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'linear-gradient(90deg, #ED213A, #E50914)',
        'gradient-netflix1': 'linear-gradient(90deg, #1565C0, #b92b27)',
        'gradient-netflix2': 'linear-gradient(90deg, #8E2DE2, #4A00E0)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      animation: {
        pulse2: 'pulse2 1.3s ease-in-out infinite',
        slideDown: 'slideDown 300ms ease-in-out',
        slideUp: 'slideUp 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
