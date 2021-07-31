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
        if (!state.config.has(element.upper_code)) {
          state.config.set(element.upper_code, new Array())
        }
        state.config.get(element.upper_code).push(element);
      });
    }
  },
  actions: {
    async get_config({ commit, state }, config_name) {
      if (!state.config.has(config_name)) {
        await stockApi.getConfig().then(res => {
          commit("set_config", res)
        })
      }
      return state.config.get(config_name)
    },
  },
  modules: {
    priceStore: priceStore
  }
})
