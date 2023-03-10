import { AxiosError } from 'axios';
import {
  addTokens,
  changeEmail,
  logout,
  setError,
  setLoader,
} from '../components/SignIn/SignIn.slice';
import {
  addPlayerData,
  cleareState,
  selectUser,
} from '../components/UserProfile/UserProfile.slice';
import { store } from '../redux/store';
import { RegistrationRequestProps, requests, UserEditableData } from './requests';

export interface UpdateDbProps {
  email: string;
  userAccounts: UserEditableData[];
}

const requestsStore = requests();

export const sendRegistrationRequest = async (data: RegistrationRequestProps) => {
  try {
    store.dispatch(setLoader());
    const response = await requestsStore.registrationRequest(data);
    if (typeof response.data === 'string') {
      store.dispatch(setError(response.data));
    } else {
      const tokens = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };
      const [isChecked] = response.data.user.userAccounts.filter(
        (el: UserEditableData) => el.checked
      );

      window.sessionStorage.setItem('refreshToken', response.data.refreshToken);
      store.dispatch(selectUser(isChecked.id));
      store.dispatch(addPlayerData(response.data.user.userAccounts));
      store.dispatch(addTokens(tokens));
      store.dispatch(setError(undefined));
      store.dispatch(setLoader());
    }
  } catch (error) {
    const e = error as AxiosError;
    if (e.response) {
      store.dispatch(setError(e.response.data));
    } else {
      store.dispatch(setError(e.message));
    }
    store.dispatch(setLoader());
  }
};

export const sendLoginRequest = async (data: RegistrationRequestProps) => {
  try {
    store.dispatch(setLoader());
    const response = await requestsStore.loginRequest(data);
    if (typeof response.data === 'string') {
      store.dispatch(setError(response.data));
    } else {
      const [isChecked] = response.data.user.userAccounts.filter(
        (el: UserEditableData) => el.checked === true
      );
      const tokens = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };

      window.sessionStorage.setItem('refreshToken', response.data.refreshToken);
      store.dispatch(addTokens(tokens));
      store.dispatch(addPlayerData(response.data.user.userAccounts));
      store.dispatch(selectUser(isChecked.id));
      store.dispatch(setError(undefined));
      store.dispatch(setLoader());
    }
  } catch (error) {
    const e = error as AxiosError;
    if (e.response) {
      store.dispatch(setError(e.response.data));
    } else {
      store.dispatch(setError(e.message));
    }
    store.dispatch(setLoader());
  }
};

export const updateDb = async (data: UpdateDbProps) => {
  try {
    const response = await requestsStore.sendAccounts(data);

    store.dispatch(addPlayerData(response.data.userAccounts));
    store.dispatch(setError(undefined));
  } catch (error) {
    const e = error as AxiosError;
    if (e.response) {
      store.dispatch(setError(e.response.data));
    } else {
      store.dispatch(setError(e.message));
    }
  }
};

export const logoutRequest = async (token: string) => {
  try {
    await requestsStore.logoutRequest(token);
  } catch (error) {
    const e = error as AxiosError;
    if (e.response) {
      store.dispatch(setError(e.response.data));
    } else {
      store.dispatch(setError(e.message));
    }
  } finally {
    window.sessionStorage.removeItem('refreshToken');
    store.dispatch(cleareState());
    store.dispatch(logout());
  }
};

export const refreshRequest = async (refToken: string) => {
  try {
    const response = await requestsStore.refreshToken(refToken);
    const tokens = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    };

    window.sessionStorage.setItem('refreshToken', response.data.refreshToken);
    store.dispatch(addPlayerData(response.data.user.userAccounts));
    store.dispatch(addTokens(tokens));
    store.dispatch(changeEmail(response.data.user.email));
    store.dispatch(setError(undefined));
  } catch (error) {
    const e = error as AxiosError;
    if (e.response) {
      store.dispatch(setError(e.response.data));
    } else {
      store.dispatch(setError(e.message));
    }
  }
};
