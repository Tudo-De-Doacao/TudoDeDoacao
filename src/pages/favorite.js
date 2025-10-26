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
import PendingDonationList from '../../components/pendingDonationList';

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

  const pendingDonations = donationCards.filter(item => item.status === "pending");
  const disableDonations = donationCards.filter(item => item.status === "disable");
 

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
            <PendingDonationList
            title="Pedidos pendentes"
            iconName={"clock"}
            image="tree"
            dataCard={pendingDonations}
            />

            <PendingDonationList
            title="Pedidos Finalizados"
            iconName={"heart"}
            image="trunk"
            dataCard={disableDonations}
            />

            <PendingDonationList
            title="Suas doações pendentes"
            iconName={"clock"}
            image="trunk"
            dataCard={pendingDonations}
            />

          <PendingDonationList
            title="Suas doações Finalizadas"
            iconName={"heart"}
            image="trunk"
            dataCard={disableDonations}
            />
             
            </>
          )}
          
          </ScrollView>
      </ImageBackground>
        
    </>
  );
}

export default FavoriteScreen;