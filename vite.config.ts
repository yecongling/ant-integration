import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import {viteMockServe} from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/userApi": {
        target: "http://localhost:8082",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/userApi/, "")
      },
      "/permissionApi": {
        target: "http://localhost:8082",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/permissionApi/, "")
      }
    }
  },
  plugins: [
    react(),
    viteMockServe({
      mockPath: "./src/mock",
      localEnabled: true,
      prodEnabled: false,
      watchFiles: true,
      injectCode: `
                  import { setupProdMockServer } from './mockProdServer';
                  setupProdMockServer();
                `,
      logger: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
