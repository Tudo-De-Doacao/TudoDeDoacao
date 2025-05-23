import colors from "./color";

const typog = {
   h1: {
    marginTop: 10,
    marginLeft: 20,
     top: 12,
    bottom: 12,
    gap: 5,
    fontSize: 20,
    color: colors.marker,
    fontFamily: 'DGrotesque',
    fontWeight : "bolder"
  },
  tabOn: {
   fontFamily: 'DGrotesque',
    fontSize: 18,  
    fontWeight : "bolder",
    color: colors.marker,
    gap:3,
    margin: 5,
  },
   tabOff: {
   fontFamily: 'DGrotesque',
    fontSize: 18,  
    fontWeight : 500,
    color: colors.marker,
    gap: 3,
    margin: 5,
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
    fontWeight: 'bolder',
    fontFamily: 'DGrotesque',
    alignSelf: 'flex-end',
    marginBottom: 5, 
           },
  txtDrw: {
    padding: 8,
    fontSize: 24,
    marginBottom : 5,
    textAlign: 'right',
    fontWeight: 'bold',
    fontFamily: 'DGrotesque',
  },
  titleCard: 
  {
    fontSize: 20,
    marginBottom : 8,
    fontWeight: 580,
    textAlign: 'left',
    fontFamily: 'DGrotesque',
  },
  txtCard: 
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
    fontFamily: 'DGrotesque',
    color: colors.marker,
    
  }
};

export default typog;