import { TextInput, View, Pressable }from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useState } from 'react';
import styles from '../styles/index';
import colors from '../styles/color';

function Password ({secure, ph, autoComplete}) {
   const [secureMode, setSecureMode] = useState(true)

  if (!secure)
  {
    return (
    <View style={styles.headerSecure}> 
        <TextInput 
        placeholder = {ph}
        autoComplete = {autoComplete}
        autoCapitalize = "sentences"
        maxLength = {32}
        style = {{...styles.inputComponent,
        fontFamily: 'DGrotesque', 
        fontWeight: 600, 
        fontSize: 18}}
        />
      </View>
    );
  } 
  return <View style = {styles.headerSecure}> 
        <TextInput 
        placeholder = {ph}
        secureTextEntry = {secureMode ? true : false}
        autoComplete = {autoComplete}
        autoCapitalize = "sentences"
        maxLength = {32}
        style = {{...styles.inputComponent,
        fontFamily: 'DGrotesque', 
        fontWeight: 600, 
        fontSize: 18}}
        />
        <Pressable 
      style={{...styles.iconCont, alignSelf : 'right'}}
      onPress={() => setSecureMode(!secureMode)}>
      <Icon name ={secureMode ? 'eye-off' : 'eye'} size={28} color='#351313' style={styles.iconHeader} />
      </Pressable>
      </View>
}
export default function Input ({ph, autoComplete, secure}) {

  return (
      <Password ph = {ph} autoComplete = {autoComplete} secure = {secure} />
  );
}

