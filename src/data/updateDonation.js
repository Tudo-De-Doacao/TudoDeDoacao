
import api from '../../services/api/api';

export async function updateDonation(donationId, data)
{
  try{
    const response = await api.put(`/donations/pendings/${donationId}`, data);
    return response.data;
  }catch(e){
    console.error("Erro ao atualizar doação:", e.response?.data || e.message);
    return null;
  }
}
