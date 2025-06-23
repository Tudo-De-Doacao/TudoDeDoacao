import { ScrollView, View, Text, ActivityIndicator, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import Input from '../../components/Input';
import InputDescription from '../../components/InputDescription';
import InputCategory from '../../components/InputCategory';
import RegisterButton from '../../components/RegisterButton'
import TabDonation from '../../components/TabDonation';

import styles from '../../styles/index';
import colors from '../../styles/color';

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
            ph="URL da Imagem"
            autoComplete="image"
            onChangeText={setImage}
            value={image}
          />
          <Input
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

          <RegisterButton 
        route="Tabs"
        text="Doar"
        onPress={handleRegister}
        />
        </View>

      </ScrollView>
      <TabDonation />
    </>
  );
}

export default DonateScreen;
