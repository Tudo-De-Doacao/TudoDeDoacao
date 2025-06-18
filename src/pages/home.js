import { ScrollView, View, FlatList, ImageBackground, ActivityIndicator, Text } from 'react-native';
import { useEffect, useState } from 'react';

import FilterBtn from '../../components/FilterBtn';
import Header from '../../components/Header';
import Card from '../../components/CardDon';

import { getDonates } from '../../services/api/donations';
import { categorias } from '../../components/FilterBtn';

import styles from '../../styles/index';
import colors from '../../styles/color';

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

 const renderFilterItem = ({ item }) => {
     console.log('Botão de categoria:', item);
     return(
  <FilterBtn route={item.rota} icon={item.icon} text={item.nome} filtro={item.filter} />
     ); 
 };


  const renderCardItem = ({ item }) => (
    <Card
      key={item.id}
      name={item.donation_name}
      description={item.donation_description}
      location={item.donation_location || item.donation_localization || 'Localização desconhecida'}
      image={`http://127.0.0.1:8000/storage/${item.donation_image}`}
    />
  );

  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
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
        </ScrollView>
      </ImageBackground>
    </>
  );
}