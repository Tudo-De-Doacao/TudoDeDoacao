import {
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Text,
  Image
} from 'react-native';
import { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import Card from '../../components/CardDon';
import SavedCard from '../../components/SavedCard';
import Header from '../../components/Header';
import PendingDonationCard from '../../components/pendingDonationCard';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';

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
        console.log(data)
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
  const donations = [
    { id: 1, name: "Bola", location: "São Paulo, Campo limpoaaaaaaaaaaaaaaaa", description: "bola do meu filho que usavamos, Ele cresceu e não precisa mais. Buscando alguma criança que realmente" },
    { id: 2, name: "Carrinho", location: "Rio de Janeiro", description: "bola do meu filho que usavamos, Ele cresceu e não precisa mais. Buscando alguma criança que realmente" },
    { id: 3, name: "Carrinho", location: "Rio de Janeiro", description: "bola do meu filho que usavamos, Ele cresceu e não precisa mais. Buscando alguma criança que realmente" } ,  
    { id: 4, name: "Carrinho", location: "Rio de Janeiro", description: "bola do meu filho que usavamos, Ele cresceu e não precisa mais. Buscando alguma criança que realmente" } ,
    { id: 5, name: "Carrinho", location: "Rio de Janeiro", description: "bola do meu filho que usavamos, Ele cresceu e não precisa mais. Buscando alguma criança que realmente" } ,

  ]

  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="stretch">


        <ScrollView
          
            contentContainerStyle={{
              ...styles.scroll,
              
              flex: 1
            }}
            showsVerticalScrollIndicator={false}
          >
          

          <View style={styles.bodyPrin}>
            {/* <View style={{flexDirection: 'row'}}>
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
            )} */}

            {/* {errorMsg !== '' && (
              <Text
                style={{ color: 'red', textAlign: 'center', marginTop: 20 }}
              >
                {errorMsg}
              </Text>
            )} */}

            {/* {!loading && donationCards.length === 0 && errorMsg === '' && (
              <Text style={{ ...styles.txtCard,paddingRight: 24 }}>
                Nenhuma doação favoritada ainda.
              </Text>
            )} */}

            {/* {!loading && donationCards.length > 0 && (
              <FlatList
                data={donationCards}
                renderItem={renderCardItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bodyCard}
              />
            )} */}

        
            {/* <SavedCard 
            name={"Bola"}
            location={"São paulo, campo limpo - SP"}
            description={"Bola quadrada do kiko"}
            > 

            </SavedCard> */}

            <PendingDonationCard
            title={"Doações pendentes"}
            iconName={"heart"}
            //image receives tree or trunk
            image={"tree"}
            dataCard={donations}
            />
            <PendingDonationCard
            title={"Doações pendentes"}
            iconName={"heart"}
            //image receives tree or trunk
            image={"tree"}
            dataCard={donations}
            />
          

             

           
          

          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default FavoriteScreen;