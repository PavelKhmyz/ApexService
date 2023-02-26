import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetPlayerStatsProps, requests } from '../../../axios/requests';
import { ErrorType } from '../../../redux/Error.type';
import { PlayerStatsResponseType } from './PlayerStats.type';

export interface PlayerStatsStateType {
  playerStats: null | PlayerStatsResponseType;
  badRequest: null | PlayerStatsResponseType;
  loadingStats: boolean;
  error: string | undefined;
}

export const playerStatsState: PlayerStatsStateType = {
  playerStats: null,
  badRequest: null,
  loadingStats: false,
  error: undefined,
};

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
