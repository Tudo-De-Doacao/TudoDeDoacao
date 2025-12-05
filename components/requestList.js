import { Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react"

import styles from "../styles";
import RequestCard from "./requestCard";
import { acceptDonationRequest, declineDonationRequest } from "../src/data/pendingDonations";
import { getUserById } from "../src/data/getUser";

export default function RequestList({dataCard, onRequestUpdated}){
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, [dataCard]);

  async function loadUsers(){
    setLoading(true);
    const listWithNames = [];

    for (const item of dataCard){
      try {
        const user = await getUserById(item.request_user_id || item.user_id);
        
        listWithNames.push({
          ...item, 
          request_user_name: user?.name || 'Usuário',
          request_user_location: user?.location || 'Localização não informada'
        });
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
        listWithNames.push({
          ...item,
          request_user_name: 'Usuário',
          request_user_location: 'Localização não informada'
        });
      }
    }
    
    setCards(listWithNames);
    setLoading(false);
  }

  const handleRecuse = async (donationId, requestUserId) => {
    // Remove da lista imediatamente (optimistic update)
    setCards((prev) => prev.filter((obj) => obj.id !== donationId));
    
    // Chama a API
    const result = await declineDonationRequest(donationId, requestUserId);
    
    if (result) {
      // Notifica o componente pai para recarregar
      if (onRequestUpdated) onRequestUpdated();
    } else {
      // Se falhou, recarrega a lista
      loadUsers();
    }
  };

  const handleAccept = async (donationId, requestUserId) => {
    // Remove da lista imediatamente (optimistic update)
    setCards((prev) => prev.filter((obj) => obj.id !== donationId));
    
    // Chama a API
    const result = await acceptDonationRequest(donationId, requestUserId);
    
    if (result) {
      // Notifica o componente pai para recarregar
      if (onRequestUpdated) onRequestUpdated();
    } else {
      // Se falhou, recarrega a lista
      loadUsers();
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return(
    <View style={styles.requestListContainer}>
      <Text style={{ 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#351313',
        marginVertical: 16,
        marginHorizontal: 16
      }}>
        Pedidos Recebidos ({cards.length})
      </Text>
      
      <FlatList
        data={cards}
        keyExtractor={(item) => `${item.id}-${item.request_user_id || item.user_id}`}
        renderItem={({item}) => (
          <RequestCard
            donateName={item.name}
            userName={item.request_user_name}
            userLocal={item.request_user_location}
            requestImage={`http://10.143.45.95:8000/storage/${item.image}`}
            onRecuse={() => handleRecuse(item.id, item.request_user_id || item.user_id)}
            onAccept={() => handleAccept(item.id, item.request_user_id || item.user_id)}
          />
        )}
        contentContainerStyle={{ 
          alignItems: "center", 
          gap: 12, 
          paddingHorizontal: 16,
          paddingBottom: 20
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
};