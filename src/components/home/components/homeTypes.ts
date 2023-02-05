import {
  BundleContent,
  CraftResponseType,
} from '../../../redux/initialStates/Types/craftInitialStateTypes';
import {
  Datum,
  Legend,
  Legends,
  PlayerStatsResponseType,
  Rank,
  Selected,
} from '../../../redux/initialStates/Types/playerStatsStateType';
import {
  PlatformData,
  RP,
} from '../../../redux/initialStates/Types/predatorsInitialStateType';

export interface ErrorComponentProps {
  data: PlayerStatsResponseType | string;
}
export interface PredatorComponentProps {
  title: string;
  data: RP;
}
export interface PredatorInnerProps {
  data: PlatformData;
  title: string;
}
export interface CraftComponentPropsType {
  data: [CraftResponseType];
}
export interface ItemCardProps {
  card: BundleContent;
}
export interface CraftElementProps {
  craftElement: CraftResponseType;
}
export interface PlayerStatsProps {
  data: PlayerStatsResponseType;
}
export interface RankComponentProps {
  name: string;
  data: Rank;
}
export interface LegendsPageProps {
  data: Legends;
}
export interface SelectedLegendProps {
  data: Legend | Selected;
}
export interface StatsValueProps {
  statsData: Datum;
}
