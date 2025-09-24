<<<<<<< HEAD
import { View } from 'react-native';
=======
import { View, Platform } from 'react-native';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469
import BottomBtn from './BottomButton';

import styles from '../styles/index';
import colors from '../styles/color';


export default function TabDonation () {
<<<<<<< HEAD

=======
const isWeb = Platform.OS === 'web';
>>>>>>> 4a9db380a3690dca674e2cf1e608fd2c374bb469

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


