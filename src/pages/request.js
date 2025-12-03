import { ImageBackground, Text, View, ActivityIndicator} from "react-native";

import styles from "../../styles";
import Header from "../../components/Header";
import RequestList from "../../components/requestList";
import { fetchDonationPending } from "../data/donationPendings";
import { useEffect, useState } from "react";


function RequestScreen(){
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function loadData(){
      try{
        const data = await fetchDonationPending();
        setData(data);
      }
      catch(e){
        console.error("Erro ao atualizar doação:", e.response?.data || e.message);
      }finally{
        setLoad(false);
      }
    }
    loadData();
  }, []);

  return(
    <View style={{flex: 1, paddingBottom: 80}}>
      <Header/>
      
      <ImageBackground
        source={require("../../assets/BGHome.png")}
        style={[styles.bgimagem]}
        resizeMode="stretch"
      >
        {load && (
          <View>
              <ActivityIndicator size="large" color="#D93036"/>
              <Text>
                Carregando doações...
              </Text>
          </View>
        )}

        {!load && errorMsg !== "" &&(
          <Text style={{fontSize: 20, alignSelf: "center"}}>
              {errorMsg}
          </Text>
        )}

        {!load && errorMsg === "" && data.length === 0 && (
          <Text style={{fontSize: 20, alignSelf: "center"}}>
              Nenhuma doação encontrada
          </Text>
        )}

        {!load && errorMsg === "" && data.length > 0 && (
           <RequestList
        dataCard={data}/>
        )}

      </ImageBackground>
    </View>
  )
};

export default RequestScreen;