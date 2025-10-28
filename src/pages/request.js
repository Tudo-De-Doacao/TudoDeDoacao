import { ImageBackground, Text, View } from "react-native";

import styles from "../../styles";
import Header from "../../components/Header";
import RequestList from "../../components/requestList";


function RequestScreen(){
  return(
    <View style={{flex: 1, paddingBottom: 80}}>
      <Header/>
      
      <ImageBackground
        source={require("../../assets/BGHome.png")}
        style={[styles.bgimagem]}
        resizeMode="stretch"
      >
      
     <RequestList></RequestList>

      </ImageBackground>
    </View>
  )
};

export default RequestScreen;