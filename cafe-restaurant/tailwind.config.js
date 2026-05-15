/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0c1b3',
          400: '#d3a28e',
          500: '#c27d60',
          600: '#ad593e',
          700: '#8b4430',
          800: '#6d3627',
          900: '#562f22',
        },
        accent: {
          gold: '#C5A059',
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


