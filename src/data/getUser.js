import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import api from '../../services/api/api';

export async function getUser({ email, password }) {
  try {
    const response = await api.post('/auth/login', { email, password });
    console.log('📦 Resposta completa do login:', response.data);
    
    const token = response.data.access_token;
    const refreshToken = response.data.refresh_token; // Pega o refresh token

    if (token && refreshToken) {
      const decoded = jwtDecode(token);
      console.log('🔓 ESTRUTURA COMPLETA DO TOKEN:', JSON.stringify(decoded, null, 2));

      const userId = decoded.sub || decoded.user_id || decoded.id;
      
      if (userId) {
        await AsyncStorage.multiSet([
          ['token', token],
          ['refreshToken', refreshToken],
          ['userId', userId.toString()]
        ]);
        
        console.log('✅ Access token, refresh token e userId salvos com sucesso');
        console.log('👤 User ID:', userId);
        return true;
      } else {
        console.warn('⚠️ ID do usuário não encontrado no token');
        Alert.alert('Erro', 'Não foi possível obter as informações do usuário.');
        return false;
      }
    } else {
      console.warn('⚠️ Tokens inválidos ou não recebidos');
      Alert.alert('Erro', 'Tokens inválidos ou ausentes na resposta.');
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
    console.error("Erro ao buscar usuário:", e.response?.data || e.message);
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

export async function isAuthenticated() {
  try {
    const token = await AsyncStorage.getItem('token');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    return !!(token && refreshToken);
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error);
    return false;
  }
}

export async function logout() {
  try {
    try {
      await api.post('/auth/logout');
    } catch (e) {
      console.log('Erro ao chamar logout no backend:', e);
    }
    
    await AsyncStorage.multiRemove(['token', 'refreshToken', 'userId']);
    console.log('✅ Logout realizado com sucesso');
    return true;
  } catch (error) {
    console.error('❌ Erro ao fazer logout:', error);
    return false;
  }
}