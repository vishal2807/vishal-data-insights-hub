import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  preview: {
    // Allow your Render domain in Vite's preview server
    allowedHosts: ['vishal-data-insights-hub.onrender.com']
  },
  server: {
    // Ensure the server binds to all interfaces
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5000') // Use Render's assigned port
  }
})
