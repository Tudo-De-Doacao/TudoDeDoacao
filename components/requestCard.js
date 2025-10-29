import Icon from "react-native-vector-icons/Feather";
import {View, Text, Image, Pressable, TouchableOpacity, Platform} from "react-native";
import  Animated, {useSharedValue, useAnimatedStyle, withTiming, runOnJS } from "react-native-reanimated";

import styles from "../styles";
import colors from "../styles/color";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
const isWeb = Platform.OS === 'web';


export default function RequestCard({donateName, userName, userLocal, requestDate, requestImage, onRemove}){
  const translateX = useSharedValue(0);
  const gradientHeight = useSharedValue(0);
  const gradientColor = useSharedValue("");
  const [click, setClick] = useState(false)

  const animatedGradientStyle = useAnimatedStyle(() => {
    return{
       height: `${gradientHeight.value}%`,
       backgroundColor: gradientColor.value,
       borderRadius: 19,
    }
  })

  const animatedCardStyle = useAnimatedStyle(() => {
    return{
        transform: [{translateX: translateX.value}],
    };
  })

  const handleAccept = () => {
    setClick(true);
    gradientColor.value = "rgba(36, 204, 36, 1)";
    gradientHeight.value = withTiming(100, {duration: 500}, () => {
      translateX.value = withTiming (isWeb? 2000 : -30, {duration: 500}, () => {
          translateX.value = withTiming(isWeb? 200 : 2000, {duration: 500}, () => {
            runOnJS(onRemove)();
          })
          });

    });   
    };
  
  const handleDecline = () => {
    setClick(true)
    gradientColor.value = "rgba(216, 41, 41, 1)";
    gradientHeight.value = withTiming (isWeb? 100 : 100, {duration: 500}, () => {
      translateX.value = withTiming (isWeb? -2000 : 30, {duration: 500}, () => {
          translateX.value = withTiming (isWeb? -2000 : -2000, {duration: 500}, () => {
            runOnJS(onRemove)();
          })
      });
    })
  };

  
    return(
      
    <Animated.View style={[styles.requestContainer, animatedCardStyle]}>
      <View style={styles.imageCardRequestContainer}>
        <Image
         style={styles.ImageCardRequest}
         source={{
         uri: requestImage,
        }}
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
        disabled={click}
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
        disabled={click}
        >
            <Icon
            name={"check"}
            size={30}
            color={colors.border}
            />
            <Text> Aceitar</Text>
        </TouchableOpacity> 
      </View>

      <Animated.View style={[
        {  
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
        animatedGradientStyle
      ]}>
        <LinearGradient
            colors={["hsla(0, 0%, 100%, 0.00)", "rgba(36, 204, 36, 0)"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={{
              borderRadius: 19,
              flex: 1,
              
            }}
          > 
          <Text> Seilá</Text>
          </LinearGradient>
      </Animated.View>
    
    </Animated.View>
    
  )
};

