import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mapsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { MapResponseType } from '../initialStates/Types/mapStateType';
import { requests } from '../../axios/requests';

export const getRotation = createAsyncThunk('apex/rotation', async () => {
  const { getMapRotation } = requests();
  const { data } = await getMapRotation();
  return data;
});

const mapSlice = createSlice({
  name: 'map',
  initialState: mapsState,
  reducers: {
    changeTime: (state) => {
      if (state.reminingTimer) {
        state.reminingTimer -= 1;
      }
    },
    clearTime: (state) => {
      state.reminingTimer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRotation.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })

      .addCase(getRotation.fulfilled, (state, action: PayloadAction<MapResponseType>) => {
        state.reminingTimer = action.payload.current.remainingSecs;
        state.maps = action.payload;
        state.loading = false;
      })

      .addCase(
        getRotation.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { changeTime, clearTime } = mapSlice.actions;

export const mapReducer = mapSlice.reducer;
