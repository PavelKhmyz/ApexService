import { theme } from '../../components/userProfile/components/settings/components/theme';
import {
  AuthDataStateType,
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
  reminingTimer: null,
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
  page: 0,
  pagesArrayLength: 0,
  loadingNews: false,
  error: undefined,
};

export const playerStatsState: PlayerStatsStateType = {
  playerStats: null,
  badRequest: null,
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
  playerData: [],
  selectUser: null,
  loader: false,
  serverResponse: null,
  badRequest: null,
  theme: theme.Classic,
  error: undefined,
};

export const authData: AuthDataStateType = {
  email: '',
  name: '',
  loader: false,
  accessToken: null,
  refreshToken: null,
  error: undefined,
};
