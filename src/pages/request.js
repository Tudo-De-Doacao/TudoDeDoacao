import { ImageBackground, Text, View } from "react-native";

import styles from "../../styles";
import Header from "../../components/Header";
import RequestList from "../../components/requestList";


function requestScreeen(){
  return(
    <View>
      <Header/>
      
      <ImageBackground
        source={require("../../assets/BGHome.png")}
        style={[styles.bgimagem]}
        resizeMode="stretch"
      >
      
      <RequestList/>

      </ImageBackground>
    </View>
  )
};

export default requestScreeen;