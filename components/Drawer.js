import React, { useRef, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, Animated, Pressable, Dimensions } from 'react-native';

import styles from '../styles/index';
import typog from '../styles/type';
const { width } = Dimensions.get('window');

export default function Drawer() {
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
          onPress={() => navigation.navigate('Home')}
          onHoverOut = {() => setHoverOn(false)}
          onHoverIn = {() =>setHoverOn(true)}
          style={ hoverOn  ? { ...styles.separatorHome, borderBottomWidth: 3 }
    : { ...styles.separatorHome }}>
            <Text style={typog.txtDrw}> Home </Text>
          </Pressable>
           
          <Pressable 
          onPress={() => navigation.navigate('Search')}
          style={styles.separatorSearch} >
            <Text style={typog.txtDrw}> Pesquisa </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Donate')}
          style={styles.separatorDonate}>
            <Text style={typog.txtDrw}> Doação </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Favorite')}
          style={styles.separatorFavorite}>
            <Text style={typog.txtDrw}> Favoritos </Text>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}
