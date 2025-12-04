import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native'; 
import { getDonates } from '../../services/api/donations';

import styles from '../../styles/index';
import colors from '../../styles/color';

import InputSearch from '../../components/InputSearch';
import Header from '../../components/Header';
import Card from '../../components/CardDon';

function SearchScreen() {

  const route = useRoute();

  const [inputValue, setInputValue] = useState('');     
  const [searchTerm, setSearchTerm] = useState('');    
  const [filterDonation, setFilterDonation] = useState([]);


useEffect(() => {
  const termoRecebido = route.params?.termo || route.params?.filter;
  if (termoRecebido) {
    setInputValue(termoRecebido);
    setSearchTerm(termoRecebido); 
  }
}, [route.params?.termo, route.params?.filter]);


  useEffect(() => {
    async function fetchDonations() {
      if (searchTerm.trim() !== '') {
        const data = await getDonates(searchTerm);
        console.log('Dados recebidos para busca:', data); // DEBUG
        setFilterDonation(data ?? []);
      } else {
        setFilterDonation([]); 
      }
    }

    fetchDonations();
  }, [searchTerm]);

const handleSubmit = () => {
  if (inputValue.trim() !== '') {
    setSearchTerm(inputValue);
  }
};
  return (
    <>
      <Header />
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="cover"
      >
        <View style={{ padding: 16, justifyContent: 'flex-start' }}>
          <InputSearch
            ph="O que você deseja?"
            value={inputValue}    
            onChangeText={setInputValue}
            onSubmitEditing={handleSubmit}
          />
        </View>

        <ScrollView contentContainerStyle={{ ...styles.scroll, paddingBottom: 22 }}>
          <View style={styles.bodySearch}>

            {  filterDonation.map((item, index) => {
                console.log('Item para renderizar card:', item); // DEBUG
                return (
                  <Card
                    key={item.id ?? index} 
                    name={item.name}
                    description={item.description}
                    location={item.location}
                    image={`http://10.173.20.95:8000/storage/${item.image}`}
                  />
                );
              })
          }
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default SearchScreen;