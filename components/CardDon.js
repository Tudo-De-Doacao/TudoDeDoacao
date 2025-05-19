

import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

export default function Card({title, location, description, image}) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />
        <Text style={styles.imageText}>*CARDS*</Text>
      </View>

        <View style={styles.infoBox}>

        <Text style={typog.titleCard}>{title}</Text>
        <Text style={typog.txtCard}>{description}</Text>

          <View style={styles.locationCard}>  

          <Icon name="map-pin" size={18} color= {colors.marker} style={styles.iconMapHeader} />
          <Text style={{...typog.txtCard, fontSize: 16}}>{location}</Text>
          </View>
        </View>
    </View>
  );
}


