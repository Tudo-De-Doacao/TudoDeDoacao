import { ScrollView, View, Image, Alert, Text } from 'react-native';

import { useState } from 'react';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';
import Input from '../../components/Input';
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
    const success = await registerUser({
      name,
      email,
      location,
      phone,
      password,
    });
    if (success == true){
    navigation.navigate('Login');
    return success; }
=======
    const success = await registerUser({ name, email, location, phone, password });
    if (success == true)
    return success;
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
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
        <Image
          source={require('../../assets/Logo.png')}
          style={{ ...styles.logo, marginTop: 24 }}
        />
        <Text style={typog.titleLogin}>Faça seu cadastro</Text>
        <View style={styles.loginInput}>
          <Input
            ph="Nome"
            autoComplete="name"
            onChangeText={setName}
            value={name}
          />
          <Input
            ph="Email"
            autoComplete="email"
            onChangeText={setEmail}
            value={email}
          />
          <Input
            ph="Localização"
            autoComplete="street-address"
            onChangeText={setLocation}
            value={location}
          />
          <Input
            ph="Celular"
            autoComplete="tel"
            onChangeText={setPhone}
            value={phone}
          />
          <Input
            ph="Senha"
            autoComplete="new-password"
            secure="true"
            onChangeText={setPassword}
            value={password}
          />
          <Input
            ph="Confirme sua senha"
            autoComplete="new-password"
            secure="true"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
        <RegisterButton
          route="Login"
          text="Cadastrar"
<<<<<<< HEAD
<<<<<<< HEAD
          onPress={handleRegister}
        />
=======
onPress={
  handleRegister
} />
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
=======
onPress={
  handleRegister
} />
>>>>>>> 23f22453472bb99be476864822446dafc87422b2
      </View>
    </ScrollView>
  );
}

export default RegisterScreen;
