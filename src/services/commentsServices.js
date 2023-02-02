import {axiosService} from "./axiosService";
import {urls} from "../configs/requests";

const commentsServices = {
    getAll: () => axiosService.get(urls.comments)
}

export {
    commentsServices
}