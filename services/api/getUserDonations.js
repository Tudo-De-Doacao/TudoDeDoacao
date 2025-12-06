import api from './api';
import { getUserId } from '../../src/data/getUser';

/**
 * Busca doações do usuário logado
 * GET /users/{user_id}/donations
 */
export async function getUserDonations() {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      console.warn('⚠️ Usuário não autenticado');
      return [];
    }

    const userIdInt = parseInt(userId, 10);
    
    console.log(`📥 Buscando doações do usuário ${userIdInt}...`);
    const response = await api.get(`/users/${userIdInt}/donations`);
    
    console.log('✅ Doações do usuário recebidas:', response.data);
    
    // O backend retorna { donation: {...} } em vez de array
    // Precisamos verificar a estrutura e adaptar
    if (response.data.donation) {
      // Se for um objeto único, transforma em array
      return [response.data.donation];
    }
    
    return response.data.data || response.data || [];
  } catch (error) {
    console.error('❌ Erro ao buscar doações do usuário:', error.response?.data || error.message);
    return [];
  }
}

/**
 * Busca doações pendentes do usuário
 * GET /users/{user_id}/pending
 */
export async function getUserPendingDonations() {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      console.warn('⚠️ Usuário não autenticado');
      return [];
    }

    const userIdInt = parseInt(userId, 10);

    console.log(`📥 Buscando doações pendentes do usuário ${userIdInt}...`);
    const response = await api.get(`/users/${userIdInt}/pending`);
    
    console.log('✅ Doações pendentes recebidas:', response.data);
    
    // O backend retorna { solicitante_id: 1, donation: [] }
    // Precisamos pegar o array 'donation'
    if (response.data.donation) {
      return Array.isArray(response.data.donation) ? response.data.donation : [];
    }
    
    return response.data.data || response.data || [];
  } catch (error) {
    console.error('❌ Erro ao buscar doações pendentes:', error.response?.data || error.message);
    return [];
  }
}

/**
 * Busca doações aceitas/finalizadas
 * GET /donations/accepted
 */
export async function getAcceptedDonations() {
  try {
    console.log('📥 Buscando doações aceitas/finalizadas...');
    
    // Verifica se o endpoint existe
    const response = await api.get('/donations/accepted').catch(err => {
      // Se der erro 500 ou 404, retorna vazio
      if (err.response?.status === 500 || err.response?.status === 404) {
        console.warn('⚠️ Endpoint /donations/accepted não disponível ou retornou erro');
        return { data: [] };
      }
      throw err;
    });
    
    console.log('✅ Doações aceitas recebidas:', response.data);
    return response.data.data || response.data || [];
  } catch (error) {
    console.error('❌ Erro ao buscar doações aceitas:', error.response?.data || error.message);
    return [];
  }
}

/**
 * Busca pedidos finalizados do usuário
 * GET /donations/accepted (filtrado pelo usuário)
 */
export async function getUserAcceptedRequests() {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      console.warn('⚠️ Usuário não autenticado');
      return [];
    }

    const userIdInt = parseInt(userId, 10);

    console.log(`📥 Buscando pedidos finalizados do usuário ${userIdInt}...`);
    
    // Tenta buscar as doações aceitas
    const response = await api.get('/donations/accepted').catch(err => {
      // Se der erro 500 ou 404, retorna vazio
      if (err.response?.status === 500 || err.response?.status === 404) {
        console.warn('⚠️ Endpoint /donations/accepted não disponível ou retornou erro');
        return { data: [] };
      }
      throw err;
    });
    
    const allAccepted = response.data.data || response.data || [];
    
    // Se não for array, retorna vazio
    if (!Array.isArray(allAccepted)) {
      console.warn('⚠️ Resposta não é um array:', allAccepted);
      return [];
    }
    
    // Filtra apenas os pedidos onde o usuário é o recipient
    const userRequests = allAccepted.filter(donation => 
      parseInt(donation.recipient_id, 10) === userIdInt
    );
    
    console.log('✅ Pedidos finalizados do usuário:', userRequests);
    return userRequests;
  } catch (error) {
    console.error('❌ Erro ao buscar pedidos finalizados:', error.response?.data || error.message);
    return [];
  }
}