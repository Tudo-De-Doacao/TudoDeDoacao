import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native'; 
import { getDonates } from '../../services/api/donations'; // arquivo unificado

import styles from '../../styles/index';
import colors from '../../styles/color';

import InputSearch from '../../components/InputSearch';
import Header from '../../components/Header';
import Card from '../../components/CardDon';

function SearchScreen() {

  const route = useRoute();

  const [inputValue, setInputValue] = useState('');      // Texto digitado
  const [browseTerm, setBrowseTerm] = useState('');      // Termo de busca
  const [filterDonation, setFilterDonation] = useState([]);

  useEffect(() => {
    if (route.params?.filter) {
      setInputValue(route.params.filter);
      setBrowseTerm(route.params.filter);
    }
  }, [route.params?.filter]);
  
  useEffect(() => {
    async function fetchDonations() {
      if (browseTerm.trim() !== '') {
        const data = await getDonates(browseTerm);
        console.log('Dados recebidos para busca:', data); // DEBUG
        setFilterDonation(data);
      } else {
        setFilterDonation([]); // limpa resultados se termo vazio
      }
    }

    fetchDonations();
  }, [browseTerm]);

  const handleSubmit = () => {
    setBrowseTerm(inputValue); // dispara a busca só ao enviar
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
            value={inputValue}      // corrigido para inputValue aqui
            onChangeText={setInputValue}
            onSubmitEditing={handleSubmit}
          />
        </View>

        <ScrollView contentContainerStyle={{ ...styles.scroll, paddingBottom: 22 }}>
          <View style={styles.bodySearch}>
            {filterDonation.length > 0 ? (
              filterDonation.map((item, index) => {
                console.log('Item para renderizar card:', item); // DEBUG
                return (
                  <Card
                    key={item.id ?? index} // usa id ou índice se id não existir
                    name={item.donation_name}
                    description={item.donation_description}
                    location={item.donation_location}
                    image={`http://127.0.0.1:8000/storage/${item.donation_image}`}
                  />
                );
              })
            ) : (
              <Text style={{ ...styles.txtSearch, color: '#351313' }}>
                Nenhuma doação encontrada.
              </Text>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default SearchScreen;