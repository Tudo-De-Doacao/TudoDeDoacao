import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons} from '@expo/vector-icons';

import H1 from "./H1";

function Header () {
return (
<View>
<Image />
<H1>
Cabeçalho 
</H1>
<View> 
<TouchableOpacity>
<Ionicons  name = 'search' size={24} color='#351313' />
</TouchableOpacity>
<TouchableOpacity>

</TouchableOpacity>

</View>  
</View>
);
}