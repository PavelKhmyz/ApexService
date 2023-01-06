import { configureStore } from '@reduxjs/toolkit';
import { stateReducer } from '../reducer/stateSlice';

export type StateType = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    map: stateReducer,
  },
});
