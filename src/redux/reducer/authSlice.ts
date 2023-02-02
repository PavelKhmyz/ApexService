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

export const { addTokens, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
