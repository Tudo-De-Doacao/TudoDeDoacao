import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import TabDonation from '../../components/TabDonation'
import colors from '../../styles/color';
import typog from '../../styles/type';

export default function CardScreen() {
  const route = useRoute();
  const { name, location, description, image } = route.params;

  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.scroll,
        backgroundColor: colors.background,
        height: '100%',
      }}> 
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={typog.titleCard}>{name}</Text>

        <View style={styles.locationBox}>
          <Icon name="map-pin" size={20} color={colors.marker} />
          <Text style={styles.locationText}>{location}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
    <TabDonation/>
    </>
  );
}
