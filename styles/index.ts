import {StyleSheet, Dimensions} from 'react-native';

import colors from "./color";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create ({
tabBar:
 {
    height: 70,
    backgroundColor: colors.background,
    elevation: 10,
    position: 'absolute',
    paddingTop: 5,
  },
 iconTab :
  {
    marginTop : 20,
    marginBottom: 10,
    gap : 5,
    paddingBottom: 10,
 },
 scroll: 
 {
    paddingBottom: 10,
 },
  sideBar: 
  {
    flex: 1,
    paddingHorizontal: 16,
  },
  bodyPrin: 
  {
    borderRadius: 30, 
    alignItems: 'center'
  },
  bgimagem: 
  {
     width: width,
     height: height,
     flex: 1
  },
  btnBody: {
    margin: 80,
    gap: 2,
    backgroundColor: "#000",
    height: height,
    width: width,
    flex : 1, 
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  btnMain: 
  {
    height: 50,
    width: 150,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnHover: 
  {
    backgroundColor: colors.background,
    borderColor: '#000',
  },
 containerDrw: {
    flex: 1,
    backgroundColor: colors.background,
  },
  drw: {
    position: 'absolute',
    top: 0,
    left: 0, // drawer vindo da esquerda
    width: width,
    height: '100%',
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 20,
    elevation: 5,
      },
  drwCont: {
    flex: 1,
  drawerSeparator: {
    borderWidth: 1,
    borderColor : colors.marker,
  }
  },
}
);


export default styles;


