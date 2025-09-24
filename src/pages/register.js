import { ScrollView, View, Image, Alert, Text } from 'react-native';

import { useState } from 'react';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';


import PhoneInput from '../../components/PhoneInput';
import FloatingInput from '../../components/FloatingInput';

import RegisterButton from '../../components/RegisterButton';
import { registerUser } from '../data/registerUser';

function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return false;
    }

    const success = await registerUser({
      name,
      email,
      location,
      phone,
      password,
    });
    if (success == true) { return success; }

    if (success) {  navigation.navigate('Login'); }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.scroll,
        backgroundColor: colors.background,
        height: '100%',
      }}>
      <View style={{...styles.bodyPrin, gap:2}}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{ ...styles.logo, marginTop: 24 }}
        />
        <Text style={typog.titleLogin}>Faça seu cadastro</Text>
        <View style={styles.loginInput}>
          <FloatingInput
            placeholder="Insira seu nome"
            label= "Nome"
            autoComplete="name"
            onChangeText={setName}
            value={name}
          />
          <FloatingInput
            placeholder="Insira seu email"
            label = "Email"
            autoComplete="email"
            onChangeText={setEmail}
            value={email}
          />
          <FloatingInput
            placeholder="Insira seu Bairro"
            label="Localização"
            autoComplete="street-address"
            onChangeText={setLocation}
            value={location}
          />
          <PhoneInput
            onChangeText={setPhone}
            value={phone}
          />
          <FloatingInput
            placeholder="Senha"
            autoComplete="new-password"
            secure="true"
            onChangeText={setPassword}
            value={password}
          />
          <FloatingInput
            placeholder="Confirme sua senha"
            autoComplete="new-password"
            secure="true"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
        <RegisterButton
          route="Login"
          text="Cadastrar"
          onPress={handleRegister}
        />
      </View>
    </ScrollView>
  );
}

export default RegisterScreen;
