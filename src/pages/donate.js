<<<<<<< HEAD
import { ScrollView, View, Text, ActivityIndicator, FlatList } from 'react-native';
=======
import { ScrollView, View, Alert } from 'react-native';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import Input from '../../components/Input';
<<<<<<< HEAD
=======
import InputImage from '../../components/InputImage';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
import InputDescription from '../../components/InputDescription';
import InputCategory from '../../components/InputCategory';
import RegisterButton from '../../components/RegisterButton'
import TabDonation from '../../components/TabDonation';

import styles from '../../styles/index';
import colors from '../../styles/color';

<<<<<<< HEAD
import { getDonates } from '../../services/api/donations';
import { registerDonate } from '../data/registerDonate'


function DonateScreen() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [donationCards, setDonationCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function fetchDonations() {
      try {
        const data = await getDonates('');
        if (Array.isArray(data)) {
          setDonationCards(data);
        } else {
          setErrorMsg('Formato inesperado dos dados');
        }
      } catch (error) {
        setErrorMsg('Erro ao carregar doações: ' + error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDonations();
  }, []);


  const handleRegister = async () => {
    const response = await registerDonate({  name,
  id,
  user_id,
  location,
  category,
  image,
  description});
    
     if (response) {
      Alert.alert('Sucesso', 'Doação cadastrada com sucesso!');
      navigation.navigate('Tabs'); 
    }
  };
  
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...styles.scroll,
          backgroundColor: colors.background,
          height: '100%' || 'full',
          resizeMode: 'cover'
        }}>
        <View style={{...styles.bodyPrin, marginTop: 8, marginBottom: 8, paddingTop: 14 }}>
        <View style={styles.headerSecure}>
      {loading && <ActivityIndicator size="large" color="#D93036" style={{ marginTop: 20 }} />}

            {errorMsg !== '' && (
              <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>{errorMsg}</Text>
            )}

            {!loading && donationCards.length === 0 && errorMsg === '' && (
              <Text style={{...styles.txtCard, color: '#351313'}}>
                Nenhuma doação encontrada.
              </Text>
            )}

            {!loading && donationCards.length > 0 && (
              <FlatList
                data={donationCards}
                renderItem={renderCardItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bodyCard}
              />
            )}
            </View>
          <Input
            ph="Nome da Doação"
=======
import { registerDonate } from '../data/registerDonate'
import BottomBtn from '../../components/BottomButton';


function DonateScreen() {
   const navigation = useNavigation();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');

  const handleRegister = async () => {
    console.log('📤 Enviando doação:', {
      name,
      category,
      location,
      description,
      image,
    });

    const response = await registerDonate({  
      name,
      location,
      category,
      image,
      description,
    });
  
      Alert.alert('Sucesso', 'Doação cadastrada com sucesso!');
      navigation.navigate('Tabs'); 
    }

  
  return (
    <>
     <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.scroll,
        backgroundColor: colors.background,
        height: '100%',
      }}>
        <View style={{...styles.bodyPrin, marginTop: 60, marginBottom: 8, paddingTop: 14 }}>
          <Input
            ph="Nome da Donation"
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
            autoComplete=""
            onChangeText={setName}
            value={name}
          />
          <InputCategory
            ph="Categoria"
            autoComplete=""
            onChangeText={setCategory}
            value={category}
          />
          <Input
<<<<<<< HEAD
            ph="URL da Imagem"
            autoComplete="image"
            onChangeText={setImage}
            value={image}
          />
          <Input
=======
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
            ph="Localização"
            autoComplete="location"
            onChangeText={setLocation}
            value={location}
          />
          <InputDescription
            ph="Descreva sua doação aqui..."
            value={description}
            onChangeText={setDescription}
          />
<<<<<<< HEAD
=======
          <InputImage
            onChange={setImage}
            value={image}
          />
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469

          <RegisterButton 
        route="Tabs"
        text="Doar"
        onPress={handleRegister}
        />
<<<<<<< HEAD
        </View>

      </ScrollView>
      <TabDonation />
=======

        </View>

      <BottomBtn  route={'Home'} icon={"home"} text="home"/>
      </ScrollView>
  

    

>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
    </>
  );
}

export default DonateScreen;
