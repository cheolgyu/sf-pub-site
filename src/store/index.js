import { createStore } from 'vuex'

import priceStore from './priceStore.js'
import { stockApi } from '@/api/stock.js'

export default createStore({
  state: {
    config: new Map(),
  },
  mutations: {
    set_config(state, payload) {
      state.config = new Map();

      payload.forEach(element => {
        if (undefined === state.config[element.upper_code]) {
          state.config[element.upper_code] = new Array()
        }
        state.config[element.upper_code].push(element);
      });
      return state.config
    }
  },
  actions: {
    async get_config({ commit, state }, config_name) {
      var res = [];
      if (state.config.size == 0) {
        await stockApi.getConfig().then(res => {
          commit("set_config", res)
        })
      }

      return state.config[config_name]
    },
  },
  modules: {
    priceStore: priceStore
  }
})
