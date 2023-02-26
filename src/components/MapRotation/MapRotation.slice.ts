import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapResponseType } from './MapRotation.type';
import { requests } from '../../axios/requests';
import { ErrorType } from '../../redux/Error.type';

export interface MapsStateType {
  maps: null | MapResponseType;
  reminingTimer: number | null;
  loading: boolean;
  error: string | undefined;
}

export const mapsState: MapsStateType = {
  maps: null,
  reminingTimer: null,
  loading: false,
  error: undefined,
};

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
