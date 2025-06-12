import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Maps `@/` to `src/`
    }
  },
  preview: {
    allowedHosts: ['vishal-data-insights-hub.onrender.com']
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5000')
  }
})
