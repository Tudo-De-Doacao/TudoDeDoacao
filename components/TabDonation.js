import { View } from 'react-native';
import BottomBtn from './BottomButton';

import styles from '../styles/index';
import colors from '../styles/color';


export default function TabDonation () {


return (

<View style={styles.bottomBar}>
<BottomBtn 
route ="Home"
text = "Dúvidas"
icon = 'message-square'
/>
<BottomBtn
route ="Home"
text = "Aceitar"
icon = ""
 />
</View>  
);
}


