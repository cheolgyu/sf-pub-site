import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StockIndex from '../views/stock/index.vue'
import StockId from '../views/stock/id.vue'
import StockIndexBound from '../views/stock/bound/index.vue'
import StockIndexDayTrading from '../views/stock/day_trading/index.vue'
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
    component: StockIndex,
    children: [
      { path: 'bound', component: StockIndexBound },
      { path: 'day_trading', component: StockIndexDayTrading },
      { path: 'detail/:id', component: StockId },
    ]
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
