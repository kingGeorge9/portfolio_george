import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/ 
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio_george',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name.replace(/[\s&]+/g, '-').toLowerCase();
          return `assets/${name}.[hash][extname]`;
        }
      }
    }
  },
  server: {
    fs: {
      strict: false // Allow serving files from outside the project root
    }
  }
})
