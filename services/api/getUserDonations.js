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

    console.log(`📥 Buscando doações do usuário ${userId}...`);
    const response = await api.get(`/users/${userId}/donations`);
    
    console.log('✅ Doações do usuário recebidas:', response.data);
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

    console.log(`📥 Buscando doações pendentes do usuário ${userId}...`);
    const response = await api.get(`/users/${userId}/pending`);
    
    console.log('✅ Doações pendentes recebidas:', response.data);
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
    const response = await api.get('/donations/accepted');
    
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

    console.log(`📥 Buscando pedidos finalizados do usuário ${userId}...`);
    
    // Se o backend tiver um endpoint específico, use-o
    // Caso contrário, busque todos e filtre pelo recipient_id
    const response = await api.get('/donations/accepted');
    const allAccepted = response.data.data || response.data || [];
    
    // Filtra apenas os pedidos onde o usuário é o recipient
    const userRequests = allAccepted.filter(donation => 
      donation.recipient_id?.toString() === userId.toString()
    );
    
    console.log('✅ Pedidos finalizados do usuário:', userRequests);
    return userRequests;
  } catch (error) {
    console.error('❌ Erro ao buscar pedidos finalizados:', error.response?.data || error.message);
    return [];
  }
}