<<<<<<< HEAD
import { Alert } from 'react-native';
import api from '../../services/api/api'; 
export async function registerDonate({
  name,
  id,
  user_id,
=======
import api from '../../services/api/api';
import { Alert, Platform } from 'react-native';

export async function registerDonate({
  name,
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
  location,
  category,
  image,
  description
}) {

<<<<<<< HEAD

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
=======
  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("location", location);
    formData.append("description", description);

    if (image && image.uri) {
      formData.append("image", {
        uri: Platform.OS === "android" ? image.uri : image.uri.replace("file://", ""),
        name: image.fileName || image.name || "photo.jpg",
        type: image.type.includes("/") ? image.type : "image/jpeg"
      });
    } else {
      Alert.alert("Erro", "Imagem inválida ou ausente.");
      return false;
    }

    const response = await api.post("/donations", formData);

    if (response.status === 200 || response.status === 201) {
      console.log("✅ Doação registrada:", response.data);
      return response.data;
    } else {
      console.warn("⚠️ Status inesperado:", response.status);
      Alert.alert("Erro", "Não foi possível cadastrar a doação.");
      return false;
    }
  } catch (error) {
    console.error("❌ Erro ao registrar doação:", error.response?.data || error.message);
    Alert.alert("Erro", "Erro ao cadastrar a doação. Verifique os dados e tente novamente.");
    return false;
  }
}
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
