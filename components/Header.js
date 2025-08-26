import { View, TextInput, Image, Text,Platform, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

export default function Header() {

  const navigation = useNavigation();

  const route = useRoute();

  const isWeb = Platform.OS === 'web';

  const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  const termoRecebido = route.params?.termo || route.params?.filter;
  if (termoRecebido) {
    setSearchTerm(termoRecebido);
  }
}, [route.params?.termo, route.params?.filter]);

  const isSearchScreen = ['Pesquisar'].includes(route.name);


  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigation.navigate('Pesquisar', { termo: searchTerm });
      setSearchTerm('');
    }
  };

  return (
    <View style={styles.headerBar}>
      <Pressable onPress={() => navigation.navigate('Card')}>
        <Image source={require('../assets/Logo.png')} style={{...styles.logo, maxWidth: isWeb ? 40 : 45, marginBottom: isWeb ?  4 : 10, maxHeight: isWeb ? 40 : 50 }} />
      </Pressable>
      {isSearchScreen ? (
        <Pressable
        onPress={() => navigation.navigate('Home')}> 
        <Text style={typog.headerTitle}>TudoDeDoacao</Text>
        </Pressable>
      ) : (
        <TextInput
          placeholder="O que você procura?"
          placeholderTextColor='#351313'
          autoCapitalize="sentences"
          style={{
            ...styles.inputComponent,
            marginVertical: isWeb ? 8 : 12,
            color: colors.marker,
            textDecorationColor: colors.marker,
            textAlign: 'center',
            fontFamily: 'DGrotesque-Medium',
            fontSize: isWeb ? 18 : 20,
          }}
          maxLength={16}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
      )}

      {isSearchScreen ? (
        <Pressable
          style={styles.iconCont}
          onPress={() => navigation.navigate('Favoritos')}>
          <Icon
            name="heart"
            size={32}
            color="#D93036"
            style={styles.iconHeader}
          />
        </Pressable>
      ) : (
        <Pressable
          style={styles.iconCont}
          onPress={() => navigation.navigate('Pesquisar'), {termo: searchTerm}}>
          <Icon
            name="search"
            size={32}
            color="#351313"
            style={styles.iconHeader}
          />
        </Pressable>
      )}
    </View>
  );
}
