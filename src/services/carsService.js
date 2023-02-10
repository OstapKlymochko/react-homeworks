import {apiService} from "./apiService";
import {urls} from "../configs";


const carsService = {
    getAll: (page = 1) => apiService.get(urls.cars,{params:{page}}),
    getById: (id) => apiService.get(`${urls.cars}/${id}`),
    create: (newCar) => apiService.post(urls.cars, newCar),
    update: (id, data) => apiService.put(`${urls.cars}/${id}`, data),
    delete: (id) => apiService.delete(`${urls.cars}/${id}`)
}

export {
    carsService
}