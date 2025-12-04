import { useState } from 'react'; 
import { Platform, TouchableOpacity, View } from 'react-native'; 
import { TextInput } from 'react-native-paper'; 
import {Ionicons} from '@expo/vector-icons'; 

import styles from '../styles/index'; 
import colors from '../styles/color'; 

export default function SecurityInput({ label, value, secure, autoComplete, disabled, placeholder, onChangeText }) { 

    const [secureMode, setSecureMode] = useState(true); 
  const isWeb = Platform.OS === 'web'; 

  return ( 
    <View style={styles.bodyPrin}> 
      <TextInput 
        label={label} 
        disabled={disabled} // Mudar para true quando for email, do contrário deixar sempre falso ou nulo 
        placeholder={placeholder} 
        secureTextEntry={secure && secureMode} 
        autoComplete={autoComplete} 
        autoCapitalize =  "none" 
        maxLength={32} 
        value={value} 
        onChangeText={onChangeText} 
        mode={'outlined'} 
        right={secure ? (
          <TextInput.Icon
          icon={secureMode ? "eye-off" : "eye"}
          onPress={() => setSecureMode(!secureMode)}
          style={{marginTop: isWeb ? 15: 15}}
          />
        ) : null}
        style={{ 
          borderColor: colors.marker, 
          fontSize: 20, 
          width: 220, 
          height: isWeb ? 36 : 48, 
          padding: 10
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
       {/* {secure && ( 
        <View style={{ zIndex: 1, width: 30, borderWidth: 1}}> 
            <TouchableOpacity onPress={() => setSecureMode(!secureMode)}> 
                <Ionicons name={secureMode? "eye-off" : "eye"} size={20} color="#333"></Ionicons> 
            </TouchableOpacity> 
        </View> 
          )}  */}
    </View> 
  ); 
} 