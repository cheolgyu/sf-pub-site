import { stockApi } from '@/api/stock.js'

const priceStore = {
    namespaced: true,
    state: () => ({
        star: [],//JSON.parse(localStorage.getItem("star")),
        info: "",
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
            var arr = payload.split(".")
            arr[0].replace("T", "")

            state.info = arr[0].replace("T", " ")
        }, set_market(state, payload) {
            state.market = payload
        },
    }

    ,
    actions: {
        async getInfo({ commit }) {
            await stockApi.getInfo().then(res => {
                commit("set_info", res)
            })
        },
        async getPrice({ commit }, p) {
            var res = await stockApi.getPrice(p)

            return res
        },
        async getMarket({ commit }, p) {
            var res = await stockApi.getMarket(p)
            var res_arr = new Array()
            res.forEach(element => {
                if (element.cp_x1 != 0) {
                    res_arr.push(element)
                }
            });

            return res_arr
        },

        async geDayTrading({ commit }, p) {
            var res = await stockApi.geDayTrading(p)
            return res
        },
        async GetMonthlyPeek({ commit }, p) {
            var res = await stockApi.GetMonthlyPeek(p)
            return res
        },

    }
}
export default priceStore
