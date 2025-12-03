import { Alert } from 'react-native';
import api from './api'

export async function getDonates(searchTerm = '') {
  try {
    console.log('📥 Termo de busca recebido:', searchTerm);

    if (!searchTerm.trim()) {
      console.log('⚠️ Termo vazio. Buscando todas as doações...');
      const response = await api.get(`/donations`);
      return response.data.data;
    }

    const term = searchTerm.trim().toLowerCase();
    console.log('🔎 Termo tratado:', term);


    console.log(`➡️ Buscando por nome: ${term}`);
    let response = await api.get(`/donations/`, {
      params: { name: term }
    });
    console.log('🔁 Resposta (nome):', response.data.data);
    if (response.data.data?.length) return response.data.data;

    console.log(`➡️ Buscando por categoria: ${term}`);
    response = await api.get(`/donations/`, {
      params: { category: term }
    });
    console.log('🔁 Resposta (categoria):', response.data.data);
    if (response.data.data?.length) return response.data.data;


    console.log(`➡️ Buscando por localização: ${term}`);
    response = await api.get(`/donations/ `, {
      params: { location: term }
    });
    console.log('🔁 Resposta (localização):', response.data.data);
    if (response.data.data?.length) return response.data.data;

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