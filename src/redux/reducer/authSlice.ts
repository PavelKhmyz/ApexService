import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokensType } from '../../axios/types';
import { authData } from '../initialStates/intialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authData,
  reducers: {
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    changePasswordConfirm: (state, action: PayloadAction<string>) => {
      state.passwordConfirm = action.payload;
    },
    setIsHiden: (state) => {
      state.isHiden = !state.isHiden;
    },
    addTokens: (state, action: PayloadAction<TokensType>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setLoader: (state) => {
      state.loader = !state.loader;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.email = '';
      state.password = '';
      state.passwordConfirm = '';
      state.name = '';
      state.platform = '';
      state.isHiden = true;
      state.loader = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addTokens,
  logout,
  changeEmail,
  changePlatform,
  changePassword,
  changePasswordConfirm,
  changeName,
  setIsHiden,
  setError,
  setLoader,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
