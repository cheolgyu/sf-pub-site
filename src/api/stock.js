import axios from '@/plugins/axios'

class Company {
    getDetail(code) {
        var url = `detail/company/${code}`
        const res = axios.get(url).then(function (resp) {
            var res = {
                code: code,
                data: JSON.parse(resp.data)
            }
            return res
        })

        return res
    }
}
const CompanyApi = new Company()
export { CompanyApi }

// GET COMPANY DETAIL
