import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace YOUR-USERNAME and REPO-NAME
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
})
