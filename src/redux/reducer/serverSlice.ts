import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requests } from '../../axios/requests';
import { serverState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { ServerResponseType } from '../initialStates/Types/serverInitialStateType';

export const getServerStatus = createAsyncThunk('apex/serverStatus', async () => {
  const { getServerState } = requests();
  const { data } = await getServerState();
  return data;
});

const serverStatusSlice = createSlice({
  name: 'server',
  initialState: serverState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServerStatus.pending, (state) => {
        state.loadingServer = true;
      })

      .addCase(getServerStatus.fulfilled, (state, action: PayloadAction<ServerResponseType>) => {
        state.serverData = Object.entries(action.payload);
        state.loadingServer = false;
      })

      .addCase(
        getServerStatus.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingServer = false;
          state.error = action.error.message;
        }
      );
  },
});

export const serverReducer = serverStatusSlice.reducer;
