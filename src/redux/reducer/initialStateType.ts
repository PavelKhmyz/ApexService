export interface InitialStateType {
  maps: null | ResponseDataType;
  time: number;
  loading: boolean;
  error: string | undefined;
}

export interface Current {
  start: number;
  end: number;
  readableDate_start: string;
  readableDate_end: string;
  map: string;
  code: string;
  DurationInSecs: number;
  DurationInMinutes: number;
  asset: string;
  remainingSecs: number;
  remainingMins: number;
  remainingTimer: string;
}

export interface Next {
  start: number;
  end: number;
  readableDate_start: string;
  readableDate_end: string;
  map: string;
  code: string;
  DurationInSecs: number;
  DurationInMinutes: number;
  asset?: string;
  remainingSecs?: number;
  remainingMins?: number;
  remainingTimer?: string;
}

export interface ResponseDataType {
  current: Current;
  next: Next;
}
export interface ErrorType {
  code?: string;
  message?: string;
  name?: string;
  stack?: string;
}
