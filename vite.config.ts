import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mindbox/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  
  resolve: {
    alias: { 
     "@ui": path.resolve(__dirname, "src/ui"),
     "@components": path.resolve(__dirname, "src/components"),
  },
}
})
