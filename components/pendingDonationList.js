import react from "react"
import { View, Text, Image, ScrollView, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Card from "./CardDon";

import styles from "../styles";
import colors from "../styles/color";
import typog from "../styles/type";

export default function PendingDonationList({title, content, iconName, image, dataCard}){
  const images = {
  tree: require("../assets/treebranch.png"),
  trunk: require("../assets/trunk.png")
  }

  
    return(
         <View style={styles.donationFavContainer}>

           {/* Cabeçalho do card*/}
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
                      // style={styles.iconDonationFav}
                      style={iconName === "heart"? styles.heartIconStyle : iconName === "clock" ?  styles.clockIconStyle : null}
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
                      
              {/* Corpo do card*/}
            <View style={{backgroundColor:colors.background, width: "100%", height: "80%", borderWidth: 1}}>
                
              <FlatList
              data={dataCard}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <Card
                name={item.name}
                location={item.location}
                description={item.description}
                image={item.image}
                />
              )}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 16, alignItems: "center", gap: 20, marginTop: 15, marginBottom: 15}}
              showsHorizontalScrollIndicator={false}
              />
                 
    
            </View>

            </View>
    )
}
