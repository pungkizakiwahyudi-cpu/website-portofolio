/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#040b14',
          secondary: '#071120',
          card: 'rgba(7,17,32,0.85)',
        },
        accent: {
          blue: '#00a6fb',
          cyan: '#00e5ff',
          pink: '#e040fb',
        },
        text: {
          primary: '#f0f6ff',
          muted: '#7a8fa6',
        }
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-slow-reverse': 'spin 10s linear infinite reverse',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float1': 'float1 4s ease-in-out infinite',
        'float2': 'float2 5s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        'float1': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float2': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
