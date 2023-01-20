export interface PC {
  foundRank: number;
  val: number;
  uid: string;
  updateTimestamp: number;
  totalMastersAndPreds: number;
}

export interface PS4 {
  foundRank: number;
  val: number;
  uid: string;
  updateTimestamp: number;
  totalMastersAndPreds: number;
}

export interface X1 {
  foundRank: number;
  val: number;
  uid: string;
  updateTimestamp: number;
  totalMastersAndPreds: number;
}

export interface SWITCH {
  foundRank: number;
  val: number;
  uid: string;
  updateTimestamp: number;
  totalMastersAndPreds: number;
}

export interface RP {
  PC: PC;
  PS4: PS4;
  X1: X1;
  SWITCH: SWITCH;
}

export interface AP {
  PC: PC;
  PS4: PS4;
  X1: X1;
  SWITCH: SWITCH;
}

export interface PredatorsResponseType {
  RP: RP;
  AP: AP;
}
