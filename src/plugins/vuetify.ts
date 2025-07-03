import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976d2',
          secondary: '#424242',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          surface: '#FFFFFF',
          background: '#f5f5f5',
          'on-surface': '#1976d2',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
        }
      }
    }
  },
  defaults: {
    VBtn: {
      // Default button hover behavior
      color: undefined, // Let Vuetify handle colors naturally
    }
  }
})
