import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { playerStatsState } from './intialState';

export const getPlayerStats: any = createAsyncThunk(
  'apex/playerStats',
  async (data: any) => {
    const { name, platform } = data;
    const rotation = await apexApi.get(
      `/bridge?auth=${API_KEY}&player=${name}&platform=${platform}`
    );
    const response = rotation.data;
    return response;
  }
);

const playerStatsSlice = createSlice({
  name: 'playerStats',
  initialState: playerStatsState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addPlatform: (state, action) => {
      state.platform = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlayerStats.pending, (state) => {
        state.loadingStats = true;
      })

      .addCase(getPlayerStats.fulfilled, (state, action: any) => {
        state.playerStats = action.payload;
        state.loadingStats = false;
        console.log(action.payload);
      })

      .addCase(getPlayerStats.rejected, (state, action: any) => {
        state.loadingStats = false;
      });
  },
});

export const { addName, addPlatform } = playerStatsSlice.actions;

export const playerStatsReducer = playerStatsSlice.reducer;
