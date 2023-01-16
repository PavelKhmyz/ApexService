import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { craftState } from './intialState';

export const getCraftItems = createAsyncThunk('apex/craft', async () => {
  const rotation = await apexApi.get(`/crafting?auth=${API_KEY}`);
  const response = rotation.data;
  return response;
});

const craftItemsSlice = createSlice({
  name: 'craft',
  initialState: craftState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCraftItems.pending, (state) => {
        state.loadingItems = true;
      })

      .addCase(getCraftItems.fulfilled, (state, action: any) => {
        state.items = action.payload;
        state.loadingItems = false;
      })

      .addCase(getCraftItems.rejected, (state, action: any) => {
        state.loadingItems = false;
      });
  },
});

export const {} = craftItemsSlice.actions;

export const craftItemsReducer = craftItemsSlice.reducer;
