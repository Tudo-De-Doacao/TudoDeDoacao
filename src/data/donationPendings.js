
import api from '../../services/api/api';

export async function fetchDonationPending(idUser)
{
  try{
    const response = await api.get(`/users/${idUser}/received-pendings`);
    return response.data;
  }catch(e){
   console.error("Erro ao atualizar doação:", e.response?.data || e.message);
  }
}
