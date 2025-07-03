import { startDevServer } from '@cypress/vite-dev-server'

export default (on, config) => {
  on('dev-server:start', async (options) => {
    return startDevServer({
      options,
      viteConfig: await import('../vite.config.js')
    })
  })

  return config
}
