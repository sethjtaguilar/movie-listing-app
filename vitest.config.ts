import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    server: {
      deps: {
        inline: ['vuetify']  // New recommended way
      }
    },
    // Alternative approach:
    deps: {
      optimizer: {
        web: {
          include: ['vuetify']  // For web-based projects
        }
      }
    },
    coverage: {
      provider: 'v8'
    }
  }
})
