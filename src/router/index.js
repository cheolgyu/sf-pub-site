import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stock from '../views/stock/Stock.vue'
import StockNav from '../views/stock/StockNav.vue'
import StockHome from '../views/stock/StockHome.vue'
import StockDetail from '../views/stock/StockDetail.vue'
import StockRebound from '../views/stock/StockRebound.vue'
import StockDayTrading from '../views/stock/StockDayTrading.vue'
import StockMonthlyPeek from '../views/stock/StockMonthlyPeek.vue'
import StockMarketHist from '../views/stock/StockMarketHist.vue'
import Stock52Weeks from '../views/stock/Stock52Weeks.vue'
import GameBotView from '../views/GameBotView.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '홈' },
  },
  {
    path: '/stock',
    meta: { title: '주식' },
    component: Stock,
    children: [
      { path: '', component: StockHome, meta: { title: '주식홈' } },
      { path: 'rebound', component: StockRebound, meta: { title: '반등' } },
      { path: 'day_trading', component: StockDayTrading, meta: { title: '단타' } },
      { path: 'monthly_peek', component: StockMonthlyPeek, meta: { title: '피크월' } },
      { path: 'market_hist', component: StockMarketHist, meta: { title: '마켓내역' } },
      { path: '52weeks', component: Stock52Weeks, meta: { title: '52주' } },
      { path: ':id', component: StockDetail, name: "stock_id", meta: { title: '' } },
    ]
  },

  {
    path: '/gamebot',
    name: 'GameBot',
    component: GameBotView,
    meta: { title: '게임봇' },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
router.afterEach((to, from, failure) => {
  //if (!failure) sendToAnalytics(to.fullPath)
})

export default router
