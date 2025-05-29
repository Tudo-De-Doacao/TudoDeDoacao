import {StyleSheet, Dimensions} from 'react-native';

import colors from "./color";

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.61;
const styles = StyleSheet.create ({
 tabBar:
  {
    height: 70,
    backgroundColor: colors.background,
    elevation: 10,
    paddingTop: 10,
    position: 'absolute',
  },
 iconTab :
  {
    padding: 6,
 },
 headerSecure: 
 {
   marginVertical: 10,
   justifyContent: 'center',
   alignItems: 'center',  
  flexDirection: 'row',

 },
  loginInput: 
 {
   flex : 1,
   justifyContent: 'center',
   alignItems: 'center',  
 },
 headerBar: 
 {  
    height: 70,
    elevation: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.marker,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',   
 },
 bottomBar: 
 {
    height: 70, 
    width: width,
    elevation: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderTopColor: colors.marker,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-end',   
 },
 inputIcon: 
 {
   right: -40,
   height: 20,
   position: 'absolute',
   flexDirection: 'row',
   alignSelf: 'center',
 },
 iconCont :
  {
    flex: 1,
    paddingHorizontal: 14,
    marginHorizontal: 8,
    maxHeight: 32,
    maxWidth: 32,
    alignSelf: 'center',
   },
  logo:
  {
    flex: 1,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 4,
    paddingBottom: 10,
    maxHeight: 40,
    maxWidth: 40,
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
  inputComponent: 
  {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 16,
    marginVertical: 6,
    width: 200,
    height: 32,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.marker,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    textTrasnform: 'capitalize',
  },
  iconHeader: 
  {
    maxHeight: 35,
    maxWidth: 35,
    alignSelf: 'center'
  },
  iconBtnBottom: 
  {
    minHeight: 32,
    minWidth: 32,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  iconMapHeader :
  {
    paddingRight: 2,
 },
  card: 
  {
    width: CARD_WIDTH,
    maxWidth: 200,
    height: 280,
    borderRadius: 8,
    borderWidth: 2,
    marginVertical: 18,
    borderColor: colors.marker,
    backgroundColor: colors.background,
    alignSelf: 'flex-start',
    overflow: 'hidden',   
  },
  bodyCard: 
  {
    
    flexDirection: 'row',
    gap: 20,
    paddingRight: 16,
  },
  infoBox: 
  {
    margin:8,
    gap:2,
    paddingLeft: 10,
    
  },
  locationCard: 
  {
    gap: 2,
    marginBottom: 2,
    paddingTop: 8,
    flexDirection: 'row',


  },
  imageBox: 
  {
    height: 100,
    backgroundColor: '#A97E76',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: 
  {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.1,
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'column',
    padding: 4,
    gap: 8,
  },
  bgimagem: 
  {
     width: width,
     height: height,
     flex: 1
  },
  bodyBtnBottom: 
  {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   flex: 1, 
  },
  navBtn: 
  {
     flex: 1,
    maxHeight: 40,
    maxWidth: 132,
    marginVertical: 16,
    paddingVertical: 16,
    width: width,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colors.marker,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomBtn: {
    flex: 1,
    maxHeight: 50,
    maxWidth: 132,
    marginHorizontal: 10,
    width: width,
    backgroundColor: colors.primary,
    borderWidth: 2,

    borderRadius: 50,
    borderColor: colors.marker,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainBtn: 
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


