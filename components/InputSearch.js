import { TextInput, View } from 'react-native';

import styles from '../styles/index'
export default function InputSearch({ ph, value, onChangeText, onSubmitEditing }) {
  return (
    <View style={styles.headerSecure}>
      <TextInput
        placeholder={ph}
        placeholderTextColor='#351313'
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        style={styles.inputSearch}
      />
    </View>
  );
}