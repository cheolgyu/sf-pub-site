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
    get_market_list({ commit, state }) {
      var res = [];
      if (state.market_list.length == 0) {
        res = stockApi.getConfigMarketList().then(res => {
          commit("set_market_list", res)
          return res
        })
      } else {
        res = state.market_list
      }
      return res
    },
  },
  modules: {
    priceStore: priceStore
  }
})
