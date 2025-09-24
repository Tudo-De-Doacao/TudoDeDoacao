import { ScrollView, View, Image, Alert, Text } from 'react-native';

import { useState } from 'react';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';
<<<<<<< HEAD
import Input from '../../components/Input'
=======


import PhoneInput from '../../components/PhoneInput';
import FloatingInput from '../../components/FloatingInput';

>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
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

<<<<<<< HEAD
    const success = await registerUser({ name, email, location, phone, password });
    return success;
=======
    const success = await registerUser({
      name,
      email,
      location,
      phone,
      password,
    });
    if (success == true) { return success; }

    if (success) {  navigation.navigate('Login'); }
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
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
<<<<<<< HEAD
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <Text style={typog.titleLogin}>Faça seu cadastro</Text>
        <View style={styles.loginInput}>
          <Input 
            ph="Nome"
            autoComplete="name"
            onChangeText={setName}
            value={name}/>
          <Input
            ph="Email"
=======
        <Image
          source={require('../../assets/logo.png')}
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
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
            autoComplete="email"
            onChangeText={setEmail}
            value={email}
          />
<<<<<<< HEAD
          <Input
            ph="Localização"
=======
          <FloatingInput
            placeholder="Insira seu Bairro"
            label="Localização"
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
            autoComplete="street-address"
            onChangeText={setLocation}
            value={location}
          />
<<<<<<< HEAD
          <Input
            ph="Telefone"
            autoComplete="tel"
            onChangeText={setPhone}
            value={phone}
          />
          <Input
            ph="Senha"
=======
          <PhoneInput
            onChangeText={setPhone}
            value={phone}
          />
          <FloatingInput
            placeholder="Senha"
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
            autoComplete="new-password"
            secure="true"
            onChangeText={setPassword}
            value={password}
          />
<<<<<<< HEAD
          <Input
            ph="Confirme sua senha"
=======
          <FloatingInput
            placeholder="Confirme sua senha"
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
            autoComplete="new-password"
            secure="true"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
<<<<<<< HEAD

        <RegisterButton
          route="Tabs"
          text="Cadastrar"
          onPress={() => navigation.navigate('Register'), handleRegister}
=======
        <RegisterButton
          route="Login"
          text="Cadastrar"
          onPress={handleRegister}
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
        />
      </View>
    </ScrollView>
  );
}

export default RegisterScreen;
