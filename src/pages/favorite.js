import {ScrollView, View, Text, ImageBackground,} from 'react-native';


import styles from '../../styles/index'

function FavoriteScreen() {
return (
   <ImageBackground
          source={require('../../assets/BGHome.png')}
          style={styles.bgimagem}
          resizeMode = "cover"
        >
 <ScrollView contentContainerStyle={styles.scroll}>
 <View style={styles.bodyPrin}>
<Text> 
Fav
</Text>
</View>
</ScrollView>
</ImageBackground>
);
}

export default FavoriteScreen;
