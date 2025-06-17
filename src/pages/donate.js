import {ScrollView, View, ImageBackground,} from 'react-native';

import styles from '../../styles/index';

import H1 from '../../components/H1';

function DonateScreen() {
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
Login
</H1>
</View>
</ScrollView>
</>
);
}

export default DonateScreen;



