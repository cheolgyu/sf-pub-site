import { companyApi } from '@/api/stock.js'

const companyStore = {
    namespaced: true,
    state: () => ({
        chart: new Map(),
        chartline: new Map(),
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
        async getCompany({ commit }, p) {
            var res = await companyApi.getCompany(p)
            return res
        },

        async getChart({ commit }, p) {
            var res = await companyApi.getChart(p)
            commit("set_chart", res)
            return res
        },

        async getChartNextLine({ commit }, p) {
            var res = await companyApi.getChartNextLine(p)
            commit("set_chart_next", res)
            return res
        },

        async getRebound({ commit }, p) {
            var res = await companyApi.getCompanyRebound(p)
            return res
        },
    }
}
export default companyStore
