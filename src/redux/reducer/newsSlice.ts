import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requests } from '../../axios/requests';
import { newsState } from '../initialStates/intialState';
import { ErrorType } from '../initialStates/Types/errorType';
import { NewsResponseType } from '../initialStates/Types/newsInitialStateType';

export const fetchNews = createAsyncThunk('apex/news', async () => {
  const { getNews } = requests();
  const { data } = await getNews();
  return data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: newsState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPagesArray: (state, action: PayloadAction<number>) => {
      state.pagesArrayLength = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loadingNews = true;
      })

      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<[NewsResponseType]>) => {
        state.newsData = action.payload;
        state.loadingNews = false;
      })

      .addCase(
        fetchNews.rejected,
        (state, action: PayloadAction<unknown, string, never, ErrorType>) => {
          state.loadingNews = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { setPage, setPagesArray } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
