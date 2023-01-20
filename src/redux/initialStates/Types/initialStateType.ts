import { CraftResponseType } from './craftInitialStateTypes';
import { ResponseDataType } from './mapStateType';
import { NewsResponseType } from './newsInitialStateType';
import { PredatorsResponseType } from './predatorsInitialStateType';
import { ServerResponseType } from './serverInitialStateType';

export interface MapsStateType {
  maps: null | ResponseDataType;
  time: number | null;
  loading: boolean;
  error: string | undefined;
}

export interface ServerDataType {
  serverData: null | Array<ServerResponseType>;
  loadingServer: boolean;
  error: string | undefined;
}

export interface NewsDataType {
  newsData: null | [NewsResponseType];
  loadingNews: boolean;
  error: string | undefined;
}

export interface PlayerStatsStateType {
  name: string;
  platform: string;
  playerStats: any;
  loadingStats: boolean;
  error: string | undefined;
}

export interface PredatorsStateType {
  predators: null | PredatorsResponseType;
  loadingPredators: boolean;
  error: string | undefined;
}

export interface CraftStateType {
  items: null | [CraftResponseType];
  loadingItems: boolean;
  error: string | undefined;
}
