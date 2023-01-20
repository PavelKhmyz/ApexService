export interface Server {
  Status: string;
  HTTPCode?: number;
  ResponseTime?: number;
  QueryTimestamp: number;
}

export interface ServerGroup {
  'EU-West': Server;
  'EU-East': Server;
  'US-West': Server;
  'US-Central': Server;
  'US-East': Server;
  SouthAmerica: Server;
  Asia: Server;
}

export interface SelfCoreTest {
  'Status-website': Server;
  'Stats-API': Server;
  'Overflow-#1': Server;
  'Overflow-#2': Server;
  'Origin-API': Server;
  'Playstation-API': Server;
  'Xbox-API': Server;
}

export interface OtherPlatforms {
  'Playstation-Network': Server;
  'Xbox-Live': Server;
}

export type ServerResponseType = [
  string,
  ServerGroup | SelfCoreTest | OtherPlatforms
];
