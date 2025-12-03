
import api from '../../services/api/api';

export async function fetchByUserId()
{
  try{
    const response = await api.get(`/donations/users `);
    return response.data;
  }catch(e){
   const message = extractErrorMessage(e);
   console.error(message);
  }
}
