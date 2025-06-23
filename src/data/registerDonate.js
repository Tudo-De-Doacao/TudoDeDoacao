import { Alert } from 'react-native';
import api from '../../services/api/api'; 
export async function registerDonate({
  name,
  id,
  user_id,
  location,
  category,
  image,
  description
}) {


  const data = {
    user_id,
    id,
    name,
    category,
    location,
    image,
    description,
  };

  try {
    const response = await api.post('/donations', data);

    if (response.status === 200 || response.status === 201) {
      console.log('✅ Doação registrada:', response.data.data);
      Alert.alert('Sucesso', 'Doação cadastrada com sucesso!');
      return response.data.data;
    } else {
      console.warn('⚠️ Status inesperado:', response.status);
      Alert.alert('Erro', 'Não foi possível cadastrar a doação.');
      return false;
    }
  } catch (error) {
    console.error('❌ Erro ao registrar doação:', error.response?.data || error.message);
    Alert.alert('Erro', 'Erro ao cadastrar a doação. Verifique os dados e tente novamente.');
    return false;
  }
}
