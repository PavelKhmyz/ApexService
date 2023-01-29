import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetPlayerStatsProps, requests } from '../../axios/requests';
import { ThemeElementType } from '../../components/userProfile/components/theme';
import { userData } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { UserEditableData } from '../initialStates/Types/initialStateType';
import { PlayerStatsResponseType } from '../initialStates/Types/playerStatsStateType';

export const getPlayerProfile = createAsyncThunk(
  'apex/profileStats',
  async (data: GetPlayerStatsProps) => {
    const apexResponse = requests();
    const response = await apexResponse.getPlayerStats(data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'userData',
  initialState: userData,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeElementType>) => {
      state.theme = action.payload;
    },
    selectUser: (state, action) => {
      const filtered = state.playerData.filter(
        (el) => el.id === action.payload
      );
      [state.selectUser] = filtered;
    },
    filterArray: (state, action: PayloadAction<UserEditableData>) => {
      state.playerData = state.playerData.filter(
        (element) =>
          element.name !== action.payload.name && element.id !== 'empty'
      );
    },
    setPlayerData: (state, action: PayloadAction<UserEditableData>) => ({
      ...state,
      playerData: [...state.playerData, action.payload],
    }),
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlayerProfile.pending, (state) => {
        state.loader = true;
      })
      .addCase(
        getPlayerProfile.fulfilled,
        (state, action: PayloadAction<PlayerStatsResponseType>) => {
          if (Object.keys(action.payload).length > 1) {
            state.serverResponse = action.payload;
          } else {
            state.badRequest = action.payload;
          }
          state.loader = false;
        }
      )
      .addCase(
        getPlayerProfile.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          // state.loadingStats = false;
          // state.error = action.error.message;
          console.log(action.error.message);
        }
      );
  },
});

export const {
  setEmail,
  setPassword,
  setPlayerData,
  filterArray,
  selectUser,
  changeTheme,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
