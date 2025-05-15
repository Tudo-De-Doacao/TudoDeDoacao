  

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';


import Icon from 'react-native-vector-icons/Feather';

import typog from './styles/type';
import colors from './styles/color';
import styles from './styles/index';

import DrawerScreen from './src/pages/drawer';
import HomeScreen from "./src/pages/home";
import LoginScreen from "./src/pages/login";
import FavoriteScreen from "./src/pages/favorite";
import SearchScreen from "./src/pages/search";
import DonateScreen from "./src/pages/donate";


const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabsNav() {
  return (
   <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName;
      const size = focused ? 35 : 30
      const color = focused ? '#D93036' : '#351313'
      switch (route.name) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Search':
          iconName = 'search';
          break;
        case 'Favorite':
          iconName = 'heart';
          break;
        case 'Donate':
          iconName = 'plus-circle';
          break;
        case 'Menu':
          iconName = 'menu'
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
    
    tabBarLabel: ({ focused }) =>
  <Text style={focused ? typog.tabOn : typog.tabOff}>
    {route.name}
  </Text>, 
      tabBarStyle: {
            height: 70,
            backgroundColor: colors.background,
            elevation: 10,
            position: 'absolute',
            paddingTop: 5,
            borderTopColor: colors.marker,
            borderTopWidth: 2,
          },
          headerShown: false,
  })}
>
  <Tabs.Screen name="Home" component={HomeScreen}  />    
  <Tabs.Screen name="Search" component={SearchScreen} />
  <Tabs.Screen name="Donate" component={DonateScreen} />
  <Tabs.Screen name="Favorite" component={FavoriteScreen} />
  <Tabs.Screen name="Menu" component={DrawerScreen} />
</Tabs.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer> 
     <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Tabs" component={TabsNav} />

 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


