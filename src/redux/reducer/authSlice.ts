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
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
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
      state.name = '';
      state.loader = false;
      state.error = undefined;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addTokens, logout, changeEmail, changeName, setError, setLoader } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
