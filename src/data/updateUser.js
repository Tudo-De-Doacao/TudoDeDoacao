import api from '../../services/api/api';
import { getUserId } from './getUser';
import { Alert, Platform } from 'react-native';

/**
 * Atualiza informações do usuário usando FormData
 * PUT /users/{user_id}
 */
export async function updateUser({ name, email, location, phone, avatar }) {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return false;
    }

    const formData = new FormData();
    
    // Adiciona apenas os campos que foram fornecidos
    if (name?.trim()) {
      formData.append('name', name.trim());
    }
    
    if (email?.trim()) {
      formData.append('email', email.trim());
    }
    
    if (location?.trim()) {
      formData.append('location', location.trim());
    }
    
    if (phone?.trim()) {
      formData.append('phone', phone.trim());
    }

    // Adiciona avatar se fornecido
    if (avatar && avatar.uri) {
      formData.append('avatar', {
        uri: Platform.OS === 'android' ? avatar.uri : avatar.uri.replace('file://', ''),
        name: avatar.fileName || avatar.name || 'avatar.jpg',
        type: avatar.type?.includes('/') ? avatar.type : 'image/jpeg'
      });
    }

    // Laravel precisa do _method para PUT com FormData
    formData.append('_method', 'PATCH');

    console.log('📤 Atualizando usuário:', userId);

    const response = await api.post(`/users/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      },
    });

    console.log('✅ Usuário atualizado:', response.data);
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao atualizar usuário:', error.response?.data || error.message);
    
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors;
      const errorMessages = Object.values(errors).flat().join('\n');
      Alert.alert('Erro', errorMessages);
    } else if (error.response?.data?.message) {
      Alert.alert('Erro', error.response.data.message);
    } else {
      Alert.alert('Erro', 'Não foi possível atualizar o perfil');
    }
    return false;
  }
}

/**
 * Atualiza senha do usuário
 * PUT /users/{user_id}/password
 */
export async function updatePassword({ currentPassword, newPassword, confirmPassword }) {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return false;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return false;
    }

    if (newPassword.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    const data = {
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: confirmPassword
    };

    console.log('📤 Atualizando senha...');

    const response = await api.patch(`/users/${userId}`, data);

    console.log('✅ Senha atualizada');
    Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao atualizar senha:', error.response?.data || error.message);
    
    if (error.response?.data?.message) {
      Alert.alert('Erro', error.response.data.message);
    } else {
      Alert.alert('Erro', 'Não foi possível atualizar a senha');
    }
    return false;
  }
}

/**
 * Deleta conta do usuário
 * DELETE /users/{user_id}
 */
export async function deleteAccount() {
  try {
    const userId = await getUserId();
    
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return false;
    }

    console.log('🗑️ Deletando conta...');

    await api.delete(`/users/${userId}`);

    console.log('✅ Conta deletada');
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar conta:', error.response?.data || error.message);
    Alert.alert('Erro', 'Não foi possível deletar a conta');
    return false;
  }
}