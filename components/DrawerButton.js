import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function DrawerBtn(props) {
  const navigation = useNavigation();

  return (
    <Pressable
      {...props}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Icon name="menu" size={30} color="#351313" />
    </Pressable>
  );
}