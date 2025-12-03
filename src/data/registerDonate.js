import api from '../../services/api/api';
import { Alert, Platform } from 'react-native';
export async function registerDonate({
  name,
  location,
  category,
  image,
  description
}) {



  try {
    const formData = new FormData();

    
formData.append("user_id", userId);
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

    const response = await api.post("/donations", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"  
      },
    });

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