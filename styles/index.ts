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
    paddingTop: 25,
  },
 iconTab :
  {
    marginTop : 20,
    marginBottom: 10,
    gap : 5,
    paddingBottom: 10,
 },
 headerBar: 
 {  
   height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
 },
 iconCont :
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
    marginHorizontal: 12,
    alignItems: 'center',
    paddingHorizontal: 10,
    maxHeight: 32,
    maxWidth: 32,
 },
logo: {
 height: 50,
 width: 50,
 alignSelf: 'center'
},
inputHeader: {
    flex: 1,
    height: 36,
    color: colors.marker,
  },
iconHeader: {
 height: 35,
 width: 35,
 alignSelf: 'center'
},
 scroll: 
 {
    paddingBottom: 25,
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
  },
  separatorMenu: {
    width: '100%',
    borderBottomWidth: 4,
    borderBottomColor: colors.marker,
    borderStyle: 'solid', 
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  separatorHome: {
    borderBottomWidth: 2,
    borderBottomColor: colors.marker,
    borderStyle: 'solid', 
    marginVertical: 5,
    width: '95%',
    alignSelf: 'flex-end',
  },
  separatorSearch: {
    borderBottomWidth: 2,
    borderBottomColor: colors.marker,
    borderStyle: 'solid', 
    marginVertical: 5,
    width: '90%',
    alignSelf: 'flex-end',
  },
  separatorDonate: {
    borderBottomWidth: 2,
    borderBottomColor: colors.marker,
    borderStyle: 'solid', 
    marginVertical: 5,
    width: '85%',
    alignSelf: 'flex-end',
  },
  separatorFavorite: {
    borderBottomWidth: 2,
    borderBottomColor: colors.marker,
    borderStyle: 'solid', 
    marginVertical: 5,
    width: '80%',
    alignSelf: 'flex-end',
  },
}
);


export default styles;


