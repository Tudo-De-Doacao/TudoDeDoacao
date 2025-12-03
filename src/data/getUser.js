import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import api from '../../services/api/api';

export async function getUser({ email, password }) {
  try {
    const response = await api.post('/auth/login', { email, password });
    console.log('📦 Resposta completa do login:', response.data);
    
    const token = response.data.access_token; 

    if (token) {
      const decoded = jwtDecode(token);
      console.log('🔍 ESTRUTURA COMPLETA DO TOKEN:', JSON.stringify(decoded, null, 2));

      console.log('🔓 Token decodificado:', decoded);
      

      const userId = decoded.sub || decoded.user_id || decoded.id;
      
      if (userId) {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userId', userId.toString());
        console.log('✅ Token e userId salvos com sucesso');
        console.log('👤 User ID:', userId);
        return true;
      } else {
        console.warn('⚠️ ID do usuário não encontrado no token');
        Alert.alert('Erro', 'Não foi possível obter as informações do usuário.');
        return false;
      }
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

export async function getUserById(id) {
  try {
    const response = await api.get(`users/${id}`);
    return response.data;     
  } catch(e) {
    console.error('Erro ao buscar usuário:', e.message);
    return null;
  }
}

export async function getUserId() {
  try {
    const userId = await AsyncStorage.getItem('userId');
    return userId;
  } catch (error) {
    console.error('Erro ao recuperar userId:', error);
    return null;
  }
}