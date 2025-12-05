import api from '../../services/api/api';
import { getUserId } from '../data/getUser';
import { Alert } from 'react-native';

/**
 * Cria uma solicitação de doação
 * POST /donations/pending
 */
export async function requestDonation(donationId) {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return false;
    }

    console.log('📤 Solicitando doação:', donationId);

    const response = await api.post('/donations/pending', {
      donation_id: donationId,
      user_id: parseInt(userId)
    });

    console.log('✅ Solicitação enviada:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao solicitar doação:', error.response?.data || error.message);
    
    if (error.response?.data?.message) {
      Alert.alert('Erro', error.response.data.message);
    } else {
      Alert.alert('Erro', 'Não foi possível solicitar a doação');
    }
    return false;
  }
}

/**
 * Busca doações pendentes do usuário (que ele solicitou)
 * GET /users/{userId}/pending
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
 * Busca pedidos recebidos (doações do usuário que outros solicitaram)
 * GET /users/{userId}/received-pendings
 */
export async function getReceivedPendingDonations() {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      console.warn('⚠️ Usuário não autenticado');
      return [];
    }

    console.log(`📥 Buscando pedidos recebidos do usuário ${userId}...`);
    const response = await api.get(`/users/${userId}/received-pendings`);
    
    console.log('✅ Pedidos recebidos:', response.data);
    return response.data.data || response.data || [];
  } catch (error) {
    console.error('❌ Erro ao buscar pedidos recebidos:', error.response?.data || error.message);
    return [];
  }
}

/**
 * Aceita uma solicitação de doação
 * POST /donations/accepted
 */
export async function acceptDonationRequest(donationId, requestUserId) {
  try {
    console.log('✅ Aceitando pedido de doação:', { donationId, requestUserId });

    const response = await api.post('/donations/accepted', {
      donation_id: donationId,
      request_user_id: requestUserId
    });

    console.log('✅ Pedido aceito:', response.data);
    Alert.alert('Sucesso', 'Pedido aceito! O usuário será notificado.');
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao aceitar pedido:', error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível aceitar o pedido');
    return false;
  }
}

/**
 * Recusa uma solicitação de doação (volta para ativa)
 * DELETE /donations/pending
 */
export async function declineDonationRequest(donationId, requestUserId) {
  try {
    console.log('❌ Recusando pedido de doação:', { donationId, requestUserId });

    const response = await api.delete('/donations/pending', {
      data: {
        donation_id: donationId,
        request_user_id: requestUserId
      }
    });

    console.log('✅ Pedido recusado:', response.data);
    Alert.alert('Pedido recusado', 'A doação voltará a ficar disponível.');
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao recusar pedido:', error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível recusar o pedido');
    return false;
  }
}

/**
 * Cancela uma solicitação de doação (usuário que solicitou cancela)
 * DELETE /donations/pending
 */
export async function cancelDonationRequest(donationId) {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return false;
    }

    console.log('🔄 Cancelando solicitação de doação:', donationId);

    const response = await api.delete('/donations/pending', {
      data: {
        donation_id: donationId,
        user_id: parseInt(userId)
      }
    });

    console.log('✅ Solicitação cancelada:', response.data);
    Alert.alert('Cancelado', 'Sua solicitação foi cancelada.');
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao cancelar solicitação:', error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível cancelar a solicitação');
    return false;
  }
}