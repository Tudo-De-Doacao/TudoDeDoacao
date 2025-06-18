import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api/api';

export async function getUser({ email, password }) {
  try {
    const response = await api.post('/login', { email, password });
    console.log('📦 Resposta completa do login:', response.data);
    
    const token = response.data; 

    
    if (token && token.split('.').length === 3) {
      await AsyncStorage.setItem('token', token);
      console.log('✅ Token salvo com sucesso:', token);
      return true;
    } else {
      console.warn('⚠️ Token inválido ou não recebido:', token);
      Alert.alert('Erro', 'Token inválido ou ausente na resposta.');
      return false;
    }
  } catch (error) {
    console.error(
      '❌ Erro ao fazer login:',
      error.response?.data || error.message
    );
    Alert.alert('Erro', 'Email ou senha incorretos.');
    return false;
  }
}
