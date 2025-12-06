import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';
import colors from '../styles/color';

export default function RequestCard({ 
  donateName, 
  userName, 
  userLocal, 
  requestImage, 
  onRecuse, 
  onAccept 
}) {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        marginVertical: 8,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      {/* Header com imagem da doação */}
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <Image
          source={{ uri: requestImage }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 12,
            backgroundColor: '#FFE0E0',
          }}
          resizeMode="cover"
        />
        
        <View style={{ flex: 1, marginLeft: 12, justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#351313',
              marginBottom: 4,
            }}
            numberOfLines={2}
          >
            {donateName}
          </Text>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
            <Icon name="map-pin" size={14} color="#999" />
            <Text
              style={{
                fontSize: 13,
                color: '#666',
                marginLeft: 4,
              }}
              numberOfLines={1}
            >
              {userLocal}
            </Text>
          </View>
        </View>
      </View>

      {/* Informações do solicitante */}
      <View
        style={{
          backgroundColor: '#FFE0E0',
          padding: 12,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: '#FFB8B8',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            <Icon name="user" size={18} color="#D93036" />
          </View>
          
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, color: '#999', marginBottom: 2 }}>
              Solicitado por:
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: '600', color: '#351313' }}
              numberOfLines={1}
            >
              {userName}
            </Text>
          </View>
        </View>
      </View>

      {/* Botões de ação */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {/* Botão Recusar */}
        <Pressable
          onPress={onRecuse}
          style={({ pressed }) => ({
            flex: 1,
            backgroundColor: pressed ? '#F5F5F5' : '#FFF',
            borderWidth: 2,
            borderColor: '#F44336',
            padding: 12,
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Icon name="x" size={18} color="#F44336" />
          <Text
            style={{
              color: '#F44336',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 6,
            }}
          >
            Recusar
          </Text>
        </Pressable>

        {/* Botão Aceitar */}
        <Pressable
          onPress={onAccept}
          style={({ pressed }) => ({
            flex: 1,
            backgroundColor: pressed ? '#C02830' : '#D93036',
            padding: 12,
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Icon name="check" size={18} color="#FFF" />
          <Text
            style={{
              color: '#FFF',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 6,
            }}
          >
            Aceitar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}