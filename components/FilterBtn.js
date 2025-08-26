import { Pressable, Platform , Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';

export const categorias = [
  { nome: 'Móveis', rota: 'Pesquisar', filter: 'Móveis', icon: 'bed-outline' },
  { nome: 'Decoração', rota: 'Pesquisar', filter: 'Decoração', icon: 'cafe-outline' },
  { nome: 'Infantil', rota: 'Pesquisar', filter: 'Infantil', icon: 'balloon-outline' },
  { nome: 'Eletrônicos', rota: 'Pesquisar', filter: 'Eletrônicos', icon: 'tv-outline' },
  { nome: 'Roupas', rota: 'Pesquisar', filter: 'Roupas', icon: 'shirt-outline' },
    { nome: 'Comida', rota: 'Pesquisar', filter: 'Comida', icon: 'fast-food-outline' },

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
      <View style={styles.bodyBtnBottom}>
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