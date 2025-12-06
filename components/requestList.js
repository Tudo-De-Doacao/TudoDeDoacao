import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react"

import styles from "../styles";
import RequestCard from "./requestCard";
import { acceptDonationRequest, declineDonationRequest } from "../src/data/pendingDonations";
import { getUserById } from "../src/data/getUser";

export default function RequestList({ dataCard, onRequestUpdated }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, [dataCard]);

  async function loadUsers() {
    setLoading(true);
    const listWithNames = [];

    for (const item of dataCard) {
      try {
        // Pega o ID do solicitante
        const requestUserId = item.request_user_id || item.user_id || item.solicitante_id;
        
        console.log('🔍 Carregando usuário ID:', requestUserId);
        
        const user = await getUserById(requestUserId);
        
        listWithNames.push({
          ...item,
          request_user_id: requestUserId,
          request_user_name: user?.name || 'Usuário',
          request_user_location: user?.location || 'Localização não informada'
        });
      } catch (error) {
        console.error('❌ Erro ao carregar usuário:', error);
        listWithNames.push({
          ...item,
          request_user_name: 'Usuário',
          request_user_location: 'Localização não informada'
        });
      }
    }

    console.log('📊 Cards carregados:', listWithNames);
    setCards(listWithNames);
    setLoading(false);
  }

  const handleRecuse = async (donationId, requestUserId) => {
    console.log('❌ Recusando pedido:', { donationId, requestUserId });
    
    // Remove da lista imediatamente
    setCards((prev) => prev.filter((obj) => obj.id !== donationId));

    // Chama a API
    const result = await declineDonationRequest(donationId, requestUserId);

    if (result && onRequestUpdated) {
      onRequestUpdated();
    } else if (!result) {
      // Se falhou, recarrega a lista
      loadUsers();
    }
  };

  const handleAccept = async (donationId, requestUserId) => {
    console.log('✅ Aceitando pedido:', { donationId, requestUserId });
    
    // Remove da lista imediatamente
    setCards((prev) => prev.filter((obj) => obj.id !== donationId));

    // Chama a API
    const result = await acceptDonationRequest(donationId, requestUserId);

    if (result && onRequestUpdated) {
      onRequestUpdated();
    } else if (!result) {
      // Se falhou, recarrega a lista
      loadUsers();
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 }}>
        <ActivityIndicator size="large" color="#D93036" />
        <Text style={{ marginTop: 16, color: '#666' }}>
          Carregando pedidos...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 16,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#351313',
          }}
        >
          Pedidos Recebidos
        </Text>
        <View
          style={{
            backgroundColor: '#D93036',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
          }}
        >
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 14 }}>
            {cards.length}
          </Text>
        </View>
      </View>

      <FlatList
        data={cards}
        keyExtractor={(item, index) => 
          `${item.id || index}-${item.request_user_id || index}`
        }
        renderItem={({ item }) => (
          <RequestCard
            donateName={item.name}
            userName={item.request_user_name}
            userLocal={item.request_user_location}
            requestImage={`http://localhost:8000/storage/${item.image}`}
            onRecuse={() => handleRecuse(item.id, item.request_user_id)}
            onAccept={() => handleAccept(item.id, item.request_user_id)}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={{ padding: 40, alignItems: 'center' }}>
            <Icon name="inbox" size={60} color="#CCC" />
            <Text style={{ marginTop: 16, color: '#999', textAlign: 'center' }}>
              Nenhum pedido pendente
            </Text>
          </View>
        }
      />
    </View>
  );
}