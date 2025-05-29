import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';


export default function NavButton({route, text}) {

  const navigation = useNavigation();

  return (
    <>
    <Pressable 
     onPress={() => {
    console.log("Navegando para:", route);
    navigation.navigate(route);
  }}
   style = {styles.navBtn}
   >
   <View style={styles.bodyBtnBottom}>
   <Text style={typog.txtNavBtn}>
   {text}
   </Text>
   </View>
   </Pressable>
   </>
  );
}




