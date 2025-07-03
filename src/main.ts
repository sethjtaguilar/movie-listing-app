import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import '@/styles/index.scss'
import App from './App.vue'

createApp(App)
  .use(vuetify)
  .mount('#app')
