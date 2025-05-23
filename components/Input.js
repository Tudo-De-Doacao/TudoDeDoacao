import { Text, TextInput, View }from 'react-native'

import styles from '../styles/index';
import typog from '../styles/type';

export default function Input ({ph}) {

  return (
      <View> 
    
        <TextInput 
        placeholder = {ph}
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