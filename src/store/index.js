import { createStore } from 'vuex'

import priceStore from './priceStore.js'
import { stockApi } from '@/api/stock.js'

export default createStore({
  state: {
    market_list: []
  },
  mutations: {
    set_market_list(state, payload) {
      state.market_list = payload
    }
  },
  actions: {
    async set_market_list({ commit }) {
      var res = await stockApi.getConfigMarketList()
      commit("set_market_list", res)
      return res
    },
  },
  modules: {
    priceStore: priceStore
  }
})
