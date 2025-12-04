
import api from '../../services/api/api';

export async function verificationCode(email)

{
  try{
    const response = await api.post("/auth/request-verification-code", email);
    console.log("Código enviado")
    return response.data;
  }catch(e){
    console.error(e.response?.data || e.message);
    return null;
  }
}
