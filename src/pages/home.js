<<<<<<< HEAD
import { ScrollView, View, FlatList, ImageBackground, ActivityIndicator, Text } from 'react-native';
=======
import {
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Text,
} from 'react-native';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
import { useEffect, useState } from 'react';

import FilterBtn from '../../components/FilterBtn';
import Header from '../../components/Header';
import Card from '../../components/CardDon';
<<<<<<< HEAD
=======
import CardTemp from '../../components/CardTemp';

>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469

import { getDonates } from '../../services/api/donations';
import { categorias } from '../../components/FilterBtn';

import styles from '../../styles/index';
import colors from '../../styles/color';
<<<<<<< HEAD
=======
import typog from '../../styles/type';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469

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

<<<<<<< HEAD
 const renderFilterItem = ({ item }) => {
     console.log('Botão de categoria:', item);
     return(
  <FilterBtn rota={item.rota} icon={item.icon} text={item.nome} filter={item.filter} />
     ); 
 };
=======
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469


  const renderCardItem = ({ item }) => (
    <Card
      key={item.id}
<<<<<<< HEAD
      name={item.donation_name}
      description={item.donation_description}
      location={item.donation_location || item.donation_localization || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.donation_image}`}
    />
  );

=======
      name={item.name}
      description={item.description}
      location={item.location || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.image}`}
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
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
<<<<<<< HEAD
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.bodyPrin}>
            <FlatList
              data={categorias}
              renderItem={renderFilterItem}
              keyExtractor={item => item.nome}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.container}
            />

            {loading && <ActivityIndicator size="large" color="#D93036" style={{ marginTop: 20 }} />}

            {errorMsg !== '' && (
              <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>{errorMsg}</Text>
            )}

            {!loading && donationCards.length === 0 && errorMsg === '' && (
              <Text style={{...styles.txtCard, color: '#351313'}}>
                Nenhuma doação encontrada.
              </Text>
            )}

            {!loading && donationCards.length > 0 && (
              <FlatList
                data={donationCards}
                renderItem={renderCardItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bodyCard}
              />
            )}
          </View>
=======
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
            flex: 1,
            marginBottom: 12,
          }}

        />
        <ScrollView
        horizontal={true}
          contentContainerStyle={{
            ...styles.scroll,
            alignContent: 'center',
            justifyContent: 'center',
            flex: 1,
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
            <Text
              style={{ color: 'red', textAlign: 'center', marginTop: 20 }}
            >
              {errorMsg}
            </Text>
          )}

          {!loading && donationCards.length === 0 && errorMsg === '' && (
            <Text style={{ ...styles.txtCard,  color: '#351313',  padding: 20, margin: 20, marginBottom: 30, textAling: 'right',   justifyContent: 'center' }}>
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
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
        </ScrollView>
      </ImageBackground>
    </>
  );
}