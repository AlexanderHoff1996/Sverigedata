import 'bootstrap/dist/css/bootstrap.min.css'   // Include Bootstrap css file

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.min.js'     // Include Bootstrap js file
import './assets/style.css'                     // Include our global css file