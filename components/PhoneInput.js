import { View, Platform } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper"; 

import colors from '../styles/color';
import styles from "../styles/index";

function phoneFormat(text) {
  const cleanPhone = text.replace(/\D/g, ""); 

  if (cleanPhone.length <= 2) {
    return `(${cleanPhone}`;
  } else if (cleanPhone.length <= 7) {
    return `(${cleanPhone.slice(0, 2)}) ${cleanPhone.slice(2)}`;
  } else {
    return `(${cleanPhone.slice(0, 2)}) ${cleanPhone.slice(2, 7)}-${cleanPhone.slice(7, 11)}`;
  }
}

function Input({ value, onChangeText }) {
  const [displayValue, setDisplayValue] = useState(value || "");
  const isWeb = Platform.OS === "web";

  const handleChange = (text) => {
    const cleanPhone = text.replace(/\D/g, "");
    const formatted = phoneFormat(cleanPhone);

    setDisplayValue(formatted);
    onChangeText(cleanPhone);  
  };

  return (
    <View style={styles.headerSecure}>
      <TextInput
        label="Celular"
        mode="outlined"
        placeholder="Digite seu celular"
        placeholderTextColor="#351313"
        autoComplete="tel"
        autoCapitalize="none"
        keyboardType="phone-pad"
        maxLength={15}
        value={displayValue}
        onChangeText={handleChange}
        outlineColor="#351313"
        activeOutlineColor="#351313"
         style={{
          borderColor: colors.marker,
          fontSize: 20,
          width: 240,
          height: isWeb ? 36 : 48,
          padding: 2,
        }}
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

export default function PhoneInput(props) {
  return <Input {...props} />;
}
