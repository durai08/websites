import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'cafe-restaurant': resolve(__dirname, 'cafe-restaurant/index.html'),
        'crackers-shop': resolve(__dirname, 'crackers-shop/index.html'),
        'flower-shop': resolve(__dirname, 'flower-shop/index.html'),
        'ice-cream-shop': resolve(__dirname, 'ice-cream-shop/index.html'),
        'medical-clinic': resolve(__dirname, 'medical-clinic/index.html'),
        'pro-ecommerce': resolve(__dirname, 'pro-ecommerce/index.html'),
        'smart-tools': resolve(__dirname, 'smart-tools/index.html'),
        'sweet-shop': resolve(__dirname, 'sweet-shop/index.html'),
      },
    },
  },
})
