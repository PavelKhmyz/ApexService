import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apexApi, API_KEY } from '../../axios/api';
import { newsState } from './intialState';

export const getNews = createAsyncThunk('apex/news', async () => {
  const news = await apexApi.get(`/news?auth=${API_KEY}`);
  const response = news.data;
  return response;
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

      .addCase(getNews.fulfilled, (state, action: any) => {
        state.newsData = Object.entries(action.payload);
        state.loadingNews = false;
      })

      .addCase(getNews.rejected, (state, action: any) => {
        state.loadingNews = false;
      });
  },
});

export const {} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
