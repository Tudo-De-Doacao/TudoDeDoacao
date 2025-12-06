import { StyleSheet, Dimensions, Platform } from 'react-native';

import colors from './color';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.61;
const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS ===  'android'

const styles = StyleSheet.create({
  tabBar: {
    height: isWeb ? 70 : 70,
    backgroundColor: colors.background,
    elevation: 10,
    paddingTop: 10,
    position: 'absolute',
  },
  iconTab: {
    padding: isWeb ? 6 : 0,
    resizeMode: 'contain'
  },
  headerSecure: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerSearch: {
    paddingHorizontal: 16,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loginInput: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBar: {
    height: isWeb ? 70 : 120,
    elevation: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.marker,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bottomBar: {
    height: isWeb ? 70 : 80,
    width: width,
    elevation: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderTopWidth: isWeb ? 2 : 1,
    borderTopColor: colors.marker,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  inputIcon: {
    right: -40,
    height: 20,
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  inputIconMobile: {
    
    position: 'absolute',
    right: -40,
    minHeight: '15%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconCont: {
    paddingRight: isWeb ? 8 : 12,
    marginHorizontal: isWeb ? 4 : 8,
    minHeight: isWeb ? 32 : 28,
    minWidth: isWeb ? 32 : 28,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: isWeb ? 8 : 12,
    marginTop: isWeb ? 12 : 40,
    marginBottom: 4,
    paddingTop: isWeb ? 4 : 24,
    paddingBottom: 10,
    minHeight: isWeb ? 32 : 24,
    minWidth: isWeb ?  32 : 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputSearch: {
    
    paddingLeft: 20,
    paddingRight: 16,
    marginVertical: 6,
    width: width * 0.80,
    height: isWeb ? 32: 50,
    borderWidth: 2,
    borderRadius: 200,
    fontFamily: 'DGrotesque-Medium',
    fontSize : isWeb ? 18 : 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },
  inputComponent: {

    paddingLeft: isWeb ? 20 : 0 ,
    paddingRight: isWeb ? 16 : 0,
    width: 200,
    height: isWeb ? 36 : 48,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.marker,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },
  inputComponentMobile: {

    paddingLeft: 20,
    paddingRight: 16,
    marginVertical: 6,
    width: width * 0.70,
    minHeight: 44,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: colors.marker,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },
  iconHeader: {
    minHeight: isWeb ? 32 : 28,
    minWidth: isWeb ? 32 : 28,
    paddingTop: isWeb ? 0 : 24,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  iconFilterMob: {
    minHeight: isWeb ? 22 : 16,
    minWidth: isWeb ? 22 : 16,
    marginHorizontal : 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  iconBtnBottom: {
    minHeight: 32,
    minWidth: 32,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  iconMapHeader: {
    paddingRight: 2,
  },
  cardScreen: {
    maxWidth: 200,
    height: height,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  card: {
    width: CARD_WIDTH,
    maxWidth: 200,
    height: 360,
    borderTopLeftRadius : 0,
    borderTopRightRadius : 0,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 18,
    marginBottom: 20,
    paddingBottom: 20,
    borderColor: colors.marker,
    backgroundColor: colors.background,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  bodyCard: {
    flexDirection: 'row',
    paddingLeft: 22,
    paddingHorizontal: 4,
    paddingBottom: 20,
  },
  infoBox: {
    margin: 4,
    height: "100%"

  },
  locationCard: {
    gap: 2,
    marginBottom: 2,
    paddingTop: 8,
    flexDirection: 'row',
    
  },
  imageBox: {
    height: 180,
    borderTopWidth: 3, 
    borderBottomWidth: 3,
    borderColor: colors.marker,
    backgroundColor: '#A97E76',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBoxScreen: {
    height: 100,
    backgroundColor: '#A97E76',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch'

  },
  scroll: {
    paddingBottom: 25,
  },
  sideBar: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bodyPrin: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 12,
  },
  bodySearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 120,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 42,
    gap: 8,

  },
  bgimagem: {
    width: width,
    height: height,
    flex: 1,
  },
  bodyBtnBottom: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButton:
  {
    justifyContent: 'center',
    alignItems: 'center',
   flexDirection : 'row',
   width : width,
   paddingHorizontal: 12,
   gap: 4,
  },
  filterBtn: {
    paddingHorizontal: isWeb ?  12 : 6,

    height: 40,
    minWidth: 100,
    marginVertical: 24,
    
    marginHorizontal: 4, 
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 999,
    flex: isWeb ? 1 : 0 ,
    borderColor: colors.marker,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  regBtn: {
    minHeight: isWeb ? 44 : 54,
    minWidth: isWeb ? 132 : '30%',
    marginTop: 16,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 500,
    borderColor: colors.marker,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBtn: {
    maxHeight: 50,
    maxWidth: 132,
    marginHorizontal: isWeb ?  10 : 20,
    width: width,
    backgroundColor: colors.primary,
    borderWidth: 2,

    borderRadius: 50,
    borderColor: colors.marker,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBtn: {
    height: 50,
    width: 150,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDrw: {
    flex: 1,
    backgroundColor: colors.background,
  },
  drw: {
    position: 'absolute',
    top: 0,
    left: 0,
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
  savedCard:{
     width: CARD_WIDTH,
    maxWidth: 200,
    height: 440,
    borderTopLeftRadius : 0,
    borderTopRightRadius : 0,
    borderRadius: 8,
    borderWidth: 2,
    marginVertical: 18,
    marginBottom: 20,
    paddingBottom: 20,
    borderColor: colors.marker,
    backgroundColor: colors.background,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  imageBoxSavedCard:{
    height: isWeb? 260: 260,
    borderTopWidth: isWeb? 1 : 0, 
    borderBottomWidth: 3,
    borderColor: colors.marker,
    backgroundColor: '#A97E76',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSavedCard:{
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
   infoBoxSavedCard: {
    margin: 8,
    gap: 2,
    paddingLeft: 10,
  },
  locationSavedCard: {
    gap: 2,
    marginBottom: 2,
    paddingTop: 8,
    flexDirection: 'row',
  },
  donationFavContainer:{
  borderWidth: 1,
    height: 500,
    width: "100%",
    overflow: "hidden"

  },
  favoriteTextContainer:{
    alignSelf: "center"

  },
  titleFavContainer:{
    overflow: "hidden",
    width: "100%",
    height: "20%"
  },
  clockIconStyle:{
    padding: isWeb? 4: 18,
    // marginTop: isWeb? "1%":"1%" ,
    alignContent: "center",
    alignSelf: "center",
    
    marginTop: isWeb? 10 : 3
  },
  heartIconStyle: {
     padding: isWeb? 4: 18,
    // marginTop: isWeb? "1%":"1%" ,
    alignContent: "center",
    alignSelf: "center",
   
    marginTop: isWeb? 10 : 3
  },
  iconTextContainer:{
    
     width: "100%",
     height: "96%",
     flexDirection: "row"
  },
  imageTreeBranch: {
    width: isWeb? "15%" : "45%", 
    height: isWeb? "100%" : "100%", 
    position: "absolute", 
    left: isWeb? "85%" : "55%"
  },
  imageTrunk:{
    width: isWeb? "15%" : "45%", 
    height: isWeb? "200%" : "300%", 
    // transform: [{ rotate: "180deg"}],
    position: "absolute", 
    left: isWeb? "92.5%" : "76%",
    bottom: isWeb? "0%" : "0%"
  },
  requestContainer:{
    borderWidth: 1,
    height: isWeb? 130 : 130,
    width: isWeb? 300 : 430,
    borderRadius: 19,
    backgroundColor: colors.background,
    flexDirection: "row",
    alignItems: "center"

  },
  ImageCardRequest:{
    borderWidth: 1,
    resizeMode: "cover",
    height: isWeb? 50 : 50,
    width: isWeb? 50 : 50,
    borderRadius: 100
  },
  imageCardRequestContainer:{
    height: isWeb? 100 : 97,
    width: isWeb? 75 : 75,

    alignItems: "center",
    justifyContent: "center"
  },
  dataContainerDonate:{
    width: isWeb? 200 : 200,
   
  },
  donationNameContainer:{
   
  },
  donationNameText:{
    fontSize: isWeb? 25 : 25
  },
  requestUserContainer:{
  
  },
  requestUserText:{
    fontSize: isWeb? 18 : 18
  },
  requestLocalContainer:{
  
  },
  requestLocalText:{
    fontSize: isWeb? 18 : 18,
  },
  requestDateContainer:{
   
  },
  requestDateText:{
    fontSize: isWeb? 10 : 10,
  },
  containerButtons:{
   
    width: isWeb? 130 : 130,
    flexDirection: "row",
    alignItems: "center",
   justifyContent: "space-around",
   borderRadius: 20
  },
  acceptButton:{
    height: isWeb? 15 : 60,
    width: isWeb? 50 : 50,
    alignItems: "center"
  },
  declineButton:{
     height: isWeb? 60 : 60,
     width: isWeb? 50 : 50,
     alignItems: "center"
  },
  requestListContainer:{
    flex: 1,
  }

});

export default styles;