import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { mapsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { MapResponseType } from '../initialStates/Types/mapStateType';

export const getRotation = createAsyncThunk('apex/rotation', async () => {
  const response = await apexApi.get(`/maprotation?auth=${API_KEY}`);
  return response.data;
});

const mapSlice = createSlice({
  name: 'map',
  initialState: mapsState,
  reducers: {
    changeTime: (state) => {
      if (state.time === null) {
      } else {
        state.time -= 1;
      }
    },
    clearState: (state) => {
      state.maps = null;
      state.time = null;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRotation.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        getRotation.fulfilled,
        (state, action: PayloadAction<MapResponseType>) => {
          console.log(action);
          state.time = action.payload.current.remainingSecs;
          state.maps = action.payload;
          state.loading = false;
          state.error = undefined;
        }
      )

      .addCase(
        getRotation.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { changeTime, clearState } = mapSlice.actions;

export const mapReducer = mapSlice.reducer;
