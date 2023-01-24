import axios from "axios";

import {baseURL} from "../configs/configs";

const axiosServices = axios.create({baseURL});

export {axiosServices}