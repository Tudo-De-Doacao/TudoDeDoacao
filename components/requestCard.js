import Icon from "react-native-vector-icons/Feather";
import {View, Text, Image, Pressable, TouchableOpacity, Platform} from "react-native";
import  Animated, {useSharedValue, useAnimatedStyle, withTiming, runOnJS } from "react-native-reanimated";

import styles from "../styles";
import colors from "../styles/color";
const isWeb = Platform.OS === 'web';


export default function RequestCard({donateName, userName, userLocal, requestDate, requestImage, onRemove}){
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return{
        transform: [{translateX: translateX.value}],
        opacity: opacity.value,
    }
  })

  const handleAccept = () => {
    translateX.value = withTiming (isWeb? 2000 : 2000, {duration: 500}, () => {
        opacity.value = withTiming(0, { duration: 100}, () => {
            runOnJS(onRemove)();
        });
    });
  };

  
  const handleDecline = () => {
    translateX.value = withTiming (isWeb? -2000 : -2000, {duration: 500}, () => {
        opacity.value = withTiming(0, { duration: 100}, () => {
            runOnJS(onRemove)();
        });
    });
  };

  
    return(
    <Animated.View style={[styles.requestContainer, animatedStyle]}>
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
        
        <TouchableOpacity 
        style={styles.acceptButton}
        activeOpacity={0.4}
        onPress={handleDecline}
        >
            <Icon
            name={"trash-2"}
            size={30}
            color={colors.border}
            />
            <Text> Recusar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.declineButton}
        activeOpacity={0.4}
        onPress={handleAccept}
        >
            <Icon
            name={"check"}
            size={30}
            color={colors.border}
            />
            <Text> Aceitar</Text>
        </TouchableOpacity>
       
      </View>
    </Animated.View>
  )
};

