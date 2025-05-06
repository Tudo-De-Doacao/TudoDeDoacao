import { useFonts } from 'expo-font';
import {  Text, StyleSheet } from 'react-native';

export default function H1({ children, style, ...props }) {
  const [fontsLoaded] = useFonts({
  'DGrotesque': require('../assets/GrotesqueFont.ttf'),
});

  if (!fontsLoaded) return null;

  return (
    <Text style={[styles.h1, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    marginTop: 10,
    marginLeft: 20,
     top: 12,
    bottom: 12,
    gap: 5,
    
    color: '#351313',
    fontFamily: 'DGrotesque',
    fontSize: 20,
    fontWeight : "bolder"
  },
});
