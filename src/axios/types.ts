import { UserEditableData } from '../redux/initialStates/Types/initialStateType';

export interface GetPlayerStatsProps {
  name: string;
  platform: string;
}
export interface RegistrationRequestProps {
  email: string;
  password: string;
  userAccounts?: UserEditableData[];
}
export interface SendAccountsProps {
  email: string;
  userAccounts: UserEditableData[];
}
export interface UpdateDbProps {
  email: string;
  userAccounts: UserEditableData[];
}
export interface TokensType {
  refreshToken: string;
  accessToken: string;
}
