import { Pressable, Platform , Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';

export const categorias = [
  { nome: 'Móveis', rota: 'Pesquisar', filter: 'moveis', icon: 'bed-outline' },
  { nome: 'Decoração', rota: 'Pesquisar', filter: 'decoracao', icon: 'cafe-outline' },
  { nome: 'Infantil', rota: 'Pesquisar', filter: 'infantil', icon: 'balloon-outline' },
  { nome: 'Eletrônicos', rota: 'Pesquisar', filter: 'eletronicos', icon: 'tv-outline' },
  { nome: 'Roupas', rota: 'Pesquisar', filter: 'roupas', icon: 'shirt-outline' },
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