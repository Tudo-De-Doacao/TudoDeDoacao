import {
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Text,
} from 'react-native';
import { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import Card from '../../components/CardDon';
import Header from '../../components/Header';

import styles from '../../styles/index';
import typog from '../../styles/type';

import { getDonates } from '../../services/api/donations';
import { categorias } from '../../components/FilterBtn';

function FavoriteScreen() {
  const [donationCards, setDonationCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function fetchDonations() {
      try {
        const data = await getDonates('');
        if (Array.isArray(data)) {
          setDonationCards(data);
        } else {
          setErrorMsg('Formato inesperado dos dados');
        }
      } catch (error) {
        setErrorMsg('Erro ao carregar doações: ' + error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDonations();
  }, []);

  const renderCardItem = ({ item }) => (
    <Card
      key={item.id}
      name={item.name}
      description={item.description}
      location={item.location || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.image}`}
    />
  );

  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="stretch">


      <ScrollView
        horizontal={true}
          contentContainerStyle={{
            ...styles.scroll,
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
        <View>
        <Text /> 
        </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default FavoriteScreen;
