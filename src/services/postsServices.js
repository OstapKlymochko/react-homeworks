import {axiosService} from "./axiosService";
import {urls} from "../configs/requests";

const postsServices = {
    getAll: () => axiosService.get(urls.posts)
}

export {postsServices}