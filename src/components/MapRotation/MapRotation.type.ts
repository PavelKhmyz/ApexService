export interface Next {
  start: number;
  end: number;
  readableDate_start: string;
  readableDate_end: string;
  map: string;
  code: string;
  DurationInSecs: number;
  DurationInMinutes: number;
}
export interface Current extends Next {
  asset: string;
  remainingSecs: number;
  remainingMins: number;
  remainingTimer: string;
}

export interface MapResponseType {
  current: Current;
  next: Next;
}
