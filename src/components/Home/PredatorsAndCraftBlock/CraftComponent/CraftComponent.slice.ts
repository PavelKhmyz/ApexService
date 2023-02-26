import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CraftResponseType } from './CraftComponent.type';
import { requests } from '../../../../axios/requests';
import { ErrorType } from '../../../../redux/Error.type';

export interface CraftStateType {
  items: null | [CraftResponseType];
  loadingItems: boolean;
  error: string | undefined;
}

export const craftState: CraftStateType = {
  items: null,
  loadingItems: false,
  error: undefined,
};

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
