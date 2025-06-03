import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import typog from '../styles/type';


export default function RegisterButton({route, text, onPress}) {

  const navigation = useNavigation();

  return (
    <>
    <Pressable 
     onPress={async () => {
        if (onPress) {
          const success = await onPress(); 
          if (success) {
            navigation.navigate(route);
          }
        } else {
          navigation.navigate(route);
        }
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




