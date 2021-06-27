const priceStore = {
    namespaced: true,
    state: () => ({
        star: [],//JSON.parse(localStorage.getItem("star")),
        info: "",
        chart: new Map(),
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
        set_detail_company(state, payload) {
            state.company.set(payload.code, payload.data)

        }
    }

    ,
    actions: {
        async getPrice({ commit }, p) {

            var url = `price?page=${p.page}`
            url += `&rows=${p.rows}`
            url += `&sort=${p.sort}`
            url += `&desc=${p.desc}`
            url += `&state=${p.state.join()}`
            url += `&market=${p.market.join()}`
            url += `&search=${p.search}`

            const res = await this.$axios.get(url).then(function (resp) {
                commit("set_info", resp.data.info)
                return resp.data.price
            })
            return res
        },
        async getMarket({ commit }, p) {
            var url = "market?"
            url += `&sort=${p.sort}`
            url += `&desc=${p.desc}`

            const res = await this.$axios.get(url).then(function (resp) {
                commit("set_info", resp.data.info)
                return resp.data.market
            })
            return res
        },
        async getDetailChart({ commit }, p) {

            var url = `detail/chart/${p.code}?page=${p.page}`

            const res = await this.$axios.get(url).then(function (resp) {

                var res = {
                    code: p.code,
                    data: {
                        page: p.page,
                        data: JSON.parse(resp.data)
                    }
                }
                commit("set_detail_chart", res)
                return res
            })
            return res
        },
        async getDetailCompany({ commit }, p) {

            var url = `detail/company/${p.code}`

            const res = await this.$axios.get(url).then(function (resp) {

                var res = {
                    code: p.code,
                    data: JSON.parse(resp.data)
                }
                commit("set_detail_company", res)
                return res
            })
            return res.data
        }
    }
}
export default priceStore
