import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stock from '../views/Stock.vue'
import GameBot from '../views/GameBot.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stock',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/gamebot',
    name: 'GameBot',
    component: GameBot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
