import { View, Platform } from 'react-native';
import BottomBtn from './BottomButton';

import styles from '../styles/index';
import colors from '../styles/color';
import RequestButton from './RequestButton';


export default function TabDonation () {
const isWeb = Platform.OS === 'web';

return (

<View style={styles.bottomBar}>

<RequestButton />
</View>  
);
}


