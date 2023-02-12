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
  const backendApi = axios.create({
    baseURL: process.env.BACKEND_URL,
  });

  return {
    getMapRotation: () =>
      apexApi.get(`/maprotation?auth=${process.env.API_KEY}`),

    getCraftRotation: () =>
      apexApi.get(`/crafting?auth=${process.env.API_KEY}`),

    getNews: () => apexApi.get(`/news?auth=${process.env.API_KEY}`),

    getPlayerStats: ({ name, platform }: GetPlayerStatsProps) =>
      apexApi.get(
        `/bridge?auth=${process.env.API_KEY}&player=${name}&platform=${platform}`
      ),

    getPredators: () => apexApi.get(`/predator?auth=${process.env.API_KEY}`),

    getServerStatus: () => apexApi.get(`/servers?auth=${process.env.API_KEY}`),

    registrationRequest: (data: RegistrationRequestProps) =>
      backendApi.post('/registration', data),

    loginRequest: (data: RegistrationRequestProps) =>
      backendApi.post('/login', data),

    logoutRequest: (refToken: string) =>
      backendApi.post('/logout', { headers: { token: refToken } }),

    refreshToken: (refToken: string) =>
      backendApi.get('/refresh', { headers: { token: refToken } }),

    getUsers: (header: string) =>
      backendApi.get('/users', { headers: { Authorization: header } }),

    sendAccounts: (data: SendAccountsProps) =>
      backendApi.post('/account', data),
  };
};
