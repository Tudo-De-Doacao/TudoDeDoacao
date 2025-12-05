import { Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

export default function Card({ 
  id,
  name, 
  location, 
  description, 
  image, 
  status,
  created_at,
  user_id,
  category 
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log('🔍 Navegando para Card com dados:', {
      id,
      name,
      location,
      description,
      image,
      status,
      date: created_at,
      userId: user_id,
      category
    });

    navigation.navigate('Card', {
      id,
      name,
      location,
      description,
      image,
      status,
      date: created_at,
      userId: user_id,
      category
    });
  };

  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return { color: '#FFA500', icon: 'clock', text: 'Pendente' };
      case 'accepted':
        return { color: '#4CAF50', icon: 'check-circle', text: 'Aceito' };
      case 'rejected':
        return { color: '#F44336', icon: 'x-circle', text: 'Rejeitado' };
      case 'disable':
        return { color: '#9E9E9E', icon: 'slash', text: 'Desativado' };
      default:
        return null;
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <View style={styles.card}>
      <Pressable onPress={handlePress}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="cover"
          />
          
          {/* Badge de Status */}
          {statusConfig && (
            <View
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: statusConfig.color,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 12,
              }}
            >
              <Icon name={statusConfig.icon} size={12} color="#FFF" />
              <Text style={{ 
                color: '#FFF', 
                fontSize: 10, 
                marginLeft: 4, 
                fontWeight: 'bold' 
              }}>
                {statusConfig.text}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.infoBox}>
          <Text style={typog.titleCard} numberOfLines={1}>
            {name}
          </Text>
          
          <Text
            style={{ 
              ...typog.txtCard, 
              marginBottom: 18, 
              marginHorizontal: 4 
            }}
            numberOfLines={4}
            ellipsizeMode="tail"
          >
            {description}
          </Text>

          <View style={styles.locationCard}>
            <Icon
              name="map-pin"
              size={18}
              color={colors.marker}
              style={styles.iconMapHeader}
            />
            <Text style={{ ...typog.txtCard, fontSize: 16 }}>
              {location}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}