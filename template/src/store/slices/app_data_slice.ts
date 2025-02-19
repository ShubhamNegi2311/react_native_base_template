import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TAppData = {
  showLoader: boolean;
  showPrivacyGuard: boolean;
};

const initialState: TAppData = {
  showLoader: false,
  showPrivacyGuard: false,
};

const appDataSlice = createSlice({
  name: 'appData',
  initialState: initialState,
  reducers: {
    // for in app global loader
    setShowLoader: (state, action: PayloadAction<boolean>) => {
      state.showLoader = action.payload;
    },
    // for in app privacy guard
    setShowPrivacyGuard: (state, action: PayloadAction<boolean>) => {
      state.showPrivacyGuard = action.payload;
    },

    // clear app data when user logs out
    clearAppData: state => {
      state.showLoader = false;
      state.showPrivacyGuard = false;
    },
  },
});

export const {setShowLoader, setShowPrivacyGuard, clearAppData} =
  appDataSlice.actions;

export default appDataSlice.reducer;
