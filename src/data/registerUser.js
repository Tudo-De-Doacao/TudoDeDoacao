import axios from 'axios';
import { Alert } from 'react-native';
import {getUser} from './getUser'
import api from  '../../services/api/api';


export async function registerUser({ name, email, location, user_id, phone, password }) {


  const data = {

    user_id,
    name,
    email,
    password,
    password_confirmation: password, 
    location,
    phone,
  };

  try {
    const response = await api.post('/users', data);
   if (response.status == 200 || response.status == 201) {
       const logged = await getUser({ email, password });
      return logged;
   }
  } catch (error) {
    console.error(error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
    return false;
  }
}