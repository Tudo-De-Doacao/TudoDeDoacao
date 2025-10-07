import react from "react"
import { View, Text, Image, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Card from "./CardDon";

import styles from "../styles";
import colors from "../styles/color";
import typog from "../styles/type";

export default function PendingDonationCard({title, content, iconName, image}){
  const images = {
  tree: require("../assets/treebranch.png"),
  trunk: require("../assets/trunk.png")
  }
    return(
         <View style={styles.donationFavContainer}>

              <View style={styles.titleFavContainer}>
                <Image
                source={images[image]}
                // style={styles.imageTreeBranch}
                style={[image === "tree"? styles.imageTreeBranch: styles.imageTrunk]}
                resizeMode="stretch"
                /> 
                
                  <View style={styles.iconTextContainer}>
                    <Icon
                      name={iconName}
                      size={30}
                      color="#D93036"
                      style={styles.iconDonationFav}
                    />

                    <View style={styles.favoriteTextContainer}>
                      <Text style={{fontSize: 27,  fontFamily: 'DGrotesque-SemiBold'}}> {title} </Text>
                    </View>

                    {/* <Image
                    source={require("../assets/arrowheart.png")}
                    style={{width: "50%", height: "60%", position: "absolute", top: "50%"}}
                    resizeMode="stretch"

                    /> */}
    
                  </View>

                
              </View>


              <View style={{backgroundColor:colors.background, width: "100%", height: "80%", flexDirection: "row"}}>
                <ScrollView
                showsVerticalScrollIndicator={true}
                

                >
                  <Card
                  name={"bola"}
                  location={"São Paulo"}
                  description={"bola do meu filho que usavamos, Ele cresceu e não precisa mais. Buscando alguma criança que realmente"}
                  ></Card>
                   
                </ScrollView>
              </View>

            </View>
    )
}
