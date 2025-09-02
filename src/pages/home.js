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
import CardTemp from '../../components/CardTemp';


import { getDonates } from '../../services/api/donations';
import { categorias } from '../../components/FilterBtn';

import styles from '../../styles/index';
import colors from '../../styles/color';
import typog from '../../styles/type';

export default function HomeScreen() {
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
<<<<<<< HEAD
      name={item.name}
      description={item.description}
      location={item.location || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.image}`}
=======
      name={item.donation_name}
      description={item.donation_description}
      location={item.donation_location || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.donation_image}`}
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
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
<<<<<<< HEAD
<<<<<<< HEAD
            maxHeight: 100,
            paddingVertical: 4,
            flex: 1,
=======
            paddingVertical: 4,
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
            paddingVertical: 4,
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
            marginBottom: 12,
          }}
        />
        <ScrollView
        horizontal={true}
          contentContainerStyle={{
            ...styles.scroll,
<<<<<<< HEAD
<<<<<<< HEAD
            alignContent: 'center',
            justifyContent: 'center',
            flex: 1,
=======
            alignItems: 'center',
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
            alignItems: 'center',
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
            paddingBottom: 60,
          }}
          showsVerticalScrollIndicator={false}
        >
     
  

          {loading && (
            <ActivityIndicator
              size={100}
              color="#D93036"
<<<<<<< HEAD
<<<<<<< HEAD
              style={{padding: 10, marginBottom: 80, justifyContent: 'center', alignItems:'center', marginTop: 10 }}
=======
              style={{ marginTop: 40 }}
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
              style={{ marginTop: 40 }}
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
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
<<<<<<< HEAD
<<<<<<< HEAD
            <Text style={{ ...styles.txtCard,  color: '#351313',  padding: 20, margin: 20, marginBottom: 30, textAling: 'right',   justifyContent: 'center' }}>
=======
            <Text style={{ ...styles.txtCard,  color: '#351313', padding: 40, margin: 40, marginBottom: 80, justifyContent: 'flex-start' }}>
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
            <Text style={{ ...styles.txtCard,  color: '#351313', padding: 40, margin: 40, marginBottom: 80, justifyContent: 'flex-start' }}>
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
              Nenhuma doação encontrada.
            </Text>
          )}

          {!loading && donationCards.length > 0 && (
            <View>
             <Text style={{ ...typog.txtDrw, textAlign: 'left' }}>
              Doações Favoritas
            </Text>
             <ScrollView
        horizontal={true} showsHorizontalScrollIndicator={false}>
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
      </ImageBackground>
    </>
  );
}