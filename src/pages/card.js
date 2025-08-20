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
    <ScrollView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  locationText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 6,
    ...typog.txtCard,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    marginTop: 10,
    ...typog.txtCard,
  },
});
