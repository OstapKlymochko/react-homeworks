import {apiServices, IRes} from "./apiServices";
import {ICar} from "../interfaces";
import {urls} from "../configs";


const carServices = {
    getAll: (): IRes<ICar[]> => apiServices.get(urls.cars.cars)
}

export {
    carServices
}