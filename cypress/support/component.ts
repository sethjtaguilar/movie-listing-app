import { mount } from 'cypress/vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Augment the Cypress namespace to include type definitions for
// your custom command
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup Vuetify
  const vuetify = createVuetify({ components, directives })

  return mount(component, {
    global: {
      plugins: [vuetify],
    },
    ...options,
  })
})
