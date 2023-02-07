import {axiosService} from "./axiosServices";
import {urls} from "../configs/urls";

const postsServices = {
    getAll : ()=> axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsServices
}