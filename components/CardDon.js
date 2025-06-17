import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

export default function CardDon({
  title,
  location,
  description,
  image,
  doador,
  contato,
  expandido = false,
  onAccept,
  onBack,
}) {
  return (
   <View style={[expandido ? styles.cardExpandido : styles.card]}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        <Text style={styles.imageText}>*CARDS*</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={typog.titleCard}>{title}</Text>

        {expandido && (
          <>
            <Text style={{ ...typog.txtCard, marginBottom: 6 }}>{description}</Text>
            <Text style={{ ...typog.txtCard, color: colors.active }}>Doador: {doador}</Text>

            <View style={styles.locationCard}>
              <Icon name="map-pin" size={18} color={colors.active} />
              <Text style={{ ...typog.txtCard, color: colors.active }}> {location}</Text>
            </View>
            <View style={styles.locationCard}>
              <Icon name="phone" size={18} color={colors.active} />
              <Text style={{ ...typog.txtCard, color: colors.active }}> {contato}</Text>
            </View>
          </>
        )}

        {!expandido && (
          <View style={styles.locationCard}>
            <Icon name="map-pin" size={18} color={colors.marker} style={styles.iconMapHeader} />
            <Text style={{ ...typog.txtCard, fontSize: 16 }}>{location}</Text>
          </View>
        )}
      </View>

      {expandido && (
        <>
          <View style={styles.botaoLinha}>
  <TouchableOpacity style={styles.botaoPrincipal} onPress={onAccept}>
    <Text style={styles.botaoTextoBranco}>Aceitar Doação</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.botaoSecundario} onPress={onBack}>
    <Text style={styles.botaoTextoEscuro}>Voltar</Text>
  </TouchableOpacity>
</View>

        </>
      )}
    </View>
  );
}

