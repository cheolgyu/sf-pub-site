import { stockApi } from '@/api/stock.js'

const priceStore = {
    namespaced: true,
    state: () => ({
        chart: new Map(),
        company: new Map(),
    }),
    mutations: {
        set_chart(state, payload) {
            var map_page = new Map();
            map_page.set(payload.data.page, payload.data.data)
            state.chart.set(payload.code, map_page)
        },
        set_chart_next(state, payload) {
            state.company.set(payload.code, payload.data)
        }
    }

    ,
    actions: {
        async getChart({ commit }, p) {
            var res = await stockApi.getChart(p)
            commit("set_chart", res)
            return res
        },

        async getChartNextLine({ commit }, p) {
            var res = await stockApi.getChartNextLine(p)
            commit("set_chart_next", res)
            return res
        },
    }
}
export default priceStore
