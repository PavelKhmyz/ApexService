import { ThemeElementType } from '../../../components/userProfile/components/theme';
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
  badRequest: null | PlayerStatsResponseType;
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

export interface UserEditableData {
  name: string;
  platform: string;
  id: string;
}

export interface UserDataStateType {
  email: string;
  password: string;
  playerData: UserEditableData[] | [];
  selectUser: null | UserEditableData;
  loader: boolean;
  serverResponse: null | PlayerStatsResponseType;
  badRequest: null | PlayerStatsResponseType;
  theme: ThemeElementType;
}
