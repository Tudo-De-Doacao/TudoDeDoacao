import { useState } from 'react';
import { Platform, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from '../styles/index';
import colors from '../styles/color';

export default function FloatingInput({ label, value, secure, autoComplete, disabled, placeholder, onChangeText }) {
    const [secureMode, setSecureMode] = useState(true);

  const isWeb = Platform.OS === 'web';

  return (
    <View style={{...styles.bodyPrin}}>
      <TextInput
        label={label}
        disabled={disabled} // Mudar para true quando for email, do contrário deixar sempre falso ou nulo
        placeholder={placeholder}
        secureTextEntry={secure && secureMode}
        autoComplete={autoComplete}
        autoCapitalize =  "none"
        maxLength={50}
        value={value}
        onChangeText={onChangeText}
        mode={'outlined'}
        style={{
          borderColor: colors.marker,
          fontSize: 20,
          width: 230,
          height: isWeb ? 36 : 48,
        }}
        outlineColor="#351313"
        activeOutlineColor="#351313"
        placeholderTextColor="#351313"
        theme={{    
          roundness: 20, 
          colors: {
            background: colors.background,
            primary: colors.marker,
            text: colors.marker,
            placeholder: colors.marker,
          },
          fonts: {
            regular: {
              fontFamily: 'DGrotesque-SemiBold',
            },
          },
        }}
      />
    </View>
  );
}
