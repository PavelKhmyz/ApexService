export interface Server {
  Status: string;
  HTTPCode?: number;
  ResponseTime?: number;
  QueryTimestamp: number;
}

export interface ServerGroup {
  [key: string]: Server;
}

export interface SelfCoreTest {
  [key: string]: Server;
}

export interface OtherPlatforms {
  [key: string]: Server;
}
export interface ServerResponseType {
  Origin_login: ServerGroup;
  EA_novafusion: ServerGroup;
  EA_accounts: ServerGroup;
  ApexOauth_Crossplay: ServerGroup;
  selfCoreTest: SelfCoreTest;
  otherPlatforms: OtherPlatforms;
}

export type ServerResponseStateType = [string, ServerGroup | SelfCoreTest | OtherPlatforms];
export type ServerProps = [string, Server];
