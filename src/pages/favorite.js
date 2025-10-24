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
  const [pendings, setPendings] = useState([]);
  const [loading, setLoading] = useState(false);
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
        style={[styles.bgimagem]}
        resizeMode="stretch"
      >
        <ScrollView 
         contentContainerStyle={{paddingBottom: 70}}
        >

          {loading && (
              <View>
                <ActivityIndicator size="large" color="#D93036"/>
                <Text>
                  Carregando doações...
                </Text>
              </View>
          )}

          {!loading && errorMsg !== "" && (
            <Text style={{fontSize: 20, alignSelf: "center"}}>
              {errorMsg}
            </Text>
          )}

          {!loading && errorMsg === ""  && donationCards.length === 0 && (
            <Text style={{fontSize: 20, alignSelf: "center"}}>
              Nenhuma doação encontrada
            </Text>
          )}

          {!loading && errorMsg === "" && donationCards.length > 0 &&(
            <>
            <PendingDonationCard
            title="Pedidos pendentes"
            iconName={"clock"}
            image="tree"
            dataCard={pendingDonations}
            />

            <PendingDonationCard
            title="Pedidos Finalizados"
            iconName={"heart"}
            image="trunk"
            dataCard={disable}
            />

            <PendingDonationCard
            title="Suas doações pendentes"
            iconName={"clock"}
            image="trunk"
            dataCard={pendingDonations}
            />

          <PendingDonationCard
            title="Suas doações Finalizadas"
            iconName={"heart"}
            image="trunk"
            dataCard={disable}
            />
             
            </>
          )}
          
          

       
            

           
          {/* </View> */}
          </ScrollView>
      </ImageBackground>
        
    </>
  );
}

export default FavoriteScreen;