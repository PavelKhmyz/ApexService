import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requests } from '../../axios/requests';
import { GetPlayerStatsProps } from '../../axios/types';
import { playerStatsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { Legend, PlayerStatsResponseType } from '../initialStates/Types/playerStatsStateType';

export const getPlayerStats = createAsyncThunk(
  'apex/playerStats',
  async (data: GetPlayerStatsProps) => {
    const apexResponse = requests();
    const response = await apexResponse.getPlayerStats(data);
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
        }
      );
  },
});

export const { addName, addPlatform, changeSearchValue, setNewLegend } = playerStatsSlice.actions;

export const playerStatsReducer = playerStatsSlice.reducer;
