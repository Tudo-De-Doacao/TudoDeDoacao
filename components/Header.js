import { View,  Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import H1 from "./H1";
import styles from '../styles/index';

export default function Header () {
return (
<View style={styles.headerBar}>
<Pressable>
<Image />
</Pressable>
<H1>
Cabeçalho 
</H1>
<View> 
<Pressable style={styles.iconHeader}>
<Icon name = 'search' size={24} color='#351313' />
</Pressable>

</View>  
</View>
);
}
