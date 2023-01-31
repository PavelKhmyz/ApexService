import axios from 'axios';

// const headerCustom = () => {
//   const token = localStorage.getItem('jwt');
//   return `Bearer ${token}`;
// };

export const authApi = axios.create({
  baseURL: 'http://localhost:6198/api',
  // headers: { Authorization: headerCustom() },
});

// const Endpoints = {
//   REGISTRATION: '/registration',
//   LOGIN: '/login',
//   REFRESH: '/refresh',
//   LOGOUT: '/logout',
//   USERS: '/users',
// };

// const urlsSkipAuth = [
//   Endpoints.REGISTRATION,
//   Endpoints.LOGIN,
//   Endpoints.REFRESH,
//   Endpoints.LOGOUT,
// ];

// authApi.interceptors.request.use((config) => {
//   if (config.url && urlsSkipAuth.includes(config.url)) {
//     return config;
//   }
//   const token = localStorage.getItem('jwt');
//   if (token) {
//     const autharization = `Bearer ${token}`;

//     config.headers = {
//       ...config.headers,
//       Authorization: autharization,
//     };
//   }

//   return config;
// });

// // authApi.interceptors.response.use(
// //   (response) => response,
// //   (error: AxiosError) => {
// //     const isLoggedIn = !!localStorage.getItem('jwt');

// //     if (
// //       error.response?.status === 401 &&
// //       isLoggedIn &&
// //       error.request.url !== Endpoints.LOGOUT
// //     ) {
// //       console.log('bla');
// //     }

// //     throw error;
// //   }
// // );
