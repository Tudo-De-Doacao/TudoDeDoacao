import {ScrollView, View, ImageBackground } from 'react-native';


import H1 from '../../components/H1';
import styles from '../../styles/index';


function HomeScreen() {
return (
   <>
   <ImageBackground
          source={require('../../assets/BGHome.png')}
          style={styles.imagem}
          resizeMode = 'cover'
        />
 <ScrollView contentContainerStyle={styles.scroll}>
 <View style={styles.body}>
<H1> 
Login
</H1>
</View>
</ScrollView>
</>
);
}

export default HomeScreen;




