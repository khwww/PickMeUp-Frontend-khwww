import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    visualizer({
      filename: 'stats.html',
      open: true,
      gzipSize: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-animation': ['framer-motion', 'lottie-web'],
          'vendor-utils': ['axios', 'swiper', 'uuid'],
        },
      },
    },
  },
});
