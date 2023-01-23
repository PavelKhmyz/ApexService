import { CraftResponseType } from './craftInitialStateTypes';
import { MapResponseType } from './mapStateType';
import { NewsResponseType } from './newsInitialStateType';
import { Legend, PlayerStatsResponseType } from './playerStatsStateType';
import { PredatorsResponseType } from './predatorsInitialStateType';
import { ServerResponseStateType } from './serverInitialStateType';

export interface MapsStateType {
  maps: null | MapResponseType;
  time: number | null;
  loading: boolean;
  error: string | undefined;
}

export interface ServerDataType {
  serverData: null | Array<ServerResponseStateType>;
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
  playerStats: null | PlayerStatsResponseType;
  searchValue: string;
  newLegend: null | Legend;
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
