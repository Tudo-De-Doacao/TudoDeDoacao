import { TouchableOpacity, Platform,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';


export default function RegisterButton({route, text, onPress}) {
  const navigation = useNavigation();
 const isWeb = Platform.OS === 'web';
  return (
    <TouchableOpacity 
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
  <Text
  style={[
    typog.txtNavBtn,
    {
      fontSize: 18,
      ...(isWeb && { fontFamily: 'DGrotesque-Bold' }),
    },
  ]}
>
   {text}
   </Text>
   </TouchableOpacity>
  );
}




