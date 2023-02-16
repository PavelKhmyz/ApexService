import axios from 'axios';
import { GetPlayerStatsProps, RegistrationRequestProps, SendAccountsProps } from './types';

export const requests = () => {
  const apexApi = axios.create({
    baseURL: process.env.REACT_APP_APEX_API_URL,
  });
  const backendApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });

  return {
    getMapRotation: () => apexApi.get(`/maprotation?auth=${process.env.REACT_APP_API_KEY}`),

    getCraftRotation: () => apexApi.get(`/crafting?auth=${process.env.REACT_APP_API_KEY}`),

    getNews: () => apexApi.get(`/news?auth=${process.env.REACT_APP_API_KEY}`),

    getPlayerStats: ({ name, platform }: GetPlayerStatsProps) =>
      apexApi.get(
        `/bridge?auth=${process.env.REACT_APP_API_KEY}&player=${name}&platform=${platform}`
      ),

    getPredators: () => apexApi.get(`/predator?auth=${process.env.REACT_APP_API_KEY}`),

    getServerState: () => apexApi.get(`/servers?auth=${process.env.REACT_APP_API_KEY}`),

    registrationRequest: (data: RegistrationRequestProps) => backendApi.post('/registration', data),

    loginRequest: (data: RegistrationRequestProps) => backendApi.post('/login', data),

    logoutRequest: (refToken: string) =>
      backendApi.post('/logout', { headers: { token: refToken } }),

    refreshToken: (refToken: string) =>
      backendApi.get('/refresh', { headers: { token: refToken } }),

    getUsers: (header: string) => backendApi.get('/users', { headers: { Authorization: header } }),

    sendAccounts: (data: SendAccountsProps) => backendApi.post('/account', data),
  };
};
