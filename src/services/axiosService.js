import axios from "axios";
import {baseURL} from "../configs/configs";

const axiosService = axios.create({baseURL});

export {axiosService}