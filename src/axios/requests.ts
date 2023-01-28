import { apexApi, API_KEY } from './api';

export interface GetPlayerStatsProps {
  name: string;
  platform: string;
}

export const requests = () => {
  const api = apexApi;

  return {
    getMapRotation: () => api.get(`/maprotation?auth=${API_KEY}`),
    getCraftRotation: () => api.get(`/crafting?auth=${API_KEY}`),
    getNews: () => api.get(`/news?auth=${API_KEY}`),
    getPlayerStats: ({ name, platform }: GetPlayerStatsProps) =>
      api.get(`/bridge?auth=${API_KEY}&player=${name}&platform=${platform}`),
    getPredators: () => api.get(`/predator?auth=${API_KEY}`),
    getServerStatus: () => api.get(`/servers?auth=${API_KEY}`),
  };
};
