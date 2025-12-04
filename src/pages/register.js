import { 
  ScrollView, 
  View, 
  Image, 
  Alert, 
  Text, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useState, useEffect } from 'react';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';

import PhoneInput from '../../components/PhoneInput';
import FloatingInput from '../../components/FloatingInput';
import SecurityInput from '../../components/SecurityInput';
import RegisterButton from '../../components/RegisterButton';

import { registerUser } from '../data/registerUser';
import { verificationCode } from '../data/verificationCode';
import VerificationCard from '../../components/verificationCard';

function RegisterScreen() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  const [code, setCode] = useState("");
  const [showCodeCard, setShowCodeCard] = useState(false);

  useEffect(() => {
    if (!email) return;

    async function sendCode() {
      if (email.includes("@") && email.includes(".com")) {
        try {
          const number = await verificationCode({    
            email: email
          });
          setShowCodeCard(true);

        } catch (e) {
          console.error("Erro ao enviar código:", e.response?.data || e.message);
        }
      }
    }

    sendCode();
  }, [email]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    const success = await registerUser({
      name,
      email,
      location,
      phone,
      password,
      code,
    });

    if (success) {
      Alert.alert("Sucesso", "Cadastro realizado!");
      // navigation.navigate('Login');
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.scroll,
        backgroundColor: colors.background,
        height: '100%',
      }}
    >

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        {showCodeCard && (
          <VerificationCard setCode={setCode} click={setShowCodeCard(false)}/>
        )}

        <ScrollView style={{ flex: 1 }}>
          <View style={styles.bodyPrin}>
            <Image
              source={require('../../assets/Logo.png')}
              style={{ ...styles.logo, marginTop: 42 }}
            />

            <Text style={typog.titleLogin}>Faça seu cadastro</Text>

            <View style={styles.loginInput}>
              <FloatingInput
                placeholder="Insira seu nome"
                label="Nome"
                autoComplete="name"
                onChangeText={setName}
                value={name}
              />

              <FloatingInput
                placeholder="Insira seu email"
                label="Email"
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

              <SecurityInput
                secure
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />

              <SecurityInput
                secure
                placeholder="Confirme sua senha"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />
            </View>

            <RegisterButton
              text="Cadastrar"
              onPress={handleRegister}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default RegisterScreen;
