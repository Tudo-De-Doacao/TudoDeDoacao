import { Pressable, Platform , Text, View, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';


export const categorias = [
  { nome: 'Móveis', rota: 'Pesquisar', filtro: 'moveis', icon:'bed-outline' },
  { nome: 'Decoração', rota: 'Pesquisar', filtro: 'decoracao', icon:'cafe-outline' },
  { nome: 'Infantil', rota: 'Pesquisar', filtro: 'infantil', icon:'balloon-outline' },
  { nome: 'Eletrônicos', rota: 'Pesquisar', filtro: 'eletronicos', icon:'tv-outline' },
  { nome: 'Roupas', rota: 'Pesquisar', filtro: 'roupas', icon:'shirt-outline' },
];

export default function FilterBtn({route, icon, filter, text}) {


  const navigation = useNavigation();
  const isWeb = Platform.OS === 'web';
  
    
  return (
    <>
    <Pressable 
     onPress={() => {
    console.log("Navegando para:", route,  "com filtro:", filter);
    navigation.navigate(route, {filter});
  }}
   style = {styles.filterBtn}
   >
   <View style={styles.bodyBtnBottom}>

   <Ionicons name={icon} size = {isWeb ? 22 : 16}  style={ isWeb ? null : styles.iconFilter} />
   <Text style={typog.txtNavBtn}>
   {text}
   </Text>
   </View>
   </Pressable>
   </>
  );
}




