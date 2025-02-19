import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  TValidateLoginDetailData,
  TValidateLoginDetailResponse,
} from 'types/api_response_data_models';
import {AsyncStorageKeys} from 'utilities/async_storage_keys';
import {
  ClearDataFromAsyncStorage,
  SaveDataToAsyncStorage,
} from 'utilities/async_storage_utils';

export type TLoginData = {
  isUserLoggedIn: boolean;
  isUserLoggedOut: boolean;
  loginData: TValidateLoginDetailData | null;
};

const initialState: TLoginData = {
  isUserLoggedIn: false,
  isUserLoggedOut: false,
  loginData: null,
};

const loginSlice = createSlice({
  name: 'loginData',
  initialState: initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<TValidateLoginDetailResponse>) => {
      state.isUserLoggedIn = true;
      state.isUserLoggedOut = false;
      state.loginData = action?.payload?.responseData ?? null;

      SaveDataToAsyncStorage(AsyncStorageKeys.LOGIN_STATUS, 'LOGGED_IN');
      SaveDataToAsyncStorage(
        AsyncStorageKeys.USER_TOKEN,
        action?.payload?.responseData?.token ?? '',
      );
      SaveDataToAsyncStorage(
        AsyncStorageKeys.REFRESH_TOKEN,
        action?.payload?.responseData?.refreshToken ?? '',
      );
      SaveDataToAsyncStorage(
        AsyncStorageKeys.USER_LOGIN_DATA,
        JSON.stringify(action?.payload ?? ''),
      );
    },

    userLogout: state => {
      state.isUserLoggedIn = false;
      state.isUserLoggedOut = true;
      state.loginData = null;
      ClearDataFromAsyncStorage();
    },
  },
});

export const {userLogin, userLogout} = loginSlice.actions;
export default loginSlice.reducer;
