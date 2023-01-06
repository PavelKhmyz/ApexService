import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';

const initialState = {
  maps: null,
  loading: false,
  error: null,
};

export const getRotation: any = createAsyncThunk('apex/rotation', async () => {
  const rotation = await apexApi.get(`?auth=${API_KEY}`);
  const response = JSON.stringify(rotation.data);
  return response;
});

const stateSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    addMaps: (state, action) => {
      state.maps = action.payload.mapsArr;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRotation.pending, (state) => {
        state.loading = true;
      })

      .addCase(getRotation.fulfilled, (state, action) => {
        state.maps = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(getRotation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addMaps } = stateSlice.actions;

export const stateReducer = stateSlice.reducer;
