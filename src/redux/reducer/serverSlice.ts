import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requests } from '../../axios/requests';
import { serverState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { ServerResponseType } from '../initialStates/Types/serverInitialStateType';

export const fetchServerStatus = createAsyncThunk('apex/serverStatus', async () => {
  const { getServerStatus } = requests();
  const { data } = await getServerStatus();
  return data;
});

const serverStatusSlice = createSlice({
  name: 'server',
  initialState: serverState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServerStatus.pending, (state) => {
        state.loadingServer = true;
      })

      .addCase(fetchServerStatus.fulfilled, (state, action: PayloadAction<ServerResponseType>) => {
        state.serverData = Object.entries(action.payload);
        state.loadingServer = false;
      })

      .addCase(
        fetchServerStatus.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingServer = false;
          state.error = action.error.message;
        }
      );
  },
});

export const serverReducer = serverStatusSlice.reducer;
