import { useFonts } from 'expo-font';
import {  Text } from 'react-native';

import typog from "../styles/type";

 function H1({ children, style, ...props }) {
  const [fontsLoaded] = useFonts({
  'DGrotesque': require('../assets/GrotesqueFont.ttf'),
});

  if (!fontsLoaded) return null;

  return (
    <Text style={[typog.h1, style]} {...props}>
      {children}
    </Text>
  );
}


export default H1;