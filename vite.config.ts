import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/store-products/',
  build: {
    outDir: '../static/store-products/',
    // rollupOptions: {
    //   output: {
    //     name: 'store_products.html',
    //   }
    // }
    // assetsDir: '../static/store-products/',
  },
})
