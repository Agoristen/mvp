import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    dedupe: ['vue'],
    alias: {
      // vue: "vue/dist/vue.cjs.js" (didn't help),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    force : true, // To recompile each time (for yalc, otherwise it's just using cache)
  }
})
