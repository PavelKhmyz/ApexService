import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authData } from '../initialStates/intialState';

interface PayloadType {
  refreshToken: string;
  accessToken: string;
}

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
    addTokens: (state, action: PayloadAction<PayloadType>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
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
} = authSlice.actions;

export const authReducer = authSlice.reducer;
