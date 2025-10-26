import { ImageBackground, Text, View , Image} from "react-native";

import styles from "../styles";

export default function RequestCard({donateName, userName, userLocal, requestDate, requestImage}){
  return(
    <View style={styles.requestContainer}>
      <View style={styles.imageCardRequestContainer}>
        <Image
         style={styles.ImageCardRequest}
         source={require("../assets/tenis.png")}
        //  source={{
        //  uri: requestImage,
        // }}
        />
      </View>

      <View style={styles.dataContainerDonate}> 
        <View style={styles.donationNameContainer}>
            <Text style={styles.donationNameText}>
                {donateName}
            </Text>
        </View>

        <View style={styles.requestUserContainer}>
            <Text style={styles.requestUserText}>
                {userName}
            </Text>
        </View>

        <View style={styles.requestLocalContainer}>
            <Text style={styles.requestLocalText}>
                {userLocal}
            </Text>
        </View>
        
        <View style={styles.requestDateContainer}>
            <Text style={styles.requestDateText}>
                {requestDate}
            </Text>
        </View>
      </View>

      <View style={styles.containerButtons}>
        <View style={styles.acceptButton}>
            <Text> asfasd</Text>
        </View>

        <View style={styles.declineButton}>
            <Text> sadsd</Text>
        </View>
      </View>
    </View>
  )
};

