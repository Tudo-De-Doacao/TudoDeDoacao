import { TextInput, View, Platform, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { useState } from 'react';

import styles from '../styles/index';

function Password({ secure, ph, autoComplete, value, onChangeText }) {
  const [secureMode, setSecureMode] = useState(true);
  const isWeb = Platform.OS === 'web';
  return (
    <View style={styles.headerSecure}>
    
      <TextInput
        placeholder={ph}
        placeholderTextColor='#351313'
        secureTextEntry={secure && secureMode}
        autoComplete={autoComplete}
        autoCapitalize =  "none"
        maxLength={42}
        value={value}
        onChangeText={onChangeText}
        style={[
          isWeb ? styles.inputComponent : styles.inputComponentMobile,
          {
            borderColor : '#351313',
            fontFamily: 'DGrotesque-SemiBold',
            fontSize: 18,
          }
        ]}
      />
      {secure && (
        <Pressable
          style={ isWeb ? styles.inputIcon : styles.inputIconMobile}
          onPress={() => setSecureMode(!secureMode)}
        >
          <Icon
            name={secureMode ? 'eye-off' : 'eye'}
            size= {22}
            color="#351313"
          />
        </Pressable>
      )}
    </View>
  );
}

export default function Input(props) {
  return <Password {...props} />;
}