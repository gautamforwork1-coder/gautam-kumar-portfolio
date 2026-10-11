/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#101116', paper: '#f4f1e9', lime: '#c5f467', muted: '#92939a' },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
    },
  },
  plugins: [],
}
