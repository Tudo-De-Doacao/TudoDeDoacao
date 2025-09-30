import react from "react"
import { View, Text, Image, ScrollView} from "react-native";
import Icon from "react-native-vector-icons";

import styles from "../styles";
import colors from "../styles/color";
import typog from "../styles/type";

export default function PendingDonationCard({title, content}){
    return(
         <View style={styles.donationFavContainer}>

              <View style={styles.titleFavContainer}>
                <Image
                source={require('../assets/treebranch.png')}
                style={styles.imageTreeBranch}
                resizeMode="stretch"
                /> 
                
                  <View style={styles.iconTextContainer}>
                    <Icon
                      name="heart"
                      size={30}
                      color="#D93036"
                      style={styles.iconDonationFav}
                    />

                    <View style={styles.favoriteTextContainer}>
                      <Text style={{fontSize: 27,  fontFamily: 'DGrotesque-SemiBold'}}> Doações pendentes </Text>
                    </View>

                    {/* <Image
                    source={require("../../assets/arrowheart.png")}
                    style={{width: "50%", height: "60%", position: "absolute", top: "50%"}}
                    resizeMode="stretch"

                    /> */}
    
                  </View>

                
              </View>


              <View style={{backgroundColor:colors.background, width: "100%", height: "80%"}}>
                <Text></Text>
              </View>

            </View>
    )
}
