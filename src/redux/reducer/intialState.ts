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
