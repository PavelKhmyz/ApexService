import axios from 'axios';
import {
  GetPlayerStatsProps,
  RegistrationRequestProps,
  SendAccountsProps,
} from './types';

export const requests = () => {
  const apexApi = axios.create({
    baseURL: process.env.APEX_API_URL,
  });
  const apiKey = process.env.APEX_API_KEY

  const authApi = axios.create({
    baseURL: process.env.AUTH_API_URL,
  });

  return {
    getMapRotation: () => apexApi.get(`/maprotation?auth=${apiKey}`),

    getCraftRotation: () => apexApi.get(`/crafting?auth=${apiKey}`),

    getNews: () => apexApi.get(`/news?auth=${apiKey}`),

    getPlayerStats: ({ name, platform }: GetPlayerStatsProps) =>
      apexApi.get(`/bridge?auth=${apiKey}&player=${name}&platform=${platform}`),

    getPredators: () => apexApi.get(`/predator?auth=${apiKey}`),

    getServerStatus: () => apexApi.get(`/servers?auth=${apiKey}`),

    registrationRequest: (data: RegistrationRequestProps) =>
      authApi.post('/registration', data),

    loginRequest: (data: RegistrationRequestProps) =>
      authApi.post('/login', data),

    logoutRequest: (refToken: string) =>
      authApi.post('/logout', { headers: { token: refToken } }),

    refreshToken: (refToken: string) =>
      authApi.get('/refresh', { headers: { token: refToken } }),

    getUsers: (header: string) =>
      authApi.get('/users', { headers: { Authorization: header } }),

    sendAccounts: (data: SendAccountsProps) => authApi.post('/account', data),
  };
};
