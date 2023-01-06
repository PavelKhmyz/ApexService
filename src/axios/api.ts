import axios from 'axios';

export const API_KEY = 'b8b9140b1af8da0bd88278646e3ebb3d';

export const apexApi = axios.create({
  baseURL: 'https://api.mozambiquehe.re/maprotation',
});
