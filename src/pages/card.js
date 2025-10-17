import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import TabDonation from '../../components/TabDonation'
import Header from '../../components/Header';
import colors from '../../styles/color';
import typog from '../../styles/type';

import styles from '../../styles/index';

export default function CardScreen() {
  const route = useRoute();

  return (
    <>
    <Header/>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.scroll,
        backgroundColor: colors.background,
        height: '100%',
      }}> 
      <Image source={require('../../assets/imagePH.png')} style={{...styles.image, height:'40%'}} />
      <View style={{borderTopWidth: 1, borderColor: colors.marker}}/> 

      <Text style={{...typog.txtNavBtn, textAlign: 'left', paddingVertical: 2, paddingHorizontal: 12}}> 16/10/2025 ás 22:27</Text>
      <View style={{...styles.bodyCard, flexDirection: 'column' }}>
        <Text style={{...typog.titleCard, fontSize: 32}}>Teste do Card</Text>

        <View style={styles.locationCard}>
          <Icon name="map-pin" size={20} color={colors.marker} />
          <Text style={styles.locationText}>São Paulo</Text>
        </View>

        <Text style={styles.description}>Loren Ipsum Indolor Loren Ipsum indolor</Text>
      </View>
    </ScrollView>
    <TabDonation/>
    </>
  );
}
