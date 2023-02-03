import axios from "axios";
import {UsersBaseURL} from "../configs/urls";

const usersServices = {
    getAll: () => axios.get(UsersBaseURL),
    getById: (id) => axios.get(`${UsersBaseURL}/${id}`),
    create: (newItem) => axios.post(UsersBaseURL, newItem),
    updateById: (id,newItem)=> axios.put(`${UsersBaseURL}/${id}`, newItem),
    deleteById: (id) => axios.delete(`${UsersBaseURL}/${id}`)
}

export {usersServices}