import { ImageBackground, Text, View } from "react-native";

import styles from "../../styles";
import Header from "../../components/Header";
import RequestList from "../../components/requestList";
import { fetchByUserId } from "../data/getRequest";
import { useEffect, useState } from "react";


function RequestScreen(){
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData(){
      const data = await fetchByUserId();
      setData(data);
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
      
     <RequestList
     dataCard={data}
     />

      </ImageBackground>
    </View>
  )
};

export default RequestScreen;