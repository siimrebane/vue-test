/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios';

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) // provides axios

registerPlugins(app)

app.mount('#app')
