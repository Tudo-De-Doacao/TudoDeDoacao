import {useState} from 'react';
import { Pressable,Text, StyleSheet,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HoverButton() {
  const [hoverOn, setHoverOn] = useState(false);
  const navigation = useNavigation();
  return (
    <>
    <View style = {styles.body}> 
    <Pressable 
   onHoverIn = {() => setHoverOn(true)}
   onHoverOut = {() => setHoverOn(false)}
   onPress={() => navigation.navigate('HomePage')}
   style = {[styles.button,  hoverOn && styles.buttonHover]}
   >
   <Text style={[ styles.text, hoverOn && styles.textHover]}>
    {hoverOn ? "SHOW ME" : "TRUTH"} 
   </Text>
   </Pressable>
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  body: {
  margin: 80,
  gap: 2,
  backgroundColor: "#000",
  height: 'full',
  width: 'full',
  flex : 1, 
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center'
  },
  text: {
    color: '#F6E310',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderColor: '#F6E310',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonHover: {
    backgroundColor: '#F6E310',
    borderColor: '#000',
  },
  textHover: {
    alignItems:'center', 
    color:"#000",
    justifyContent:'center'
  }

});
