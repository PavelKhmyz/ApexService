import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requests } from '../../axios/requests';
import { newsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { NewsResponseType } from '../initialStates/Types/newsInitialStateType';

export const getNews = createAsyncThunk('apex/news', async () => {
  const apexResponse = requests();
  const response = await apexResponse.getNews();
  return response.data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: newsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loadingNews = true;
      })

      .addCase(
        getNews.fulfilled,
        (state, action: PayloadAction<[NewsResponseType]>) => {
          state.newsData = action.payload;
          state.loadingNews = false;
        }
      )

      .addCase(
        getNews.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingNews = false;
          state.error = action.error.message;
        }
      );
  },
});

export const newsReducer = newsSlice.reducer;
