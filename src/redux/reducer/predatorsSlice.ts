import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requests } from '../../axios/requests';
import { predatorsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { PredatorsResponseType } from '../initialStates/Types/predatorsInitialStateType';

export const getPredators = createAsyncThunk('apex/predators', async () => {
  const apexResponse = requests();
  const response = await apexResponse.getPredators();
  return response.data;
});

const predatorSlice = createSlice({
  name: 'predators',
  initialState: predatorsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPredators.pending, (state) => {
        state.loadingPredators = true;
      })

      .addCase(getPredators.fulfilled, (state, action: PayloadAction<PredatorsResponseType>) => {
        state.predators = action.payload;
        state.loadingPredators = false;
      })

      .addCase(
        getPredators.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingPredators = false;
          state.error = action.error.message;
        }
      );
  },
});

export const predatorReducer = predatorSlice.reducer;
