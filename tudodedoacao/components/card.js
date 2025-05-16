



import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function AssetExample() {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        {/* Imagem fictícia / exemplo */}
        <Image
          style={styles.image}
          source={{
            uri: 'https://via.placeholder.com/150', // Substitua pela imagem real
          }}
        />
        <Text style={styles.imageText}>*CARDS*</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.title}>NOME DA DOAÇÃO</Text>
        <Text style={styles.description}>Desc curta breve...</Text>

        <View style={styles.locationBox}>
          <Entypo name="location-pin" size={16} color="#492700" />
          <Text style={styles.locationText}>São Bernardo do...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 16,
    backgroundColor: '#FDEEDA',
    borderWidth: 2,
    borderColor: '#492700',
    overflow: 'hidden',
    marginVertical: 10,
  },
  imageBox: {
    backgroundColor: '#A97E76',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.1,
  },
  imageText: {
    color: '#492700',
    fontWeight: 'bold',
  },
  infoBox: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    marginBottom: 6,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    marginLeft: 4,
  },
});
