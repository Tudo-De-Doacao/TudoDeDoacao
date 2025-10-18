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

  // const donations = [ {
  //   id: 1,
  //   name: "Bola de Futebol",
  //   location: "São Paulo - SP",
  //   description: "Bola usada em boas condições, ideal para treinos infantis.",
  //   image: "bola.jpg",
  //   status: "pending",
  // },
  // {
  //   id: 2,
  //   name: "Carrinho de Brinquedo",
  //   location: "Rio de Janeiro - RJ",
  //   description: "Carrinho elétrico em ótimo estado, funcionando perfeitamente.",
  //   image: "carrinho.jpg",
  //   status: "disable",
  // },
  // {
  //   id: 3,
  //   name: "Roupa Infantil",
  //   location: "Belo Horizonte - MG",
  //   description: "Conjunto infantil tamanho 6, usado poucas vezes.",
  //   image: "roupa.jpg",
  //   status: "pending",
  // },
  // {
  //   id: 4,
  //   name: "Cesta Básica",
  //   location: "Curitiba - PR",
  //   description: "Cesta com alimentos não perecíveis para doação imediata.",
  //   image: "cesta.jpg",
  //   status: "disable",
  // },
  // {
  //   id: 5,
  //   name: "Tênis Infantil",
  //   location: "Salvador - BA",
  //   description: "Par de tênis tamanho 33, quase novo.",
  //   image: "tenis.jpg",
  //   status: "pending",
  // }]

  const pendingDonations = donationCards.filter(item => item.status === "pending");
  const active = donationCards.filter(item => item.status === "active");
  const disable = donationCards.filter(item => item.status === "disable");
 

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