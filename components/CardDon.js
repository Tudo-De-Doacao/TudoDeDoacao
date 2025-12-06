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
        return { color: '#9E9E9E', icon: 'slash', text: 'Finalizado' };
      case 'active':
        return { color: '#2196F3', icon: 'gift', text: 'Disponível' };
      default:
        return null;
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <Pressable 
      onPress={handlePress}
      style={({ pressed }) => [
        styles.card,
        {
          transform: [{ scale: pressed ? 0.98 : 1 }],
          opacity: pressed ? 0.9 : 1,
        }
      ]}
    >
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
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Icon name={statusConfig.icon} size={14} color="#FFF" />
            <Text style={{ 
              color: '#FFF', 
              fontSize: 11, 
              marginLeft: 5, 
              fontWeight: 'bold' 
            }}>
              {statusConfig.text}
            </Text>
          </View>
        )}

        {/* Categoria Badge */}
        {category && (
          <View
            style={{
              position: 'absolute',
              bottom: 8,
              left: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 12,
            }}
          >
            <Text style={{ 
              color: '#FFF', 
              fontSize: 11, 
              fontWeight: '600' 
            }}>
              {category}
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
            marginBottom: 12, 
            marginHorizontal: 4,
            color: '#666',
            lineHeight: 20
          }}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {description}
        </Text>

        <View style={styles.locationCard}>
          <Icon
            name="map-pin"
            size={16}
            color={colors.marker}
            style={styles.iconMapHeader}
          />
          <Text 
            style={{ ...typog.txtCard, fontSize: 14, flex: 1 }}
            numberOfLines={1}
          >
            {location}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}