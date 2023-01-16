import { MapsStateType } from './initialStateType';

export const mapsState: MapsStateType = {
  maps: null,
  time: null,
  loading: false,
  error: undefined,
};

interface serverDataType {
  serverData: any;
  loadingServer: boolean;
}

export const serverState: serverDataType = {
  serverData: null,
  loadingServer: false,
};

interface NewsDataType {
  newsData: any;
  loadingNews: boolean;
}

export const newsState: NewsDataType = {
  newsData: null,
  loadingNews: false,
};

interface playerStatsStateType {
  name: string;
  platform: string;
  playerStats: any;
  loadingStats: boolean;
}

export const playerStatsState: playerStatsStateType = {
  name: '',
  platform: '',
  playerStats: null,
  loadingStats: false,
};

interface PredatorsStateType {
  predators: any;
  loadingPredators: boolean;
}
export const predatorsState: PredatorsStateType = {
  predators: null,
  loadingPredators: false,
};

interface CraftStateType {
  items: any;
  loadingItems: boolean;
}
export const craftState: CraftStateType = {
  items: null,
  loadingItems: false,
};
