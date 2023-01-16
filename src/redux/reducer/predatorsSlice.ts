import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { predatorsState } from './intialState';

export const getPredators = createAsyncThunk('apex/predators', async () => {
  const rotation = await apexApi.get(`/predator?auth=${API_KEY}`);
  const response = rotation.data;
  return response;
});

const predatorSlice = createSlice({
  name: 'predators',
  initialState: predatorsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPredators.pending, (state) => {
        state.loadingPredators = true;
      })

      .addCase(getPredators.fulfilled, (state, action: any) => {
        state.predators = action.payload;
        state.loadingPredators = false;
      })

      .addCase(getPredators.rejected, (state, action: any) => {
        state.loadingPredators = false;
      });
  },
});

export const {} = predatorSlice.actions;

export const predatorReducer = predatorSlice.reducer;
