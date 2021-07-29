import { createStore } from 'vuex'

import priceStore from './priceStore.js'
import { stockApi } from '@/api/stock.js'

export default createStore({
  state: {
    market_list: [],
    price_type_list: []
  },
  mutations: {
    set_config(state, payload) {
      payload.forEach(element => {
        if (element.upper_code == "market_type") {
          state.market_list.push(element)
        } else if (element.upper_code == "price_type") {
          state.price_type_list.push(element)
        }
      });
    }
  },
  actions: {
    get_config({ commit, state }, config_name) {
      var res = [];
      if (state.market_list.length == 0 || state.price_type_list.length == 0) {
        res = stockApi.getConfig().then(res => {
          commit("set_config", res)
          return res
        })
      } else {
        if (config_name == "market") {
          res = state.market_list
        } else if (config_name == "price_type") {
          res = state.price_type_list
        }

      }
      return res
    },
  },
  modules: {
    priceStore: priceStore
  }
})
