<<<<<<< HEAD


=======
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
import { Text, View, Image, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

<<<<<<< HEAD
export default function Card({name, location, description, image}) {

const navigation = useNavigation();

    const handlePress = () => {
=======
export default function Card({ name, location, description, image }) {
  const navigation = useNavigation();

  const handlePress = () => {
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
    navigation.navigate('Card', {
      name,
      location,
      description,
<<<<<<< HEAD
      image
    });
  };
  
  return (
  <Pressable onPress={handlePress} >
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />

      </View>

        <View style={styles.infoBox}>

        <Text style={typog.titleCard}>{name}</Text>
        <Text style={{...typog.txtCard, marginBottom:6}}>{description}</Text>

          <View style={styles.locationCard}>  

          <Icon name="map-pin" size={18} color= {colors.marker} style={styles.iconMapHeader} />
          <Text style={{...typog.txtCard, fontSize: 16}}>{location}</Text>
          </View>
        </View>
    </View>
  </Pressable>
  );
}


=======
      image,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </View>

        <View style={styles.infoBox}>
          <Text style={typog.titleCard}>{name}</Text>
          <Text
            style={{ ...typog.txtCard, marginBottom: 18 }}
            numberOfLines={4}
            ellipsizeMode="tail">
            {description}
          </Text>

          <View style={styles.locationCard}>
            <Icon
              name="map-pin"
              size={18}
              color={colors.marker}
              style={styles.iconMapHeader}
            />
            <Text style={{ ...typog.txtCard, fontSize: 16 }}>{location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
