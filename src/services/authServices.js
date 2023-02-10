import {apiService} from "./apiService";
import {urls} from "../configs";


const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authServices = {
    login: async function (cred) {
        const response = await apiService.post(urls.auth.login, cred);
        if (response.status === 200) {
            this.setTokens(response.data);
        }
        return response;
    },
    refresh: async function (refresh) {
        const response = await apiService.post(urls.auth.refresh, {refresh});
        if (response.status === 200) {
            console.log('refresh');
            this.setTokens(response.data);
        }
        return response;
    },
    me: () => apiService.get(urls.auth.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
        console.log('tokens set')
    },
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
        console.log('tokens removed');
    },
    isAuthorized: () => !!localStorage.getItem(accessTokenKey)
}


export {
    authServices
}
