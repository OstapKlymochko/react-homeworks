import {axiosServices} from "./axiosServices";

import {urls} from "../configs/configs";

const carServices = {
    getAll: () => axiosServices.get(urls.cars),
    getById: (id)=> axiosServices.get(`${urls.cars}/${id}`),
    create: (newCar) => axiosServices.post(urls.cars, newCar),
    update: (id,data) => axiosServices.put(`${urls.cars}/${id}`, data),
    delete: (id) => axiosServices.delete(`${urls.cars}/${id}`)
}

export {carServices}