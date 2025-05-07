import { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native'; 
import Icon from 'react-native-vector-icons/Feather';

const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.7;

export default function CustomDrawerLayout() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  const toggleDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: isDrawerOpen ? -DRAWER_WIDTH : 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setDrawerOpen(!isDrawerOpen);
    });
  };

  return (
    <View style={styles.container}>
      {/* Botão para abrir o Drawer */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
           <Icon name = 'menu' />
      </TouchableOpacity>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Tela Principal</Text>
      </View>

      {/* Drawer */}
      <Animated.View
        style={[
          styles.drawer,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <Text style={styles.drawerTitle}>Menu</Text>
        <TouchableOpacity onPress={() => alert('Home')}>
          <Text style={styles.drawerItem}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Favoritos')}>
          <Text style={styles.drawerItem}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Doações')}>
          <Text style={styles.drawerItem}>Doações</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.drawerItem}>Fechar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  menuText: {
    fontSize: 30,
    color: '#351313',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: '#FFDADA',
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 20,
    elevation: 5,
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 15,
    color: '#351313',
  },
});
