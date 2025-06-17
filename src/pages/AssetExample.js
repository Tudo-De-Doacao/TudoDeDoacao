import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import AssetExample from '../src/pages/AssetExample';

export default function Card() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Doações dentro da sua área:</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <AssetExample />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0B8',
    paddingTop: 50,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
