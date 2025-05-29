import {ScrollView, View, Image, Text } from 'react-native';


import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color'

import Input from '../../components/Input'
import NavButton from '../../components/NavButton';

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
<View style = {styles.loginInput}>
<Input
ph = "Nome"
autoComplete = "name"
/>
<Input
ph = "Email"
autoComplete = "email"
/>
<Input
ph = "Senha"
autoComplete = "new-password"
secure = 'true'
/>
<Input
ph = "Confirme sua senha"
autoComplete = "new-password"
secure = 'true'/>
</View>

<NavButton
route = "Tabs"
text = 'Cadastrar'/> 
</View>
</ScrollView>

);
}

export default LoginScreen;


