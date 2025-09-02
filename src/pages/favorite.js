import {
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Text,
} from 'react-native';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

import Icon from 'react-native-vector-icons/Feather';

import Card from '../../components/CardDon';
import Header from '../../components/Header';

import styles from '../../styles/index';
import typog from '../../styles/type';
>>>>>>> 23f22453472bb99be476864822446dafc87422b2

import Icon from 'react-native-vector-icons/Feather';

<<<<<<< HEAD
import Card from '../../components/CardDon';
import Header from '../../components/Header';

import styles from '../../styles/index';
import typog from '../../styles/type';
>>>>>>> 23f22453472bb99be476864822446dafc87422b2

import Icon from 'react-native-vector-icons/Feather';

<<<<<<< HEAD
import Card from '../../components/CardDon';
import Header from '../../components/Header';

import styles from '../../styles/index';
import typog from '../../styles/type';

=======
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
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

<<<<<<< HEAD
<<<<<<< HEAD
  const renderCardItem = ({ item }) => (
    <Card
      key={item.id}
      name={item.name}
      description={item.description}
      location={item.location || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.image}`}
=======
=======
>>>>>>> 23f22453472bb99be476864822446dafc87422b2


  const renderCardItem = ({ item }) => (
    <Card
      key={item.id}
      name={item.donation_name}
      description={item.donation_description}
      location={item.donation_location || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.donation_image}`}
<<<<<<< HEAD
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
    />
  );

  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="stretch">
<<<<<<< HEAD
<<<<<<< HEAD


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
=======
=======
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={[styles.bodyPrin, { alignItems: 'flex-start', width: '100%', paddingHorizontal: 20 }]}>
          <View style={{flexDirection: 'row'}}>
           <Icon
            name="heart"
            size={32}
            color="#D93036"
            style={styles.iconHeader}
          />
            <Text style={{ ...typog.txtDrw, textAlign: 'left' }}>
              Doações Favoritas
            </Text>
            </View>
             {loading && (
            <ActivityIndicator
              size={100}
              color="#D93036"
              style={{ marginTop: 40 }}
            />
          )}

          {errorMsg !== '' && (
            <Text
              style={{ color: 'red', textAlign: 'center', marginTop: 20 }}
            >
              {errorMsg}
            </Text>
          )}

          {!loading && donationCards.length === 0 && errorMsg === '' && (
            <Text style={{ ...styles.txtCard,paddingRight: 24 }}>
              Nenhuma doação favoritada ainda.
            </Text>
          )}

          {!loading && donationCards.length > 0 && (
            <FlatList
              data={donationCards}
              renderItem={renderCardItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.bodyCard}
            />
          )}
          </View>
<<<<<<< HEAD
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default FavoriteScreen;