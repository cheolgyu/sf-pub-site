const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings

const backend_api = "http://localhost:5000/"
const instance = axios.create({
    baseURL: backend_api,
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export default instance
