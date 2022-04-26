import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import TatorterView from '../views/TatorterView.vue'
import KommunerView from '../views/KommunerView.vue'
import LanView from '../views/LanView.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/tatorter',
    name: 'tatorter',
    component: TatorterView
  },
  {
    path: '/kommuner',
    name: 'kommuner',
    component: KommunerView
  },
  {
    path: '/lan',
    name: 'lan',
    component: LanView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
