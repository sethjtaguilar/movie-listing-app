import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: async () => {
        const { default: viteConfig } = await import('./vite.config.js')
        return {
          ...viteConfig,
          server: {
            ...viteConfig.server,
            fs: {
              allow: ['.']
            }
          }
        }
      }
    },
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:5173'
  }
})
