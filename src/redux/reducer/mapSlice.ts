import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { ErrorType, ResponseDataType } from './initialStateType';
import { initialState } from './intialState';

export const getRotation = createAsyncThunk('apex/rotation', async () => {
  const rotation = await apexApi.get(`?auth=${API_KEY}`);
  const response = rotation.data;
  return response;
});

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeTime: (state) => {
      state.time -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRotation.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        getRotation.fulfilled,
        (state, action: PayloadAction<ResponseDataType>) => {
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
          console.log(action);
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { changeTime } = mapSlice.actions;

export const mapReducer = mapSlice.reducer;
