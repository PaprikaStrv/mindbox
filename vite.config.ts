import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mindbox",
  plugins: [react()],
  resolve: {
    alias: { 
     "@ui": path.resolve(__dirname, "src/ui"),
     "@components": path.resolve(__dirname, "src/components"),
  },
}
})
