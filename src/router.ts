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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./pages/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
