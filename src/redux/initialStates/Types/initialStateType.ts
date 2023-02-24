import { ThemeElementType } from '../../../components/userProfile/components/settings/components/theme';
import { CraftResponseType } from './craftInitialStateTypes';
import { MapResponseType } from './mapStateType';
import { NewsResponseType } from './newsInitialStateType';
import { PlayerStatsResponseType } from './playerStatsStateType';
import { PredatorsResponseType } from './predatorsInitialStateType';
import { ServerResponseStateType } from './serverInitialStateType';

export interface MapsStateType {
  maps: null | MapResponseType;
  reminingTimer: number | null;
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
  page: number;
  pagesArrayLength: number;
  loadingNews: boolean;
  error: string | undefined;
}

export interface PlayerStatsStateType {
  playerStats: null | PlayerStatsResponseType;
  badRequest: null | PlayerStatsResponseType;
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
  checked: boolean;
}

export interface UserDataStateType {
  playerData: UserEditableData[] | [];
  selectUser: null | UserEditableData;
  loader: boolean;
  serverResponse: null | PlayerStatsResponseType;
  badRequest: null | PlayerStatsResponseType;
  theme: ThemeElementType;
  error: undefined | string;
}

export interface AuthDataStateType {
  email: string;
  name: string;
  loader: boolean;
  accessToken: null | string;
  refreshToken: null | string;
  error: string | undefined;
}
