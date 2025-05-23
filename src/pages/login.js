import {ScrollView, View, Image, Text, ImageBackground} from 'react-native';

import styles from '../../styles/index';
import typog from '../../styles/type';

import Input from '../../components/Input'


function LoginScreen() {

return (

   <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={styles.scroll}>
   <ImageBackground
          source={require('../../assets/BGHome.png')}
          style={styles.bgimagem}
          resizeMode = "cover"
        />
 <View style={styles.bodyPrin}>
 <Image 
source={require('../../assets/Logo.png')}
style={styles.logo}/>
<Text style={typog.titleLogin}> 
Faça seu cadastro 
</Text>
<Input
ph = "Insira seu nome"/>
</View>
</ScrollView>

);
}

export default LoginScreen;


