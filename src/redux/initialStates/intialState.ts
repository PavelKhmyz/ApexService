import { theme } from '../../components/userProfile/components/theme';
import {
  CraftStateType,
  MapsStateType,
  NewsDataType,
  PlayerStatsStateType,
  PredatorsStateType,
  ServerDataType,
  UserDataStateType,
} from './Types/initialStateType';

export const mapsState: MapsStateType = {
  maps: null,
  time: null,
  loading: false,
  error: undefined,
};

export const serverState: ServerDataType = {
  serverData: null,
  loadingServer: false,
  error: undefined,
};

export const newsState: NewsDataType = {
  newsData: null,
  loadingNews: false,
  error: undefined,
};

export const playerStatsState: PlayerStatsStateType = {
  name: '',
  platform: '',
  playerStats: null,
  badRequest: null,
  searchValue: '',
  newLegend: null,
  loadingStats: false,
  error: undefined,
};

export const predatorsState: PredatorsStateType = {
  predators: null,
  loadingPredators: false,
  error: undefined,
};

export const craftState: CraftStateType = {
  items: null,
  loadingItems: false,
  error: undefined,
};

export const userData: UserDataStateType = {
  email: '',
  password: '',
  playerData: [],
  selectUser: null,
  loader: false,
  serverResponse: null,
  badRequest: null,
  theme: theme[0],
};
