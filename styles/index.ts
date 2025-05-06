import {StyleSheet, Dimensions} from 'react-native';

import colors from "./color";
import typog from "./type";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create ({
 scroll: 
 {
    paddingBottom: 10,
 },
  sideBar: 
  {
    flex: 1,
    paddingHorizontal: 16,
  },
  navigatioDrawer: 
  {
    backgroundColor: '#ecf0f1',
  },
  body: 
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
  pressDraw: 
  {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
}
);


export default { styles, typog, colors };


