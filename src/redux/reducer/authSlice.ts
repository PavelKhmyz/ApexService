import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authData } from '../initialStates/intialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authData,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    addAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setEmail, setPassword, addAccessToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
