
import api from '../../services/api/api';

export async function fetchDonationPending()
{
  try{
    const response = await api.get(`/donations/pendings`);
    return response.data;
  }catch(e){
   console.error("Erro ao atualizar doação:", e.response?.data || e.message);
  }
}
