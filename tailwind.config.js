/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./cafe-restaurant/**/*.{html,js,jsx}",
    "./crackers-shop/**/*.{html,js,jsx}",
    "./flower-shop/**/*.{html,js,jsx}",
    "./ice-cream-shop/**/*.{html,js,jsx}",
    "./medical-clinic/**/*.{html,js,jsx}",
    "./pro-ecommerce/**/*.{html,js,jsx}",
    "./smart-tools/**/*.{html,js,jsx}",
    "./sweet-shop/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cafe & Restaurant
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
        },
        // Flower Shop
        flower: {
          pink: '#F9A8D4',
          rose: '#BE123C',
          green: '#065F46',
          cream: '#FFFBEB',
        },
        // Crackers Shop
        festive: {
          red: '#FF1E1E',
          gold: '#FFD700',
          blue: '#1E3A8A',
          dark: '#0A0A0B',
        },
        // Ice Cream Shop
        ice: {
          blue: '#0EA5E9',
          cyan: '#E0F2FE',
          orange: '#F97316',
          yellow: '#FDE047',
        },
        // Medical Clinic
        clinic: {
          blue: '#2563EB',
          teal: '#0D9488',
          light: '#F8FAFC',
          dark: '#1E293B',
        },
        // Pro Ecommerce
        shop: {
          purple: '#7C3AED',
          slate: '#0F172A',
          gray: '#F1F5F9',
        },
        // Smart Tools
        tools: {
          cyan: '#06B6D4',
          dark: '#020617',
          surface: '#0F172A',
        },
        // Sweet Shop
        sweet: {
          mint: '#D1FAE5',
          pink: '#FCE7F3',
          gold: '#FDE68A',
          purple: '#EDE9FE',
          brand: '#EC4899',
        },
        // General UI Colors often used in the sub-projects
        secondary: '#64748b',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        header: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        kids: ['Bubblegum Sans', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
