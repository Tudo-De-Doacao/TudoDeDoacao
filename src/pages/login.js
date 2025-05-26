import {ScrollView, View, Image, Text } from 'react-native';


import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color'
import Input from '../../components/Input'


function LoginScreen() {

return (

   <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{...styles.scroll, backgroundColor: colors.background, height: '100%'}}>
 <View style={styles.bodyPrin}>
 <Image 
source={require('../../assets/Logo.png')}
style={styles.logo}/>
<Text style={typog.titleLogin}> 
Faça seu cadastro 
</Text>
<Input
ph = "Insira seu nome"
autoComplete = "name"
/>
<Input
ph = "Insira seu email"
autoComplete = "email"
/>
<Input
ph = "Insira sua senha"
autoComplete = "new-password"
secure = 'true'
/>
<Input
ph = "Confirme sua senha"
autoComplete = "password"
secure = 'true'/>

</View>
</ScrollView>

);
}

export default LoginScreen;


