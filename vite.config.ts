import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Относительные пути — сайт работает и в подкаталоге (GitHub Pages:
  // https://saidakbar007.github.io/ArtStation/), и на своём домене.
  base: './',
  plugins: [react()],
})
