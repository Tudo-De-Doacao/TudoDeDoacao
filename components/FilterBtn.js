import { Pressable, Platform , Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';

export const categorias = [
<<<<<<< HEAD
  { nome: 'Móveis', rota: 'Pesquisar', filter: 'moveis', icon: 'bed-outline' },
  { nome: 'Decoração', rota: 'Pesquisar', filter: 'decoracao', icon: 'cafe-outline' },
  { nome: 'Infantil', rota: 'Pesquisar', filter: 'infantil', icon: 'balloon-outline' },
  { nome: 'Eletrônicos', rota: 'Pesquisar', filter: 'eletronicos', icon: 'tv-outline' },
  { nome: 'Roupas', rota: 'Pesquisar', filter: 'roupas', icon: 'shirt-outline' },
=======
  { nome: 'Móveis', rota: 'Search', filter: 'Móveis', icon: 'bed-outline' },
  { nome: 'Decoração', rota: 'Search', filter: 'Decoração', icon: 'cafe-outline' },
  { nome: 'Infantil', rota: 'Search', filter: 'Infantil', icon: 'balloon-outline' },
  { nome: 'Eletrônicos', rota: 'Search', filter: 'Eletrônicos', icon: 'tv-outline' },
  { nome: 'Roupas', rota: 'Search', filter: 'Roupas', icon: 'shirt-outline' },
    { nome: 'Comida', rota: 'Search', filter: 'Comida', icon: 'fast-food-outline' },
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
];

export default function FilterBtn({ rota, icon, filter, text }) {
  const navigation = useNavigation();
  const isWeb = Platform.OS === 'web';

  return (
    <Pressable 
      onPress={() => {
        console.log("Navegando para:", rota, "com filtro:", filter);
        navigation.navigate(rota, { filter });
      }}
      style={styles.filterBtn}
    >
<<<<<<< HEAD
      <View style={styles.bodyBtnBottom}>
=======
      <View style={{...styles.bodyBtnBottom, height: 100}}>
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
        <Ionicons
          name={icon}
          size={isWeb ? 22 : 16}
          style={isWeb ? null : styles.iconFilter}
        />
        <Text style={typog.txtNavBtn}>{text}</Text>
      </View>
    </Pressable>
  );
}