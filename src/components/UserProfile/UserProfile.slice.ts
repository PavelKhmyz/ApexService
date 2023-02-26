import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetPlayerStatsProps, requests, UserEditableData } from '../../axios/requests';
import { PlayerStatsResponseType } from '../common/PlayerStats/PlayerStats.type';
import { ErrorType } from '../../redux/Error.type';
import { ThemeElementType, theme } from '../common/Theme';

export interface UserDataStateType {
  playerData: UserEditableData[] | [];
  selectUser: null | UserEditableData;
  loader: boolean;
  serverResponse: null | PlayerStatsResponseType;
  badRequest: null | PlayerStatsResponseType;
  theme: ThemeElementType;
  error: undefined | string;
}

export const userData: UserDataStateType = {
  playerData: [],
  selectUser: null,
  loader: false,
  serverResponse: null,
  badRequest: null,
  theme: theme.Classic,
  error: undefined,
};

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
      [state.selectUser] = state.playerData.filter((el) => el.id === action.payload);

      state.playerData.forEach((el) => {
        if (el.id !== action.payload) {
          el.checked = false;
        } else {
          el.checked = true;
        }
      });
    },
    filterArray: (state, action: PayloadAction<UserEditableData>) => {
      state.playerData = state.playerData.filter(
        (element) => element.name !== action.payload.name && element.id !== 'empty'
      );
    },
    setPlayerData: (state, action: PayloadAction<UserEditableData>) => ({
      ...state,
      playerData: [...state.playerData, action.payload],
    }),
    addPlayerData: (state, action: PayloadAction<Array<UserEditableData>>) => {
      state.playerData = action.payload;
    },
    cleareState: (state) => {
      state.playerData = [];
      state.selectUser = null;
      state.loader = false;
      state.serverResponse = null;
      state.badRequest = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlayerProfile.pending, (state) => {
        state.loader = true;
        state.serverResponse = null;
      })
      .addCase(
        getPlayerProfile.fulfilled,
        (state, action: PayloadAction<PlayerStatsResponseType>) => {
          if (Object.keys(action.payload).length > 1) {
            state.serverResponse = action.payload;
            state.badRequest = null;
          } else {
            state.badRequest = action.payload;
            state.serverResponse = null;
          }
          state.loader = false;
          state.error = undefined;
        }
      )
      .addCase(
        getPlayerProfile.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loader = false;
          state.serverResponse = null;
          state.error = action.error.message;
        }
      );
  },
});

export const { setPlayerData, filterArray, selectUser, changeTheme, addPlayerData, cleareState } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
