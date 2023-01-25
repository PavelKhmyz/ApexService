export interface Datum {
  name: string;
  value: number;
  key?: string;
  global?: boolean;
  rank?: Datum2Inner;
  rankPlatformSpecific?: Datum2Inner;
}
export interface Datum2Inner {
  rankPos: number;
  topPercent: number;
}

export interface GameInfo {
  skin: string;
  skinRarity: string;
  frame: string;
  frameRarity: string;
  pose: string;
  poseRarity: string;
  intro: string;
  introRarity: string;
  badges: Badge[];
}

export interface ImgAssets {
  icon: string;
  banner: string;
}

export interface Selected {
  LegendName: string;
  data: Datum[];
  gameInfo: GameInfo;
  ImgAssets: ImgAssets;
}

export interface Legend {
  ImgAssets: ImgAssets;
  data?: Datum[];
  gameInfo?: GameInfo;
  LegendName?: string;
}

export interface All {
  Revenant: Legend;
  Crypto: Legend;
  Horizon: Legend;
  Gibraltar: Legend;
  Wattson: Legend;
  Fuse: Legend;
  Bangalore: Legend;
  Wraith: Legend;
  Octane: Legend;
  Bloodhound: Legend;
  Caustic: Legend;
  Lifeline: Legend;
  Pathfinder: Legend;
  Loba: Legend;
  Mirage: Legend;
  Rampart: Legend;
  Valkyrie: Legend;
  Seer: Legend;
  Ash: Legend;
  'Mad Maggie': Legend;
  Newcastle: Legend;
  Vantage: Legend;
  Catalyst: Legend;
}
//---------------------------------------------

export interface Legends {
  selected: Selected;
  all: All;
}

export interface TotalKeys {
  name: string;
  value: number;
}

export interface Total {
  kills?: TotalKeys;
  detected_breaches?: TotalKeys;
  specialEvent_kills?: TotalKeys;
  specialEvent_damage?: TotalKeys;
  arenas_kills?: TotalKeys;
  kd?: TotalKeys;
}

export interface Bans {
  isActive: boolean;
  remainingSeconds: number;
  last_banReason: string;
}

export interface Rank {
  rankScore: number;
  rankName: string;
  rankDiv: number;
  ladderPosPlatform: number;
  rankImg: string;
  rankedSeason: string;
}

export interface Battlepass {
  level: string;
  history: any;
}

export interface Badge {
  name: string;
  value: number;
}

export interface Global {
  name: string;
  uid: number;
  avatar: string;
  platform: string;
  level: number;
  toNextLevelPercent: number;
  internalUpdateCount: number;
  bans: Bans;
  rank: Rank;
  arena: Rank;
  battlepass: Battlepass;
  internalParsingVersion: number;
  badges: Badge[];
  levelPrestige: number;
}

export interface Realtime {
  lobbyState: string;
  isOnline: number;
  isInGame: number;
  canJoin: number;
  partyFull: number;
  selectedLegend: string;
  currentState: string;
  currentStateSinceTimestamp: number;
  currentStateAsText: string;
}

export interface ALS {
  isALSDataEnabled: boolean;
}

export interface PlayerStatsResponseType {
  global: Global;
  realtime: Realtime;
  legends: Legends;
  mozambiquehere_internal: {};
  ALS: ALS;
  total: {};
  Error?: string;
}
