import React, { useRef } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Animated,
  Pressable,
  Dimensions,
} from 'react-native';

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

  return (
    <View style={styles.containerDrw}>
      <Animated.View
        style={[styles.drw, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.drwCont}>
          <Text style={typog.drwTitle}> Menu </Text>
          <View style={styles.drawerSeparator}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Text style={typog.txtDrw}> Home </Text>
          </Pressable>
          </View>
          <View style={styles.drawerSeparator}>
          <Pressable onPress={() => navigation.navigate('Search')}>
            <Text style={typog.txtDrw}> Pesquisar </Text>
          </Pressable>
          </View>
          <View style={styles.drawerSeparator}>
          <Pressable onPress={() => navigation.navigate('Donate')}>
            <Text style={typog.txtDrw}> Doe você mesmo </Text>
          </Pressable>
          </View>
          <View style={styles.drawerSeparator}>
          <Pressable onPress={() => navigation.navigate('Favorite')}>
            <Text style={typog.txtDrw}> Favoritos </Text>
          </Pressable>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
