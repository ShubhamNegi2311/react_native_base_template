import axios, {CreateAxiosDefaults} from 'axios';
import {BASE_URL} from 'utilities/constants';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  headers: {
    [`x-rapidapi-host`]: 'tasty.p.rapidapi.com',
    [`x-rapidapi-key`]: '67be4ec963msh738f546cc84f324p1adcd5jsn897244e0134c',
  },
};

export const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  config => {
    console.info('API_REQUEST ===>', JSON.stringify(config));
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);
