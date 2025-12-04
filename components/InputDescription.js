import { TextInput, View, Platform } from 'react-native';
import styles from '../styles/index';

export default function InputDescription({ ph, value, onChangeText }) {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.headerSecure}>
      <TextInput
        placeholder={ph}
        placeholderTextColor="#351313"
        value={value}
        onChangeText={onChangeText}
        maxLength={70}
        multiline
        numberOfLines={isWeb ? 3 : 4}
        textAlignVertical="top"
        style={[
          isWeb ? styles.inputComponent : styles.inputComponentMobile,
          {
            height: isWeb ? 80 : 100,
            paddingTop: 10,
            paddingBottom: 10,
            fontFamily: 'DGrotesque-SemiBold',

            fontSize: 18,
            borderColor: '#351313',
          },
        ]}
      />
    </View>
  );
}