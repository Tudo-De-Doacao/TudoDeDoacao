import {  TextInput, View }from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import styles from '../styles/index';
import typog from '../styles/type';

export default function Input ({ph, autoComplete}) {
 const [secureMode, setSecureMode] = useState(true)
  return (
      <View> 
    
        <TextInput 
        placeholder = {ph}
        secureTextEntry = {secureMode ? true : false}
        autoComplete = {autoComplete}
        autoCapitalize = "sentences"
        maxLength = {32}
        right = {<TextInput.Icon name = 'eye' onPress={() => setSecureMode        (!secureMode)}/>}
        style = {{...styles.inputComponent,
        fontFamily: 'DGrotesque', 
        fontWeight: 600, 
        fontSize: 18}}
        
        />
      </View>
  );
}