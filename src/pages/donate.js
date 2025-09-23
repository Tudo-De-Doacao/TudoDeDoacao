import { ScrollView, View, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import Input from '../../components/Input';
import InputImage from '../../components/InputImage';
import InputDescription from '../../components/InputDescription';
import InputCategory from '../../components/InputCategory';
import RegisterButton from '../../components/RegisterButton'
import TabDonation from '../../components/TabDonation';

import styles from '../../styles/index';
import colors from '../../styles/color';

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
          <InputImage
            onChange={setImage}
            value={image}
          />

          <RegisterButton 
        route="Tabs"
        text="Doar"
        onPress={handleRegister}
        />

        </View>

      <BottomBtn  route={'Home'} icon={"home"} text="home"/>
      </ScrollView>
  

    

    </>
  );
}

export default DonateScreen;
