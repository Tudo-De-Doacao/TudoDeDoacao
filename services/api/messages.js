import api from './api';
import { getUserId } from '../../src/data/getUser';

/**

 * GET /messages?recipient_id=1&limit=30&offset=0
 */
export async function getMessages(recipientId, limit = 30, offset = 0) {
  try {
    const response = await api.get('/messages', {
      params: {
        recipient_id: recipientId,
        limit,
        offset
      }
    });
    
    console.log('📬 Mensagens recebidas:', response.data);
    return response.data.messages || [];
  } catch (error) {
    console.error('❌ Erro ao buscar mensagens:', error.response?.data || error.message);
    return [];
  }
}

/**

 * POST /messages
 */
export async function sendMessage({ recipientId, text }) {
  try {
    const senderId = await getUserId();
    
    if (!senderId) {
      throw new Error('Usuário não autenticado');
    }

    const data = {
      sender_id: parseInt(senderId),
      recipient_id: parseInt(recipientId),
      text: text.trim()
    };

    console.log('📤 Enviando mensagem:', data);

    const response = await api.post('/messages', data);
    
    console.log('✅ Mensagem enviada:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao enviar mensagem:', error.response?.data || error.message);
    throw error;
  }
}

/**
 * PUT /messages/mark-read (se você tiver esse endpoint)
 */
// export async function markMessagesAsRead(messageIds) {
//   try {
//     const response = await api.put('/messages/mark-read', {
//       message_ids: messageIds
//     });
    
//     console.log('✅ Mensagens marcadas como lidas');
//     return response.data;
//   } catch (error) {
//     console.error('❌ Erro ao marcar mensagens como lidas:', error.response?.data || error.message);
//     return null;
//   }
// }