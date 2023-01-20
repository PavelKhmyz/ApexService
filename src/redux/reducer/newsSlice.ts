import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { newsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { NewsResponseType } from '../initialStates/Types/newsInitialStateType';

export const getNews = createAsyncThunk('apex/news', async () => {
  const response = await apexApi.get(`/news?auth=${API_KEY}`);
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

export const {} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
