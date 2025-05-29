import {ScrollView, View, ImageBackground,} from 'react-native';


import H1 from '../../components/H1';
import styles from '../../styles/index'

function FavoriteScreen() {
return (
   <>
   <ImageBackground
          source={require('../../assets/BGHome.png')}
          style={styles.bgimagem}
          resizeMode = "cover"
        />
 <ScrollView contentContainerStyle={styles.scroll}>
 <View style={styles.bodyPrin}>
<H1> 
Fav
</H1>
</View>
</ScrollView>
</>
);
}

export default FavoriteScreen;
