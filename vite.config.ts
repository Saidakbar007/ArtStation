import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Абсолютные пути от корня: сайт живёт на своём домене (artstations.uz)
  // и с BrowserRouter отдаёт вложенные маршруты (/events/1 и т.п.) с тем же
  // index.html — относительные пути там резолвились бы неверно.
  base: '/',
  plugins: [react()],
})
