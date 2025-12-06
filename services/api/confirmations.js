import api from './api';
import { getUserId } from '../../src/data/getUser';
import { Alert } from 'react-native';

/**
 * Confirma o recebimento da doação pelo doador
 * PATCH /donations/{donationId}/pending
 */
export async function confirmDonationByDonor(donationId) {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return false;
    }

    const donationIdInt = parseInt(donationId, 10);
    const userIdInt = parseInt(userId, 10);

    console.log('✅ Doador confirmando entrega:', { donationId: donationIdInt, userId: userIdInt });

    const response = await api.patch(`/donations/${donationIdInt}/pending`, {
      donor_confirmed: true,
      user_id: userIdInt
    });

    console.log('✅ Confirmação do doador registrada:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao confirmar pelo doador:', error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível confirmar o recebimento');
    return false;
  }
}

/**
 * Confirma o recebimento da doação pelo recebedor
 * PATCH /donations/{donationId}/pending
 */
export async function confirmDonationByRecipient(donationId) {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return false;
    }

    const donationIdInt = parseInt(donationId, 10);
    const userIdInt = parseInt(userId, 10);

    console.log('✅ Recebedor confirmando recebimento:', { donationId: donationIdInt, userId: userIdInt });

    const response = await api.patch(`/donations/${donationIdInt}/pending`, {
      recipient_confirmed: true,
      user_id: userIdInt
    });

    console.log('✅ Confirmação do recebedor registrada:', response.data);
    
    // Se ambos confirmaram, a doação será finalizada automaticamente pelo backend
    if (response.data.status === 'completed' || response.data.status === 'disable') {
      Alert.alert(
        'Doação Finalizada! 🎉',
        'Ambos confirmaram o recebimento. A doação foi concluída com sucesso!',
        [{ text: 'OK' }]
      );
    }
    
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao confirmar pelo recebedor:', error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível confirmar o recebimento');
    return false;
  }
}

/**
 * Busca status de confirmação de uma doação
 * GET /donations/{donationId}
 */
export async function getDonationConfirmationStatus(donationId) {
  try {
    const donationIdInt = parseInt(donationId, 10);
    
    const response = await api.get(`/donations/${donationIdInt}`);
    
    return {
      donor_confirmed: response.data.donor_confirmed || false,
      recipient_confirmed: response.data.recipient_confirmed || false,
      status: response.data.status
    };
  } catch (error) {
    console.error('❌ Erro ao buscar status de confirmação:', error.response?.data || error.message);
    return null;
  }
}