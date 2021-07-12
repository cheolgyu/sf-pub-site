import { stockApi } from '@/api/stock.js'

const priceStore = {
    namespaced: true,
    state: () => ({
        star: [],//JSON.parse(localStorage.getItem("star")),
        info: "",
        chart: new Map(),
        chartline: new Map(),
        company: new Map(),
    }),
    mutations: {
        toggle_star(state, code) {
            var star = state.star

            if (star == null) {
                star = []
            }
            var same = star.filter(item => item == code);
            var exist = (same.length > 0 ? true : false)
            if (exist) {
                var index = star.indexOf(code);
                if (index !== -1) {
                    star.splice(index, 1);
                }
            } else {
                star.push(code);
            }
            state.star = star
            localStorage.setItem("star", JSON.stringify(state.star));

            this.commit("stock/update_price", { code: code, exist: exist })

        }, set_info(state, payload) {
            var arr = payload[0].updated.split(".")
            arr[0].replace("T", "")

            state.info = arr[0].replace("T", " ")
        }, set_market(state, payload) {
            state.market = payload
        },
        set_detail_chart(state, payload) {
            var map_page = new Map();
            map_page.set(payload.data.page, payload.data.data)
            state.chart.set(payload.code, map_page)

        },
        set_detail_chartline(state, payload) {

            if (undefined !== payload) {
                var abc = new Object()
                payload.data.data.forEach(element => {
                    Object.assign(abc, element);
                });
                state.chartline.set(payload.code, abc)
            }

        },
        set_detail_company(state, payload) {
            state.company.set(payload.code, payload.data)

        }
    }

    ,
    actions: {
        async getInfo({ commit }) {
            commit("set_info", await stockApi.getInfo())
        },
        async getPrice({ commit }, p) {
            var res = await stockApi.getPrice(p)
            commit("set_info", res.info)
            return res.price
        },
        async getMarket({ commit }, p) {
            var res = await stockApi.getMarket(p)
            commit("set_info", res.info)
            return res.market
        },
        async getDetailChart({ commit }, p) {
            var res = await stockApi.getDetailChart(p)
            commit("set_detail_chart", res)
            return res
        },
        async getDetailChartLine({ commit }, p) {
            var res = await stockApi.getDetailChartLine(p)
            commit("set_detail_chartline", res)
            return res
        },
        async getDetailCompany({ commit }, p) {
            var res = await stockApi.getDetailCompany(p)
            return res
        },
        async geDayTrading({ commit }, p) {
            var res = await stockApi.geDayTrading(p)
            return res
        }, async GetMonthlyPeek({ commit }, p) {
            var res = await stockApi.GetMonthlyPeek(p)
            return res
        },
    }
}
export default priceStore
