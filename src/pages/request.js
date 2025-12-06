import { ImageBackground, Text, View, ActivityIndicator, RefreshControl, ScrollView} from "react-native";

import styles from "../../styles";
import Header from "../../components/Header";
import RequestList from "../../components/requestList";
import { getReceivedPendingDonations } from "../data/pendingDonations";
import { useEffect, useState, useCallback } from "react";
import FloatingButton from "../../components/FloatingButton";

function RequestScreen(){
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData(isRefreshing = false){
    if (!isRefreshing) setLoad(true);
    setErrorMsg("");

    try{
      const pendingData = await getReceivedPendingDonations();
      console.log('📊 Pedidos recebidos:', pendingData);
      setData(pendingData);
    }
    catch(e){
      console.error("Erro ao carregar pedidos:", e.response?.data || e.message);
      setErrorMsg("Erro ao carregar pedidos");
    }finally{
      setLoad(false);
      setRefreshing(false);
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData(true);
  }, []);

  // Callback para quando um pedido for aceito/recusado
  const handleRequestUpdated = () => {
    loadData(true);
  };

  return(
    <View style={{flex: 1, paddingBottom: 80}}>
      <Header/>
      
      <ImageBackground
        source={require("../../assets/BGHome.png")}
        style={[styles.bgimagem]}
        resizeMode="stretch"
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#D93036']}
              tintColor="#D93036"
            />
          }
        >
          {load && (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#D93036"/>
              <Text style={{ marginTop: 16, fontSize: 16, color: '#666' }}>
                Carregando pedidos...
              </Text>
            </View>
          )}

          {!load && errorMsg !== "" &&(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
              <Text style={{fontSize: 18, color: '#D93036', textAlign: 'center'}}>
                {errorMsg}
              </Text>
              <Text
                style={{ marginTop: 16, color: '#666', textDecorationLine: 'underline' }}
                onPress={() => loadData()}
              >
                Tentar novamente
              </Text>
            </View>
          )}

          {!load && errorMsg === "" && data.length === 0 && (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 }}>
              <Text style={{fontSize: 18, color: '#666', textAlign: 'center'}}>
                Nenhum pedido pendente
              </Text>
              <Text style={{ marginTop: 8, color: '#999', textAlign: 'center' }}>
                Quando alguém solicitar suas doações, elas aparecerão aqui
              </Text>
            </View>
          )}

          {!load && errorMsg === "" && data.length > 0 && (
            <RequestList
              dataCard={data}
              onRequestUpdated={handleRequestUpdated}
            />
          )}
        </ScrollView>
        <FloatingButton onPress={() => navigation.navigate('Chat')} />      
      </ImageBackground>
    </View>
  )
};

export default RequestScreen;