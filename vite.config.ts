import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // react e tailwind
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // diretorio src
      '@': path.resolve(__dirname, './src'),
    },
  },

  // tipos de file
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
