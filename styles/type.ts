import colors from "./color";
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web'; 

const typog = {
  tabOn: {
   fontFamily: 'DGrotesque-SemiBold',
    fontSize: isWeb ?  18 : 20,  
    color: colors.marker,
   marginVertical : 5,

  },
   tabOff: {
   fontFamily: 'DGrotesque-Medium',
    fontSize: isWeb ?  18 : 20,  
    color: colors.marker,
   marginVertical : 5,

 
  },
  txtNavBtn: {
    fontSize:  18 ,
    margin: isWeb ? 8 : 4,
    textAlign: 'center',
    fontFamily: 'DGrotesque-Medium',
    color: colors.marker,
  },
  txtBtnBottom: 
  {
    fontSize: 18,
    marginLeft: 6,
    marginBottom: 8,
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: 'DGrotesque',
  },
  drwTitle: {
    marginRight: 10,   
    fontSize: 32,
    fontFamily: 'DGrotesque-Bold',
    alignSelf: 'flex-end',
    marginBottom: 5, 
           },
  txtDrw: {
    padding: 8,
    fontSize: 24,
    marginBottom : 5,
    textAlign: 'right',
    fontWeight: 'bold',
    fontFamily: 'DGrotesque-Medium',
  },
  titleCard: 
  {
    fontSize: 20,
    marginBottom : 8,
    fontWeight: 580,
    textAlign: 'left',
    fontFamily: 'DGrotesque-SemiBold',
  },
  txtCard: 
  {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 20,
    fontWeight: 500,
    textAlign: 'left',
    fontFamily: 'DGrotesque',
    color: colors.marker,
    
  },
  txtSearch: 
  {
    fontSize: 18,
    marginBottom: 8,
    lineHeight: 20,
    fontWeight: 500,
    textAlign: 'left',
    fontFamily: 'DGrotesque',
    color: colors.marker,
  },
  titleLogin: 
  {
    fontSize: 24,
    marginBottom: 8,
    padding: 10,
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: 'DGrotesque-SemiBold',
    color: colors.marker,
  },
  headerTitle:
  {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'DGrotesque-SemiBold',
    color: colors.marker,
    margin: isWeb ? 6 : 24,
  },
   nameSavedCard: 
  {
    fontSize: 20,
    marginBottom : 8,
    fontWeight: 580,
    textAlign: 'left',
    fontFamily: 'DGrotesque-SemiBold',
  },
   descriptionSavedCard: 
  {
    fontSize: 18,
    marginBottom: 18,
    lineHeight: 20,
    fontWeight: 500,
    textAlign: 'left',
    fontFamily: 'DGrotesque',
    color: colors.marker
  },
    locationTextSavedCard: 
  {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 20,
    fontWeight: 500,
    textAlign: 'left',
    fontFamily: 'DGrotesque',
    color: colors.marker,
    
  },
};

export default typog;