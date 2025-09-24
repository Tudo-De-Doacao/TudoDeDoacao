<<<<<<< HEAD
import { Pressable, Platform,Text } from 'react-native';
=======
import { TouchableOpacity, Platform,Text } from 'react-native';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';


export default function RegisterButton({route, text, onPress}) {
  const navigation = useNavigation();
 const isWeb = Platform.OS === 'web';
  return (
<<<<<<< HEAD
    <Pressable 
=======
    <TouchableOpacity 
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
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
<<<<<<< HEAD
   </Pressable>
=======
   </TouchableOpacity>
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
  );
}




