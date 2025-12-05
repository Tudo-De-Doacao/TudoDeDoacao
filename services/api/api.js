import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: ' https://tudodedoacao-backend.onrender.com/api',
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  
  failedQueue = [];
};

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 && 
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/login') &&
      !originalRequest.url.includes('/auth/refresh')
    ) {
      
      if (isRefreshing) {
        // Se já está renovando, coloca na fila
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = await AsyncStorage.getItem('refresh_token');
        
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        console.log('🔄 Renovando access token...');

        const response = await axios.post(
          'http://tudodedoacao-backend.onrender.com/api/auth/refresh',
          { refreshToken },
        );

        const { access_token } = response.data.a;

        if (access_token) {
        
          await AsyncStorage.setItem('token', access_token);
          
         
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          
          console.log('✅ Access token renovado com sucesso');
          
          processQueue(null, access_token);
 
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error('❌ Erro ao renovar token:', refreshError);
        
        processQueue(refreshError, null);
        
   
        await AsyncStorage.multiRemove(['token', 'refreshToken', 'userId']);
        
      
        navigation.navigate('Login');
        
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;