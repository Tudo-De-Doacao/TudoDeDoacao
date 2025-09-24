import React, { useRef, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, Animated, Pressable, Dimensions } from 'react-native';

import styles from '../styles/index';
import typog from '../styles/type';
const { width } = Dimensions.get('window');

export default function Drawer({route}) {
  const slideAnim = useRef(new Animated.Value(width)).current;
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      slideAnim.setValue(width);

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [slideAnim])
  );

const [hoverOn, setHoverOn] = useState(false);
  return (
    <View style={styles.containerDrw}>
      <Animated.View
        style={[styles.drw, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.drwCont}>
          <Text style={typog.drwTitle}> Menu </Text>
              <View style={styles.separatorMenu} />
          <Pressable 
          onPress={() => {console.log("Navegando para:", route);
          navigation.navigate('Home')}}
          onHoverOut = {() => setHoverOn(false)}
          onHoverIn = {() =>setHoverOn(true)}
          style={ hoverOn  ? { ...styles.separatorHome, borderBottomWidth: 3 }
    : { ...styles.separatorHome }}>

            <Text style={typog.txtDrw}> Home </Text>

          </Pressable>
           
          <Pressable 
          onPress={() =>{ console.log("Navegando para:", route);
<<<<<<< HEAD
          navigation.navigate('Pesquisar')}}
=======
          navigation.navigate('Search')}}
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
          onHoverOut = {() => setHoverOn(false)}
          onHoverIn = {() =>setHoverOn(true)}
          style={ hoverOn  ? { ...styles.separatorSearch, borderBottomWidth: 3 }
    : { ...styles.separatorSearch }}>

            <Text style={typog.txtDrw}> Pesquisa </Text>

          </Pressable>
          <Pressable onPress={() => {
            console.log("Navegando para:", route);
<<<<<<< HEAD
            navigation.navigate('Doação')}}
=======
            navigation.navigate('Donation')}}
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
          onHoverOut = {() => setHoverOn(false)}
          onHoverIn = {() =>setHoverOn(true)}
          style={ hoverOn  ? { ...styles.separatorDonate, borderBottomWidth: 3 }
    : { ...styles.separatorDonate }}>

<<<<<<< HEAD
            <Text style={typog.txtDrw}> Doação </Text>
=======
            <Text style={typog.txtDrw}> Donation </Text>
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469

          </Pressable>
          <Pressable onPress={() => {
            console.log("Navegando para:", route);
<<<<<<< HEAD
           navigation.navigate('Favoritos')}}
=======
           navigation.navigate('Favorites')}}
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
          onHoverOut = {() => setHoverOn(false)}
          onHoverIn = {() =>setHoverOn(true)}
          style={ hoverOn  ? { ...styles.separatorFavorite, borderBottomWidth: 3 }
    : { ...styles.separatorFavorite }}>

<<<<<<< HEAD
            <Text style={typog.txtDrw}> Favoritos </Text>
=======
            <Text style={typog.txtDrw}> Favorites </Text>
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}
