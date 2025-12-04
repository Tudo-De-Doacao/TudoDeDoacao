import { ScrollView, View, Image, Alert, Text, ActivityIndicator } from 'react-native';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';

import Input from '../../components/Input';
import RegisterButton from '../../components/RegisterButton';
import BottomBtn from '../../components/BottomButton';

import { getUser } from '../data/getUser';
// import { useAuth } from '../../contexts/authContext'; // Se você usar o contexto

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  // const { login } = useAuth(); // Se você usar o contexto

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Preencha email e senha');
      return;
    }

    setLoading(true);
    
    try {
      const success = await getUser({ email, password });
      
      if (success) {
        // login(); // Se você usar o contexto
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tabs' }],
        });
      }
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setLoading(false);
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
        <Image 
          source={require('../../assets/Logo.png')} 
          style={{...styles.logo, marginTop: 42}} 
        />
        <Text style={typog.titleLogin}>Bem vindo de volta</Text>
        
        <View style={styles.loginInput}>
          <Input
            ph="Email"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            editable={!loading}
          />
          <Input
            ph="Senha"
            autoComplete="new-password"
            secure="true"
            onChangeText={setPassword}
            value={password}
            editable={!loading}
          />
        </View>

        {loading ? (
          <View style={{ marginVertical: 20 }}>
            <ActivityIndicator size="large" color="#D93036" />
          </View>
        ) : (
          <>
            <RegisterButton 
              route="Tabs" 
              text="Entrar" 
              onPress={handleLogin} 
            />
            <RegisterButton
              route="Register"
              text="Cadastrar"
              onPress={() => navigation.navigate('Register')}  
            />
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default LoginScreen;