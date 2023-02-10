import axios from "axios";

import {baseURL} from "../configs";
import {authServices} from "./authServices";
import {createBrowserHistory} from "history";

const apiService = axios.create({baseURL});

const history = createBrowserHistory()

apiService.interceptors.request.use((config) => {
    if (authServices.isAuthorized()) {
        const access = authServices.getAccessToken();
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
})

let isRefreshing = false;

apiService.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const refresh = authServices.getRefreshToken();

    if (error.response?.status === 401 && !isRefreshing && refresh) {
        isRefreshing = true;
        try {
            await authServices.refresh(refresh);
        } catch (e) {
            authServices.deleteTokens();
            history.replace('/login?expSession=true');
        }
        isRefreshing = false;
        return apiService(error.config);
    }
    return Promise.reject(error);

})

export {
    apiService,
    history
}