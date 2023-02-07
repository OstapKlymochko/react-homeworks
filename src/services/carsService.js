import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";


const carsService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create: (newCar) => axiosService.post(urls.cars,newCar),
    update: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carsService
}