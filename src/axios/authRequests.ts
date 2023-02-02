import { AxiosError } from 'axios';
import { UserEditableData } from '../redux/initialStates/Types/initialStateType';
import { addTokens, logout } from '../redux/reducer/authSlice';
import { addPlayerData } from '../redux/reducer/userSlice';
import { store } from '../redux/store';
import { RegistrationRequestProps, requests } from './requests';

const requestsStore = requests();

interface UpdateDbProps {
  email: string;
  userAccounts: UserEditableData[];
}

export const sendRegistrationRequest = async (
  data: RegistrationRequestProps
) => {
  try {
    const response = await requestsStore.registrationRequest(data);

    const tokens = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    };

    window.sessionStorage.setItem('refreshToken', response.data.refreshToken);

    store.dispatch(addPlayerData(response.data.user.userAccounts));
    store.dispatch(addTokens(tokens));
  } catch (error) {
    const e = error as AxiosError;
    console.log(e.response?.data); // TODO: typed errors
  }
};

export const sendLoginRequest = async (data: RegistrationRequestProps) => {
  try {
    const response = await requestsStore.loginRequest(data);

    const tokens = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    };

    window.sessionStorage.setItem('refreshToken', response.data.refreshToken);

    store.dispatch(addPlayerData(response.data.user.userAccounts));
    store.dispatch(addTokens(tokens));
  } catch (error) {
    const e = error as AxiosError;
    console.log(e.response?.data); // TODO: typed errors
  }
};

export const updateDb = async (data: UpdateDbProps) => {
  try {
    const response = await requestsStore.sendAccounts(data);
    console.log(response);
  } catch (error) {
    const e = error as AxiosError;
    console.log(e.response?.data); // TODO: typed errors
  }
};

export const logoutRequest = async (token: string) => {
  try {
    const response = await requestsStore.logoutRequest(token);
    console.log(response);

    window.sessionStorage.removeItem('refreshToken');

    store.dispatch(logout());
  } catch (error) {
    const e = error as AxiosError;
    console.log(e.response?.data); // TODO: typed errors
  }
};
