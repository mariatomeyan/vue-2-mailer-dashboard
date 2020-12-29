import axios from "axios";
let HOST = process.env.VUE_APP_API_HOST

export default  {
    get(url) {
        return axios.get(HOST+url)
    },
    post(url, params) {
        return axios.post(HOST+url, params)
    },
    put(){},
    delete(){}
}

