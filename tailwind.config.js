/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'math-primary': '#FF6B35',
        'math-secondary': '#4ECDC4',
        'math-accent': '#FFE66D',
        'math-success': '#2ECC71',
        'math-error': '#E74C3C',
        'math-bg': '#F7FFF7'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
