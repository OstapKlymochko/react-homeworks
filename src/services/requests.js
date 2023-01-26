import {axiosService} from './axiosService'
import {urls} from "../configs/configs";

const requests = {
    getAll: (item) => axiosService.get(urls[item]),
    getById: (item, id) => axiosService.get(`${urls[item]}/${id}`)
}

export {requests}