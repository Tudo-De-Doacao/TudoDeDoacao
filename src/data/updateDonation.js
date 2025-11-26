
import api from '../../services/api/api';

export async function updateDonation(donationId, data)
{
  try{
    const response = await api.put(`/donations/${donationId}`, data);
    return response.data;
  }catch(e){
   const message = extractErrorMessage(e);
   console.error(message);
   return null;
  }
}
