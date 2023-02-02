import { apexApi, API_KEY } from './api';
import { authApi } from './auth';

export interface GetPlayerStatsProps {
  name: string;
  platform: string;
}

export interface RegistrationRequestProps {
  email: string;
  password: string;
  playerName?: string;
  userPlatform?: string;
}

export const requests = () => {
  const api = apexApi;
  const backEnd = authApi;

  return {
    getMapRotation: () => api.get(`/maprotation?auth=${API_KEY}`),
    getCraftRotation: () => api.get(`/crafting?auth=${API_KEY}`),
    getNews: () => api.get(`/news?auth=${API_KEY}`),
    getPlayerStats: ({ name, platform }: GetPlayerStatsProps) =>
      api.get(`/bridge?auth=${API_KEY}&player=${name}&platform=${platform}`),
    getPredators: () => api.get(`/predator?auth=${API_KEY}`),
    getServerStatus: () => api.get(`/servers?auth=${API_KEY}`),
    registrationRequest: (data: RegistrationRequestProps) =>
      backEnd.post('/registration', data),
    loginRequest: (data: RegistrationRequestProps) =>
      backEnd.post('/login', data),
    logoutRequest: (refToken: string) =>
      backEnd.post('/logout', { headers: { token: refToken } }),
    refreshToken: (refToken: string) =>
      backEnd.get('/refresh', { headers: { token: refToken } }),
    getUsers: (header: string) =>
      backEnd.get('/users', { headers: { Authorization: header } }),
  };
};
