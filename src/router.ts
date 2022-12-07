import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonPage',
    component: () => import('./pages/Pokemon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
