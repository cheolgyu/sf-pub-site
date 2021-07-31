import { createStore } from 'vuex'

import priceStore from './priceStore.js'
import { stockApi } from '@/api/stock.js'

var meta_config = new Map()

async function application_config(params) {
  var res = stockApi.getConfig()
  res.forEach(element => {
    if (!meta_config.has(element.upper_code)) {
      meta_config.set(element.upper_code, new Array())
    }
    meta_config.get(element.upper_code).push(element);
  });

}
application_config();

export default createStore({
  state: {
    config: meta_config,
  },
  mutations: {
  },
  actions: {
    async get_config({ commit, state }, config_name) {
      return state.config.get(config_name)
    },
  },
  modules: {
    priceStore: priceStore
  }
})
