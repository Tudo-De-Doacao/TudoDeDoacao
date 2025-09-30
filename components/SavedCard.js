import { Text, View, Image, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

export default function SavedCard({ name, location, description, image }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Card', {
      name,
      location,
      description,
      image,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.savedCard}>
        <View style={styles.imageBoxSavedCard}>
          <Image
            style={styles.imageSavedCard}
            source={{
              uri: image,
            }}
          />
        </View>

        <View style={styles.infoBoxSavedCard}>
          <Text style={typog.nameSavedCard}>{name}</Text>
          <Text
            style={typog.descriptionSavedCard}
            numberOfLines={4}
            ellipsizeMode="tail">
            {description}
          </Text>

          <View style={styles.locationSavedCard}>
            <Icon
              name="map-pin"
              size={18}
              color={colors.marker}
              style={styles.iconMapHeader}
            />
            <Text style={typog.locationTextSavedCard}>{location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
