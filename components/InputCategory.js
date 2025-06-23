import { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  FlatList,
  Pressable,
  Platform,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../styles/color';
import styles from '../styles/index';
import typog from '../styles/type';

const categorias = ['Móveis', 'Decoração', 'Infantil', 'Eletrônicos', 'Roupas'];

export default function InputCategory({ value, onChangeText, ph }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const isWeb = Platform.OS === 'web';

  const handleFocus = () => {
    setDropdownVisible(true);
    setFilteredOptions(categorias);
  };

  const handleChange = (text) => {
    onChangeText(text);
    if (text.length === 0) {
      setFilteredOptions(categorias);
    } else {
      const filtered = categorias.filter((cat) =>
        cat.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
    setDropdownVisible(true);
  };

  const handleSelect = (categoria) => {
    onChangeText(categoria);
    setDropdownVisible(false);
    Keyboard.dismiss();
  };

  return (
    <View style={{ width: isWeb ? 200 : '70%', alignItems: 'center' }}>
      <View style={{ position: 'relative', width: '100%' }}>
        <TextInput
          placeholder={ph}
          placeholderTextColor="#351313"
          value={value}
          onFocus={handleFocus}
          onChangeText={handleChange}
          style={[
            isWeb ? styles.inputComponent : styles.inputComponentMobile,
            {
              borderColor: '#351313',
              fontFamily: 'DGrotesque-SemiBold',
              fontSize: 18,
              paddingRight: 35, // espaço para o ícone
            },
          ]}
        />
        <Icon
          name={dropdownVisible ? 'chevron-up' : 'chevron-down'}
          size={22}
          color="#351313"
          style={{
            position: 'absolute',
            right: 12,
            top: Platform.OS === 'web' ? 5 : 20,
            zIndex: 10,
          }}
        />
      </View>

      {dropdownVisible && (
        <FlatList
          data={filteredOptions}
          keyExtractor={(item) => item}
          style={{
            backgroundColor: colors.background,
            borderWidth: 2,
            borderColor: colors.marker,
            borderRadius: 8,
            marginTop: 4,
            width: '100%',
            zIndex: 1000,
          }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleSelect(item)}
              style={{
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: colors.marker,
              }}>
              <Text style={typog.txtNavBtn}>{item}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}