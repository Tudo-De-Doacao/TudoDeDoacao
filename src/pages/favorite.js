import {
  ScrollView,
  View,
  ImageBackground,
  ActivityIndicator,
  Text,
  RefreshControl
} from 'react-native';
import { useEffect, useState, useCallback } from 'react';

import Header from '../../components/Header';
import PendingDonationCard from '../../components/pendingDonationCard';

import styles from '../../styles/index';
import colors from '../../styles/color';

import {
  getUserDonations,
  getUserPendingDonations,
  getAcceptedDonations,
  getUserAcceptedRequests
} from '../../services/api/getUserDonations';
import FloatingButton from '../../components/FloatingButton';

function FavoriteScreen() {
  const [myDonations, setMyDonations] = useState([]);
  const [finishedDonations, setFinishedDonations] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchAllData = async (isRefreshing = false) => {
    if (!isRefreshing) setLoading(true);
    setErrorMsg('');

    try {
      const [
        myDonationsData,
        acceptedData,
        requestsData
      ] = await Promise.all([
        getUserDonations(),
        getUserPendingDonations(),
        getAcceptedDonations(),
        getUserAcceptedRequests()
      ]);

      console.log('📊 Dados carregados:');
      console.log('- Minhas doações:', myDonationsData.length);
      console.log('- Finalizadas:', acceptedData.length);
      console.log('- Pedidos aceitos:', requestsData.length);

      setMyDonations(myDonationsData);
      setFinishedDonations(acceptedData);
      setAcceptedRequests(requestsData);

    } catch (error) {
      console.error('❌ Erro ao carregar dados:', error);
      setErrorMsg('Erro ao carregar suas doações');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Carrega dados ao montar o componente
  useEffect(() => {
    fetchAllData();
  }, []);

  // Pull to refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAllData(true);
  }, []);

  // Renderiza loading inicial
  if (loading) {
    return (
      <>
        <Header />
        <ImageBackground
          source={require('../../assets/BGHome.png')}
          style={styles.bgimagem}
          resizeMode="stretch"
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#D93036" />
            <Text style={{ marginTop: 16, color: colors.marker, fontSize: 16 }}>
              Carregando suas doações...
            </Text>
          </View>
        </ImageBackground>
      </>
    );
  }

  // Renderiza erro
  if (errorMsg) {
    return (
      <>
        <Header />
        <ImageBackground
          source={require('../../assets/BGHome.png')}
          style={styles.bgimagem}
          resizeMode="stretch"
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 18, color: '#D93036', textAlign: 'center' }}>
              {errorMsg}
            </Text>
            <Text
              style={{ marginTop: 16, color: colors.marker, textDecorationLine: 'underline' }}
              onPress={() => fetchAllData()}
            >
              Tentar novamente
            </Text>
          </View>
        </ImageBackground>
      </>
    );
  }

  // Verifica se tem algum dado
  const hasAnyData = 
    myDonations.length > 0 ||
    pendingDonations.length > 0 ||
    finishedDonations.length > 0 ||
    acceptedRequests.length > 0;

  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="stretch"
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#D93036']}
              tintColor="#D93036"
            />
          }
        >
          {!hasAnyData ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, marginTop: 100 }}>
              <Text style={{ fontSize: 18, color: colors.marker, textAlign: 'center' }}>
                Você ainda não tem doações cadastradas
              </Text>
              <Text style={{ marginTop: 8, color: '#666', textAlign: 'center' }}>
                Cadastre sua primeira doação para ajudar quem precisa!
              </Text>
            </View>
          ) : (
            <>
              {/* Minhas Doações */}
              <PendingDonationCard
                title="Minhas Doações"
                iconName="gift"
                dataCard={myDonations}
              />

              {/* Pedidos Finalizados (que você recebeu) */}
              <PendingDonationCard
                title="Pedidos Finalizados"
                iconName="check-circle"
                dataCard={acceptedRequests}
              />

              {/* Doações Finalizadas (geral ou suas que foram aceitas) */}
              <PendingDonationCard
                title="Doações Finalizadas"
                iconName="heart"
                dataCard={finishedDonations}
              />
            </>
          )}
        </ScrollView>
        <FloatingButton onPress={() => navigation.navigate('Chat')} />      
      </ImageBackground>
    </>
  );
}

export default FavoriteScreen;