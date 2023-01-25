import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { playerStatsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import {
  Legend,
  PlayerStatsResponseType,
} from '../initialStates/Types/playerStatsStateType';

interface getPlayerStatsProps {
  name: string;
  platform: string;
}

export const getPlayerStats = createAsyncThunk(
  'apex/playerStats',
  async (data: getPlayerStatsProps) => {
    const { name, platform } = data;
    const response = await apexApi.get(
      `/bridge?auth=${API_KEY}&player=${name}&platform=${platform}`
    );
    return response.data;
  }
);

const playerStatsSlice = createSlice({
  name: 'playerStats',
  initialState: playerStatsState,
  reducers: {
    setNewLegend: (state, action: PayloadAction<Legend>) => {
      state.newLegend = action.payload;
    },
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlayerStats.pending, (state) => {
        state.newLegend = null;
        state.loadingStats = true;
        state.badRequest = null;
        state.playerStats = null;
        state.error = undefined;
      })
      .addCase(
        getPlayerStats.fulfilled,
        (state, action: PayloadAction<PlayerStatsResponseType>) => {
          if (Object.keys(action.payload).length > 1) {
            state.playerStats = action.payload;
          } else {
            state.badRequest = action.payload;
          }
          state.loadingStats = false;
        }
      )
      .addCase(
        getPlayerStats.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingStats = false;
          state.error = action.error.message;
          console.log(state.error);
        }
      );
  },
});

export const { addName, addPlatform, changeSearchValue, setNewLegend } =
  playerStatsSlice.actions;

export const playerStatsReducer = playerStatsSlice.reducer;
