import axios from "axios";

export const baseBackendUrl = 'https://www.mks-software.de/ps-api';

axios.defaults.baseURL = baseBackendUrl;

export const Backend = axios.create({
    baseURL: baseBackendUrl,
    timeout: 5000,
})
