import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import { Platform } from 'react-native';

// const getBaseURL = () => {
//   if (__DEV__) {
//     if (Platform.OS === 'android') {
//       return 'http://10.0.2.2:8000/api'; 


 // config.headers.Authorization = `Bearer ${token}`;


//     } else {
//       return 'http://localhost:8000/api';
//     }
//   }
//   return 'https://suaapi.com/api'; //Vai ser usado quando colocamrmos no render 
// };

<<<<<<< HEAD
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
=======

//  baseURL: 'http://127.0.0.1:8000/api',;


const api = axios.create({
  baseURL: 'http://localhost:8000/api',
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
    
config.headers.Authorization = `Bearer ${token}`;    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;