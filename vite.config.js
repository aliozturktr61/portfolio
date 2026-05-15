import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Vite yapılandırması — React JSX dönüşümü ve HMR için @vitejs/plugin-react */
export default defineConfig({
  plugins: [react()],
})
