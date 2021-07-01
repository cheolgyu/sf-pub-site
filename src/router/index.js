import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StockView from '../views/StockView.vue'
import StockIdView from '../views/StockIdView.vue'
import GameBotView from '../views/GameBotView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stock',
    name: 'Stock',
    component: StockView
  },
  {
    path: '/stock/:id',
    name: 'StockId',
    component: StockIdView
  },
  {
    path: '/gamebot',
    name: 'GameBot',
    component: GameBotView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
