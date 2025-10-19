import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Only use /jax-pavers/ base path in production (GitHub Pages)
  const base = mode === 'production' ? '/jax-pavers/' : '/'

  return {
    plugins: [react()],
    base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            framer: ['framer-motion']
          }
        }
      }
    }
  }
})
