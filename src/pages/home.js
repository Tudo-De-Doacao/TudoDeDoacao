import { ScrollView, View, ImageBackground } from 'react-native';

import H1 from '../../components/H1';
import Header from '../../components/Header';

import styles from '../../styles/index';

function HomeScreen() {
  return (
    <>
    <Header/>
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="stretch"
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.bodyPrin}>
          <H1>Login</H1>
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
