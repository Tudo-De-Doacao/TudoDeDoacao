import { View, TextInput, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/index';


export default function Header () {

const navigation = useNavigation();


return (


<View style={styles.headerBar}>
<Pressable onPress={() => navigation.navigate('Home')}>
<Image 
source={require('../assets/Logo.png')}
style={styles.logo}/>
</Pressable>
<TextInput 
placeholder = "O que você procura?"
style={styles.inputHeader}
/>
<Pressable 
style={styles.iconCont}
onPress={() => navigation.navigate('Search')}>
<Icon name = 'search' size={32} color='#351313' style={styles.iconHeader} />
</Pressable>

</View>  
);
}
