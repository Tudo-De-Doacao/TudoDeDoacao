<<<<<<< HEAD
import { View, TextInput, Image, Text,Platform, Pressable } from 'react-native';
=======
import { View, TextInput, Image, Text, Platform, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
import Icon from 'react-native-vector-icons/Feather';

import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';
import colors from '../styles/color';

export default function Header() {
<<<<<<< HEAD

  const navigation = useNavigation();

  const route = useRoute();

=======
  const navigation = useNavigation();
  const route = useRoute();
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
  const isWeb = Platform.OS === 'web';

  const [searchTerm, setSearchTerm] = useState('');

<<<<<<< HEAD
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
=======
  useEffect(() => {
    const termoRecebido = route.params?.termo || route.params?.filter;
    if (termoRecebido) {
      setSearchTerm(termoRecebido);
    }
  }, [route.params?.termo, route.params?.filter]);

  const isSearchScreen = ['Search'].includes(route.name);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigation.navigate('Search', { termo: searchTerm });
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
      setSearchTerm('');
    }
  };

  return (
<<<<<<< HEAD
    <View style={styles.headerBar}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/Logo.png')} style={{...styles.logo, maxWidth: isWeb ? 40 : 45, marginBottom: isWeb ?  4 : 10, maxHeight: isWeb ? 40 : 50 }} />
      </Pressable>
      {isSearchScreen ? (
        <Pressable
        onPress={() => navigation.navigate('Home')}> 
        <Text style={typog.headerTitle}>TudoDeDoacao</Text>
=======
    <LinearGradient
      colors={[colors.background, colors.primary]} 
      start={{ x: 2, y:1 }}
      end={{ x: 2}}
      style={styles.headerBar}
    >
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            ...styles.logo,
            maxWidth: isWeb ? 40 : 45,
            marginBottom: isWeb ? 4 : 10,
            maxHeight: isWeb ? 40 : 50,
          }}
        />
      </Pressable>

      {isSearchScreen ? (
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={typog.headerTitle}>Tudo De Doação</Text>
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
        </Pressable>
      ) : (
        <TextInput
          placeholder="O que você procura?"
<<<<<<< HEAD
          placeholderTextColor='#351313'
          autoCapitalize="sentences"
          style={{
            ...styles.inputComponent,
=======
          placeholderTextColor="#351313"
          autoCapitalize="sentences"
          style={{
            ...styles.inputComponent,
            width: isWeb ? 180 : 200,
            height: isWeb ? 32 : 44,
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
            marginVertical: isWeb ? 8 : 12,
            color: colors.marker,
            textDecorationColor: colors.marker,
            textAlign: 'center',
            fontFamily: 'DGrotesque-Medium',
<<<<<<< HEAD
            fontSize: isWeb ? 18 : 20,
=======
            fontSize: isWeb ? 16 : 18,
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
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
<<<<<<< HEAD
          onPress={() => navigation.navigate('Favoritos')}>
          <Icon
            name="heart"
            size={32}
            color="#D93036"
            style={styles.iconHeader}
          />
=======
          onPress={() => navigation.navigate('Favorites')}
        >
          <Icon name="heart" size={32} color="#D93036" style={styles.iconHeader} />
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
        </Pressable>
      ) : (
        <Pressable
          style={styles.iconCont}
<<<<<<< HEAD
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
=======
          onPress={() => navigation.navigate('Search', { termo: searchTerm })}
        >
          <Icon name="search" size={32} color="#351313" style={styles.iconHeader} />
        </Pressable>
      )}
    </LinearGradient>
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
  );
}
