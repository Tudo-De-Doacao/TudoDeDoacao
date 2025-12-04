import { Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

export default function CardTemp() {
  return (
    <Pressable onPress={() => console.log('CardTemplate Pressionado')}>
      <View style={styles.card}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://placekitten.com/400/300',
            }}
          />
        </View>

        <View style={styles.infoBox}>
          <Text style={typog.titleCard}>Cadeira de Escritório</Text>
          <Text
            style={{ ...typog.txtCard, marginBottom: 18 }}
            numberOfLines={4}
            ellipsizeMode="tail">
            Cadeira confortável em bom estado, ideal para home office.
             Cadeira confortável em bom estado, ideal para home office.
              Cadeira confortável em bom estado, ideal para home office.

          </Text>

          <View style={styles.locationCard}>
            <Icon
              name="map-pin"
              size={18}
              color={colors.marker}
              style={styles.iconMapHeader}
            />
            <Text style={{ ...typog.txtCard, fontSize: 16 }}>
              São Paulo - SP
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
