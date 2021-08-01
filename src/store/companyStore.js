import { stockApi } from '@/api/stock.js'

const priceStore = {
    namespaced: true,
    state: () => ({
        company: new Map(),
    }),
    mutations: {
        set_chart_next(state, payload) {
            state.company.set(payload.code, payload.data)
        }
    }

    ,
    actions: {
        async getChartNextLine({ commit }, p) {
            var res = await stockApi.getChartNextLine(p)
            commit("set_chart_next", res)
            return res
        },
    }
}
export default priceStore
