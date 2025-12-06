import {
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Text,
} from 'react-native';
import { useEffect, useState } from 'react';

import FilterBtn from '../../components/FilterBtn';
import Header from '../../components/Header';
import Card from '../../components/CardDon';

import { useNavigation } from '@react-navigation/native';

import { getDonates } from '../../services/api/donations';
import { getUserById, getUserId } from '../../src/data/getUser';
import { categorias } from '../../components/FilterBtn';

import styles from '../../styles/index';
import colors from '../../styles/color';
import typog from '../../styles/type';
import FloatingButton from '../../components/FloatingButton';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [donationCards, setDonationCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    loadUserDataAndDonations();
  }, []);

  async function loadUserDataAndDonations() {
    try {
      // Carrega dados do usuário
      const userId = await getUserId();
      setCurrentUserId(userId);

      if (userId) {
        const userData = await getUserById(parseInt(userId, 10));
        if (userData && userData.location) {
          setUserLocation(userData.location);
        }
      }

      // Carrega todas as doações
      const data = await getDonates('');
      
      if (Array.isArray(data)) {
        // Filtra doações:
        // 1. Apenas status 'active' (disponíveis)
        // 2. Não são do usuário atual
        // 3. São da mesma localização do usuário
        const filteredDonations = data.filter(donation => {
          const isActive = donation.status?.toLowerCase() === 'active';
          const isNotMine = donation.user_id?.toString() !== userId;
          const isSameLocation = userData?.location 
            ? donation.location?.toLowerCase() === userData.location.toLowerCase()
            : true; // Se não tiver localização, mostra todas

          return isActive && isNotMine && isSameLocation;
        });

        console.log('📊 Doações filtradas:', {
          total: data.length,
          filtered: filteredDonations.length,
          userLocation: userData?.location
        });

        setDonationCards(filteredDonations);
      } else {
        setErrorMsg('Formato inesperado dos dados');
      }
    } catch (error) {
      setErrorMsg('Erro ao carregar doações: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const renderCardItem = ({ item }) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      location={item.location || 'Localização desconhecida'}
      image={`http://10.215.204.95:8000/storage/${item.image}`}
      status={item.status}
      created_at={item.created_at}
      user_id={item.user_id}
      category={item.category}
    />
  );

  const renderFilterItem = ({ item }) => (
    <FilterBtn
      rota={item.rota}
      icon={item.icon}
      text={item.nome}
      filter={item.filter}
    />
  );

  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="stretch"
      >
        <FlatList
          data={categorias}
          renderItem={renderFilterItem}
          keyExtractor={(item) => item.nome}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            maxHeight: 100,
            paddingVertical: 4,
            marginBottom: 12,
          }}
        />
        
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            ...styles.scroll,
            alignContent: 'center',
            justifyContent: 'center',
            paddingBottom: 60,
          }}
          showsVerticalScrollIndicator={false}
        >
          {loading && (
            <ActivityIndicator
              size={100}
              color="#D93036"
              style={{padding: 10, marginBottom: 80, justifyContent: 'center', alignItems:'center', marginTop: 10 }}
            />
          )}

          {errorMsg !== '' && (
            <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>
              {errorMsg}
            </Text>
          )}

          {!loading && donationCards.length === 0 && errorMsg === '' && (
            <View style={{ padding: 20, margin: 20, alignItems: 'center' }}>
              <Icon name="inbox" size={60} color="#CCC" />
              <Text style={{ ...styles.txtCard, color: '#351313', marginTop: 16, textAlign: 'center' }}>
                {userLocation 
                  ? `Nenhuma doação disponível em ${userLocation}`
                  : 'Nenhuma doação disponível no momento'
                }
              </Text>
              <Text style={{ color: '#666', marginTop: 8, textAlign: 'center', fontSize: 14 }}>
                Verifique novamente mais tarde
              </Text>
            </View>
          )}

          {!loading && donationCards.length > 0 && (
            <View>
              <Text style={{ ...typog.txtDrw, textAlign: 'left', marginHorizontal: 12 }}>
                Doações em {userLocation || 'sua área'}
              </Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                  data={donationCards}
                  renderItem={renderCardItem}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.bodyCard}
                />
              </ScrollView>
            </View>
          )}
        </ScrollView>
        
        <FloatingButton onPress={() => navigation.navigate('Chat')} />      
      </ImageBackground>
    </>
  );
}