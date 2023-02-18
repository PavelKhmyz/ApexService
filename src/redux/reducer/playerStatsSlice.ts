import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requests } from '../../axios/requests';
import { GetPlayerStatsProps } from '../../axios/types';
import { playerStatsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { PlayerStatsResponseType } from '../initialStates/Types/playerStatsStateType';

export const fetchPlayerStats = createAsyncThunk(
  'apex/playerStats',
  async (body: GetPlayerStatsProps) => {
    const { getPlayerStats } = requests();
    const { data } = await getPlayerStats(body);
    return data;
  }
);

const playerStatsSlice = createSlice({
  name: 'playerStats',
  initialState: playerStatsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerStats.pending, (state) => {
        state.loadingStats = true;
        state.badRequest = null;
        state.playerStats = null;
        state.error = undefined;
      })
      .addCase(
        fetchPlayerStats.fulfilled,
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
        fetchPlayerStats.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingStats = false;
          state.error = action.error.message;
        }
      );
  },
});

export const playerStatsReducer = playerStatsSlice.reducer;
