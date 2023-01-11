import { configureStore } from '@reduxjs/toolkit';
import { mapReducer } from '../reducer/mapSlice';
import { newsReducer } from '../reducer/newsSlice';
import { serverReducer } from '../reducer/serverSlice';

export type StateType = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    map: mapReducer,
    server: serverReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
