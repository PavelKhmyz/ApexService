import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { serverState } from './intialState';

export const getServerStatus = createAsyncThunk(
  'apex/serverStatus',
  async () => {
    const rotation = await apexApi.get(`/servers?auth=${API_KEY}`);
    const response = rotation.data;
    return response;
  }
);

const serverStatusSlice = createSlice({
  name: 'server',
  initialState: serverState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServerStatus.pending, (state) => {
        state.loadingServer = true;
      })

      .addCase(getServerStatus.fulfilled, (state, action: any) => {
        state.serverData = Object.entries(action.payload);
        state.loadingServer = false;
      })

      .addCase(getServerStatus.rejected, (state, action: any) => {
        state.loadingServer = false;
      });
  },
});

export const {} = serverStatusSlice.actions;

export const serverReducer = serverStatusSlice.reducer;
