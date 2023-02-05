import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducer/authSlice';
import { craftItemsReducer } from '../reducer/craftSlice';
import { mapReducer } from '../reducer/mapSlice';
import { newsReducer } from '../reducer/newsSlice';
import { playerStatsReducer } from '../reducer/playerStatsSlice';
import { predatorReducer } from '../reducer/predatorsSlice';
import { serverReducer } from '../reducer/serverSlice';
import { userReducer } from '../reducer/userSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
    server: serverReducer,
    news: newsReducer,
    playerStats: playerStatsReducer,
    predators: predatorReducer,
    craft: craftItemsReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
