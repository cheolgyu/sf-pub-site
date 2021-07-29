import axios from '@/plugins/axios'

var url = new Map();
url.set("getInfo", "info")
class Api {
    async getConfig() {
        var url = "config"
        var data = await axios.get(url).then(function (resp) {
            return resp.data;
        })

        return data
    }

    async getInfo() {
        var url = "info"
        const res = await axios.get(url).then(function (resp) {
            return resp.data.info;
        })
        return res
    }
    async getPrice(p) {
        var url = `price/stock?page=${p.page}`
        url += `&rows=${p.rows}`
        url += `&sort=${p.sort}`
        url += `&desc=${p.desc}`
        url += `&state=${p.state.join()}`
        url += `&market=${p.market.join()}`
        url += `&search=${p.search}`

        const res = await axios.get(url).then(function (resp) {
            return resp.data
        })
        return res
    }
    async getMarket(p) {
        var url = "price/market?"
        url += `&sort=${p.sort}`
        url += `&desc=${p.desc}`

        const res = await axios.get(url).then(function (resp) {
            return resp.data
        })
        return res
    }

    async getDetailChart(p) {
        var url = `company/${p.code}/chart?page=${p.page}`

        const res = await axios.get(url).then(function (resp) {
            var res = {
                code: p.code,
                data: {
                    page: p.page,
                    data: JSON.parse(resp.data)
                }
            }
            return res
        })
        return res
    }
    async getDetailChartLine(p) {
        var url = `company/${p.code}/chart/next`

        const res = await axios.get(url).then(function (resp) {
            var j
            var err = false
            try {
                j = JSON.parse(resp.data)
            } catch (error) {
                err = error;
                console.debug(err)
            }

            var res = {
                code: p.code,
                data: {
                    page: p.page,
                    data: j
                }
            }
            if (!err) {
                return res;
            }


        })
        return res
    }
    async getDetailCompany(p) {
        var url = `company/${p.code}`

        const res = await axios.get(url).then(function (resp) {
            return resp.data
        })
        var json_res = null;
        try {
            json_res = JSON.parse(res)
        } catch (error) {
            console.debug(error)
        }
        return json_res
    }
    async geDayTrading(p) {
        var url = "day_trading?"
        url += `&market=${p.market.join()}`
        url += `&rows=${p.rows}`
        url += `&sort=${p.sort}`
        url += `&desc=${p.desc}`
        url += `&term=${p.term}`

        const res = await axios.get(url).then(function (resp) {
            return resp.data
        }).catch(function (thrown) {
            console.log('Request canceled', thrown.message);
        });
        return res
    }
    async GetMonthlyPeek(p) {
        var url = "monthly_peek?"
        url += `&market=${p.market.join()}`
        url += `&rows=${p.rows}`
        url += `&sort=${p.sort}`
        url += `&desc=${p.desc}`

        const res = await axios.get(url).then(function (resp) {
            return resp.data
        }).catch(function (thrown) {
            console.log('Request canceled', thrown.message);
        });
        return res
    }
    async getCompanyRebound(p) {
        var url = `company/${p.code}/rebound?page=${p.page}`
        url += `&rows=${p.rows}`
        url += `&sort=${p.sort}`
        url += `&desc=${p.desc}`
        url += `&price_type=${p.price_type}`

        const res = await axios.get(url).then(function (resp) {
            return resp.data
        })
        return res
    }
}



const stockApi = new Api()

export { stockApi }

// GET COMPANY DETAIL
