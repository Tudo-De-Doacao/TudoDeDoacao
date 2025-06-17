import { StyleSheet, Dimensions } from 'react-native';
import colors from './color';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.61;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: colors.background,
    elevation: 10,
    paddingTop: 10,
    position: 'absolute',
  },
  iconTab: {
    padding: 6,
  },
  headerBar: {
    height: 70,
    elevation: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.marker,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCont: {
    flex: 1,
    paddingHorizontal: 14,
    marginHorizontal: 8,
    maxHeight: 32,
    maxWidth: 32,
    alignSelf: 'center',
  },
  logo: {
    flex: 1,
    paddingHorizontal: 14,
    marginHorizontal: 8,
    maxHeight: 40,
    maxWidth: 40,
    height: 40,
    width: 40,
    position: 'relative',
    alignSelf: 'center',
  },
  inputHeader: {
    flex: 1,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    width: 30,
    height: 36,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.marker,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  iconHeader: {
    maxHeight: 35,
    maxWidth: 35,
    alignSelf: 'center',
  },
  iconMapHeader: {
    paddingRight: 2,
  },
  card: {
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
  cardExpandido: {
    width: '100%',
    padding: 16,
    borderWidth: 2,
    borderColor: colors.marker,
    backgroundColor: '#FFE8E2',
    borderRadius: 12,
    marginTop: 20,
    alignSelf: 'center',
  },
  botaoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  botaoPrincipal: {
    flex: 1,
    backgroundColor: colors.active,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 6,
  },
  botaoSecundario: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTextoBranco: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botaoTextoEscuro: {
    color: '#2e1e1c',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bodyCard: {
    flexDirection: 'row',
    marginRight: 20,
    paddingRight: 16,
  },
  infoBox: {
    margin: 8,
    paddingLeft: 10,
    marginBottom: 2,
  },
  locationCard: {
    marginBottom: 2,
    paddingTop: 8,
    flexDirection: 'row',
  },
  bgimagem: 
  {   
     width: width,
     height: height,
     flex: 1,
    
  },
  imageBox: {
    height: 100,
    backgroundColor: '#A97E76',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.1,
  },
  imageDonation: {
    backgroundColor: colors.background,
    height: 200,
    width: width,
    resizeMode: 'cover',
    borderRadius: 15,
    alignSelf: 'center',
    marginVertical: 10,
  },
  h1: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 20,
    fontWeight: '600',
    color: '#2e1e1c',
  },
  duvidasText: {
    color: '#2e1e1c',
    textDecorationLine: 'underline',
    marginTop: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 20,
    width: '85%',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e1e1c',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2e1e1c',
  },
  // Continue o restante seguindo o mesmo padrão...
});

export default styles;
