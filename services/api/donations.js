  
import { Alert } from 'react-native';
import api from './api'
export async function getDonates(searchTerm = '') {
  try {
    console.log('🔍 Iniciando busca de doações...');
    console.log('📥 Termo de busca recebido:', searchTerm);

    if (!searchTerm.trim()) {
      console.log('⚠️ Termo vazio. Buscando todas as doações...');
      const response = await api.get(`/donations`);
      console.log('✅ Dados recebidos (geral):', response.data.data);
      return response.data.data;
    }

    const term = searchTerm.trim().toLowerCase();
    console.log('🔎 Termo tratado:', term);

    // Buscar por nome
    console.log(`➡️ Buscando por nome: ${term}`);
    let response = await api.get(`/donations/getbyname/${term}`);
    console.log('🔁 Resposta (nome):', response.data.data);
    if (response.data.data.length > 0) return response.data.data;

    // Buscar por categoria
    console.log(`➡️ Buscando por categoria: ${term}`);
    response = await api.get(`/donations/getbycategory/${term}`);
    console.log('🔁 Resposta (categoria):', response.data.data);
    if (response.data.data.length > 0) return response.data.data;

    // Buscar por localização
    console.log(`➡️ Buscando por localização: ${term}`);
    response = await api.get(`/donations/getbylocation/${term}`);
    console.log('🔁 Resposta (localização):', response.data.data);
    if (response.data.data.length > 0) return response.data.data;

    return []; 

  } catch (error) {
    console.error('❌ Erro ao buscar doações:', error.message);
    if (error.response) {
      console.error('📄 Resposta do servidor:', error.response.data);
      console.error('📊 Status:', error.response.status);
    } else if (error.request) {
      console.error('📡 Sem resposta do servidor. Request feito foi:', error.request);
    }
    return [];
  }
}


export async function registerDonate({ name, id, user_id, location, category, image, description }) {
  const timestamp = new Date().toISOString();

  const data = {
    user_id,
    id,
    name,
    category, 
    location,
    image,
    description,
    created_at: timestamp,
    updated_at: timestamp
  };

  try {
    const response = await api.post(`/donations`, data);
    console.log('✅ Doação registrada:', response.data.data);

    Alert.alert('Sucesso', 'Doação cadastrada com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao registrar doação:', error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível cadastrar a doação');
    return false;
  }
}