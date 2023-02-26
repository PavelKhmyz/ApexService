export interface PlatformData {
  foundRank: number;
  val: number;
  uid: string;
  updateTimestamp: number;
  totalMastersAndPreds: number;
}

export interface RP {
  PC: PlatformData;
  PS4: PlatformData;
  X1: PlatformData;
  SWITCH: PlatformData;
}

export interface PredatorsResponseType {
  RP: RP;
  AP: RP;
}
