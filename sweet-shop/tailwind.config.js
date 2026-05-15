/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sweet: {
          mint: '#D1FAE5',
          pink: '#FCE7F3',
          gold: '#FDE68A',
          purple: '#EDE9FE',
          brand: '#EC4899',
        }
      },
      fontFamily: {
        kids: ['Bubblegum Sans', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
