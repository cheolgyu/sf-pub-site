import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StockIndex from '../views/stock/index.vue'
import StockId from '../views/stock/id.vue'
import StockIndexBound from '../views/stock/bound/index.vue'
import StockIndexDayTrading from '../views/stock/day_traiding/index.vue'
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
    component: StockIndex
  },
  {
    path: '/stock/:id',
    name: 'StockId',
    component: StockId
  },
  {
    path: '/stock/bound',
    name: 'bound',
    component: StockIndexBound
  },
  {
    path: '/stock/day_trading',
    name: 'StockId',
    component: StockIndexDayTrading
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
