import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  Pressable,
  Alert,
  ActivityIndicator 
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../../styles/color';
import typog from '../../styles/type';
import styles from '../../styles/index';

import { getUserId } from '../data/getUser';
import { requestDonation } from '../data/pendingDonations';

export default function CardScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [requesting, setRequesting] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [hasRequested, setHasRequested] = useState(false);

  const { 
    id,
    name, 
    image, 
    location, 
    description, 
    date,
    status,
    userId,
    category 
  } = route.params || {};

  useEffect(() => {
    loadCurrentUser();
  }, []);

  const loadCurrentUser = async () => {
    const uid = await getUserId();
    setCurrentUserId(uid);
  };

  // Formata a data
  const formattedDate = date
    ? new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : "Data não informada";

  // Formata o status
  const getStatusInfo = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return { 
          color: '#FFA500', 
          icon: 'clock', 
          text: 'Aguardando aprovação',
          bgColor: '#FFF3E0' 
        };
      case 'accepted':
      case 'disable':
        return { 
          color: '#4CAF50', 
          icon: 'check-circle', 
          text: 'Doação finalizada',
          bgColor: '#E8F5E9' 
        };
      case 'rejected':
        return { 
          color: '#F44336', 
          icon: 'x-circle', 
          text: 'Doação rejeitada',
          bgColor: '#FFEBEE' 
        };
      case 'active':
        return { 
          color: '#2196F3', 
          icon: 'gift', 
          text: 'Disponível',
          bgColor: '#E3F2FD' 
        };
      default:
        return null;
    }
  };

  const statusInfo = getStatusInfo(status);

  // Verifica se pode solicitar
  const canRequest = () => {
    // Não pode solicitar se:
    // - Não está logado
    if (!currentUserId) return false;
    // - É o próprio doador
    if (userId?.toString() === currentUserId) return false;
    // - Já foi aceita/finalizada
    if (status === 'accepted' || status === 'disable') return false;
    // - Já está pendente (já solicitou)
    if (status === 'pending' || hasRequested) return false;
    
    return true;
  };

  // Função para solicitar doação
  const handleRequestDonation = async () => {
    if (!currentUserId) {
      Alert.alert('Erro', 'Você precisa estar logado para solicitar doações');
      return;
    }

    if (userId?.toString() === currentUserId) {
      Alert.alert('Aviso', 'Você não pode solicitar sua própria doação');
      return;
    }

    Alert.alert(
      'Solicitar Doação',
      `Deseja solicitar a doação "${name}"?\n\nO doador receberá sua solicitação e poderá aceitá-la ou recusá-la.`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Solicitar',
          onPress: async () => {
            setRequesting(true);
            try {
              const result = await requestDonation(id);
              
              if (result) {
                setHasRequested(true);
                Alert.alert(
                  'Sucesso!', 
                  'Sua solicitação foi enviada! Aguarde a resposta do doador.',
                  [
                    {
                      text: 'OK',
                      onPress: () => navigation.goBack()
                    }
                  ]
                );
              }
            } catch (error) {
              console.error('Erro ao solicitar:', error);
            } finally {
              setRequesting(false);
            }
          }
        }
      ]
    );
  };

  const handleChat = () => {
    if (!userId) {
      Alert.alert('Erro', 'Informações do doador não disponíveis');
      return;
    }

    navigation.navigate('Chat', {
      recipientId: userId,
      recipientName: `Doador de ${name}`
    });
  };

  // Texto e estado do botão
  const getButtonConfig = () => {
    if (status === 'accepted' || status === 'disable') {
      return {
        text: 'Doação Finalizada',
        disabled: true,
        backgroundColor: '#CCC'
      };
    }
    
    if (status === 'pending' || hasRequested) {
      return {
        text: 'Aguardando Aprovação',
        disabled: true,
        backgroundColor: '#FFA500'
      };
    }

    if (userId?.toString() === currentUserId) {
      return {
        text: 'Sua Doação',
        disabled: true,
        backgroundColor: '#999'
      };
    }

    return {
      text: 'Solicitar Doação',
      disabled: false,
      backgroundColor: '#D93036'
    };
  };

  const buttonConfig = getButtonConfig();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: colors.background,
          paddingBottom: 100
        }}
      >
        {/* Header com botão voltar */}
        <View
          style={{
            position: 'absolute',
            top: 60,
            left: 16,
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 25,
            padding: 8,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color={colors.marker} />
          </Pressable>
        </View>

        {/* Imagem principal */}
        <Image 
          source={{ uri: image }} 
          style={{
            width: '100%',
            height: 300,
            backgroundColor: '#FFE0E0'
          }}
          resizeMode="cover"
        />

        {/* Conteúdo */}
        <View style={{ padding: 20 }}>
          
          {/* Status Badge */}
          {statusInfo && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: statusInfo.bgColor,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
                alignSelf: 'flex-start',
                marginBottom: 16,
              }}
            >
              <Icon name={statusInfo.icon} size={16} color={statusInfo.color} />
              <Text
                style={{
                  color: statusInfo.color,
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 6,
                }}
              >
                {statusInfo.text}
              </Text>
            </View>
          )}

          {/* Categoria */}
          {category && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Icon name="tag" size={16} color="#999" />
              <Text style={{ color: '#999', fontSize: 14, marginLeft: 6 }}>
                {category}
              </Text>
            </View>
          )}

          {/* Data */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <Icon name="calendar" size={16} color="#999" />
            <Text
              style={{
                ...typog.txtNavBtn,
                color: '#999',
                fontSize: 14,
                marginLeft: 6,
              }}
            >
              {formattedDate}
            </Text>
          </View>

          {/* Nome */}
          <Text style={{ ...typog.titleCard, fontSize: 28, marginBottom: 12 }}>
            {name}
          </Text>

          {/* Localização */}
          <View style={{ 
            ...styles.locationCard, 
            marginBottom: 20,
            backgroundColor: '#FFE0E0',
            padding: 12,
            borderRadius: 12
          }}>
            <Icon name="map-pin" size={20} color={colors.primary} />
            <Text style={{ 
              ...styles.locationText, 
              fontSize: 16,
              marginLeft: 8,
              color: colors.marker 
            }}>
              {location}
            </Text>
          </View>

          {/* Descrição */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ ...typog.txtDrw, fontSize: 18, marginBottom: 8 }}>
              Descrição
            </Text>
            <Text style={{ 
              ...styles.description,
              fontSize: 16,
              lineHeight: 24,
              color: '#666'
            }}>
              {description}
            </Text>
          </View>

          {/* Botões de ação */}
          <View style={{ gap: 12 }}>
            {/* Botão Solicitar */}
            <Pressable
              onPress={handleRequestDonation}
              disabled={buttonConfig.disabled || requesting}
              style={{
                backgroundColor: buttonConfig.backgroundColor,
                padding: 16,
                borderRadius: 25,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: buttonConfig.disabled ? 0.7 : 1
              }}
            >
              {requesting ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <>
                  <Icon 
                    name={
                      status === 'accepted' || status === 'disable' ? 'check-circle' :
                      status === 'pending' || hasRequested ? 'clock' :
                      userId?.toString() === currentUserId ? 'user' :
                      'gift'
                    } 
                    size={20} 
                    color="#FFF" 
                  />
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginLeft: 8,
                    }}
                  >
                    {buttonConfig.text}
                  </Text>
                </>
              )}
            </Pressable>

          </View>
        </View>
      </ScrollView>
    </>
  );
}