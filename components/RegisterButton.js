import { Pressable, Platform,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';


export default function RegisterButton({route, text, onPress}) {
  const navigation = useNavigation();
 const isWeb = Platform.OS === 'web';
  return (
    <Pressable 
     onPress={async () => {
        if (onPress) {
         try {
          const success = await onPress(); 
          if (success.status == 201) {
          console.log('Navegando para rota:' , route)
            navigation.navigate(route);
          }
         } catch( error ) {
           throw (error)
         }
        } 
      }}
      style = {styles.regBtn}
   >
   <Text style= {isWeb ? typog.txtNavBtn : {fontSize: 18}} >
   {text}
   </Text>
   </Pressable>
  );
}




