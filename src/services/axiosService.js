import axios from "axios";

import {baseURL} from "../configs/requests";

const axiosService = axios.create({baseURL});

export {
    axiosService
}

