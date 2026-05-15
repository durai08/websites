/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          blue: '#2563EB',
          teal: '#0D9488',
          light: '#F8FAFC',
          dark: '#1E293B',
        }
      },
      fontFamily: {
        header: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
