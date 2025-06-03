import {ScrollView, View, Image, Alert,Text } from 'react-native';
import { useState } from 'react'; 

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color'
import api from '../../services/api'
import Input from '../../components/Input'
import RegisterButton from '../../components/RegisterButton';



function LoginScreen() {

 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');

   const handleRegister = async () => {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        password_confirmation: password,
      });

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    } catch (error) {
      console.log(error.response?.data);
      Alert.alert('Erro', 'Não foi possível cadastrar.');
    }
  };


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
onChangeText = {setName}
value = {name}
/>
<Input
ph = "Email"
autoComplete = "email"
onChangeText = {setEmail}
value = {email}
/>
<Input
ph = "Senha"
autoComplete = "new-password"
secure = 'true'
onChangeText = {setPassword}
value = {password}
/>
<Input
ph = "Confirme sua senha"
autoComplete = "new-password"
secure = 'true'
onChangeText = {setConfirmPassword}
value = {confirmPassword}/>
</View>

<RegisterButton
route = "Tabs"
text = 'Cadastrar'
onPress={handleRegister}
/> 
</View>
</ScrollView>

);
}

export default LoginScreen;


