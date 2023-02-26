import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../../components/SignIn/SignIn.slice';
import { craftItemsReducer } from '../../components/Home/PredatorsAndCraftBlock/CraftComponent/CraftComponent.slice';
import { mapReducer } from '../../components/MapRotation/MapRotation.slice';
import { newsReducer } from '../../components/NewsPage/NewsPage.slice';
import { playerStatsReducer } from '../../components/common/PlayerStats/PlayerStats.slice';
import { predatorReducer } from '../../components/Home/PredatorsAndCraftBlock/PredatorsComponent/PredatorsComponent.slice';
import { serverReducer } from '../../components/ServerStatus/ServerStatus.slice';
import { userReducer } from '../../components/UserProfile/UserProfile.slice';

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
