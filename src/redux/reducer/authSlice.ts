import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authData } from '../initialStates/intialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authData,
  reducers: {
    addAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    addRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { addAccessToken, addRefreshToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
