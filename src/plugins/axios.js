const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings

const backend_api = process.env.VUE_APP_BACKEND_URL
const instance = axios.create({
    baseURL: backend_api,
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export default instance
