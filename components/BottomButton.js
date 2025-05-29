import { Pressable,Text, Image,View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/index';
import colors from '../styles/color';
import typog from '../styles/type';

 function IconSelector ({icon}) {
if (icon === '')
{
   return <Image
          style={styles.iconBtnBottom}
          source={require('../assets/hand-heart.svg')}
        />
}

return <Icon name = {icon} size = {32} color = {colors.marker} />

}

export default function BottomBtn({route, icon, text}) {

  const navigation = useNavigation();
  return (
    <>
    <Pressable 
   onPress={() => {navigation.navigate(route)
   console.log("Navegando para:", route);}}
   style = {styles.bottomBtn}
   >
   <View style={styles.bodyBtnBottom}>
   <IconSelector icon={icon} />
   <Text style={typog.txtBtnBottom}>
   {text}
   </Text>
   </View>
   </Pressable>
   
   </>
  );
}




