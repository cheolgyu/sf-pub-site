import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stock from '../views/stock/Stock.vue'
import StockHome from '../views/stock/StockHome.vue'
import StockDetail from '../views/stock/StockDetail.vue'
import StockRebound from '../views/stock/StockRebound.vue'
import StockDayTrading from '../views/stock/StockDayTrading.vue'
import StockMonthlyPeek from '../views/stock/StockMonthlyPeek.vue'
import GameBotView from '../views/GameBotView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stock',
    component: Stock,
    children: [
      { path: '', component: StockHome },
      { path: 'rebound', component: StockRebound },
      { path: 'day_trading', component: StockDayTrading },
      { path: 'monthly_peek', component: StockMonthlyPeek },
      { path: ':id', component: StockDetail ,name:"stock_id" },
    ]
  },

  {
    path: '/gamebot',
    name: 'GameBot',
    component: GameBotView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
