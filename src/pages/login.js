
import { ScrollView, View, Image, Alert, Text, Button } from 'react-native';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';


import Input from '../../components/Input';
import RegisterButton from '../../components/RegisterButton';
import BottomBtn from '../../components/BottomButton';

import { getUser } from '../data/getUser';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    const success = await getUser({ email, password });
    if (success) {
      navigation.navigate('Tabs');
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.scroll,
        backgroundColor: colors.background,
        height: '100%',
      }}>
      <View style={styles.bodyPrin}>
        <Image source={require('../../assets/Logo.png')} style={{...styles.logo, marginTop: 24}} />
        <Text style={typog.titleLogin}>Bem vindo de volta</Text>
        <View style={styles.loginInput}>
          <Input
            ph="Email"
            autoComplete="email"
            onChangeText={setEmail}
            value={email}
          />
          <Input
            ph="Senha"
            autoComplete="new-password"
            secure="true"
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <RegisterButton route="Tabs" text="Entrar" /*onPress={handleLogin}*/ onPress={() => navigation.navigate('Tabs')} />
        <RegisterButton
          route="Register"
          text="Cadastrar"
         onPress={() => navigation.navigate('Register')}  
        />
       
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
