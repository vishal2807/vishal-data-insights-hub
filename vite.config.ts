import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Ensure this is still here
    }
  },
  preview: {
    allowedHosts: [
      'vishalbachal.me', // Allow your custom domain
      'vishal-data-insights-hub.onrender.com' // Optional: Allow Render's default domain too
    ]
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5000')
  }
})
