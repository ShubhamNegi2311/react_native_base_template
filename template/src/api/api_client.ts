import axios, {AxiosHeaders, AxiosInstance, CreateAxiosDefaults} from 'axios';
import {store} from 'store';
import {TRefreshTokenRequest} from 'types/api_request_data_models';
import {AsyncStorageKeys} from 'utilities/async_storage_keys';
import {
  ReadDataFromAsyncStorage,
  SaveDataToAsyncStorage,
} from 'utilities/async_storage_utils';
import {BASE_URL} from 'utilities/constants';
import {logoutUser} from 'utilities/utils';
import {REFRESH_TOKEN} from './api_urls';

const axiosConfig: CreateAxiosDefaults = {
  timeout: 60000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

let refreshApiCalled = false;

export const refreshAccessTokenFn = async () => {
  try {
    if (!refreshApiCalled) {
      refreshApiCalled = true;
      const refreshToken = await ReadDataFromAsyncStorage(
        AsyncStorageKeys.REFRESH_TOKEN,
      );
      const request: TRefreshTokenRequest = {
        refreshToken: refreshToken ?? '',
      };
      const response = await axiosInstance(BASE_URL).post(
        REFRESH_TOKEN,
        request,
      );
      await SaveDataToAsyncStorage(
        AsyncStorageKeys.REFRESH_TOKEN,
        response?.data?.refreshTokenData?.refreshToken ?? '',
      );
      await SaveDataToAsyncStorage(
        AsyncStorageKeys.USER_TOKEN,
        response?.data?.refreshTokenData?.token ?? '',
      );
    }
  } catch (error) {
    refreshApiCalled = false;
  }
};

export const axiosInstance = (baseURL: string) => {
  const instance = axios.create({baseURL, ...axiosConfig});
  // Apply common interceptors
  applyApiInterceptors(instance);
  return instance;
};

// common method for interceptors for different base URLs.
const applyApiInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      console.info('API_ERROR ===> ', JSON.stringify(error));
      const originalRequest = error.config;
      const errorCode = error.response.status;
      if (
        errorCode === 401 &&
        !originalRequest._retry &&
        (originalRequest?.url ?? '') !== REFRESH_TOKEN
      ) {
        originalRequest._retry = true;
        await refreshAccessTokenFn();
        return axiosInstance(originalRequest);
      }
      if (
        [401, 404].includes(errorCode) &&
        (originalRequest?.url ?? '') === REFRESH_TOKEN
      ) {
        // make user logout in case refresh token api provides error.
        logoutUser(store.dispatch);
      }
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(async config => {
    const accessToken = await ReadDataFromAsyncStorage(
      AsyncStorageKeys.USER_TOKEN,
    );
    if (config.url === REFRESH_TOKEN) {
      // in case of refresh token don not send token in header
      const axiosHeaders = new AxiosHeaders();
      config.headers = axiosHeaders;
    } else {
      if (!config.headers) {
        const axiosHeaders = new AxiosHeaders();
        config.headers = axiosHeaders;
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  });
};
