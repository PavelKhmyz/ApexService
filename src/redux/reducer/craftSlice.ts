import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CraftResponseType } from '../initialStates/Types/craftInitialStateTypes';
import { craftState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { requests } from '../../axios/requests';

export const getCraftItems = createAsyncThunk('apex/craft', async () => {
  const apexResponse = requests();
  const response = await apexResponse.getCraftRotation();
  return response.data;
});

const craftItemsSlice = createSlice({
  name: 'craft',
  initialState: craftState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCraftItems.pending, (state) => {
        state.loadingItems = true;
      })

      .addCase(getCraftItems.fulfilled, (state, action: PayloadAction<[CraftResponseType]>) => {
        state.items = action.payload;
        state.loadingItems = false;
      })

      .addCase(
        getCraftItems.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingItems = false;
          state.error = action.error.message;
        }
      );
  },
});

export const craftItemsReducer = craftItemsSlice.reducer;
