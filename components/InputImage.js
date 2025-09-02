import { useState } from 'react';
import { View, Image, Text, Pressable, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import colors from '../styles/color';
import styles from '../styles/index';
import typog from '../styles/type';

export default function InputImage({ value, onChange }) {
  const [image, setImage] = useState(value);

  const isWeb = Platform.OS === 'web';

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'], 
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
      });

      console.log("[pickImage] Resultado do picker:", result);

      if (!result.canceled && result.assets?.length > 0) {
        const asset = result.assets[0];

        const imageObject = {
          uri: asset.uri,
          type: asset.mimeType ?? 'image/jpeg',
          fileName: asset.fileName ?? asset.uri.split('/').pop(),
        };

        setImage(imageObject);
        onChange(imageObject);
      } else {
        console.log("[pickImage] Seleção cancelada pelo usuário ❌");
      }
    } catch (error) {
      console.error("[pickImage] Erro ao abrir galeria:", error);
      Alert.alert("Erro", "Não foi possível selecionar a imagem.");
    }
  };

  return (
    <View style={{ ...styles.headerSecure, flexDirection: 'column' }}>
      <Pressable
        onPress={pickImage}
        style={[
          isWeb ? styles.inputComponent : styles.inputComponentMobile,
          { marginVertical: 12 },
        ]}
      >
        <Text style={{ ...typog.txtNavBtn, fontFamily: 'DGrotesque-Medium' }}>
          Selecionar Imagem
        </Text>
      </Pressable>

      {image && (
        <>
          <Text style={{ ...typog.txtNavBtn, fontFamily: 'DGrotesque-SemiBold' }}>
            Imagem carregada com sucesso
          </Text>
          <Image
            source={{ uri: image.uri }}
            style={{ width: 120, height: 120, borderRadius: 10, marginTop: 10 }}
          />
        </>
      )}
    </View>
  );
}
