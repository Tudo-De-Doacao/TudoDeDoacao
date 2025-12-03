import "react-native-reanimated";
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Text, Platform, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import typog from './styles/type';
import colors from './styles/color';
import styles from './styles/index';

import RequestScreen from "./src/pages/request";
import HomeScreen from './src/pages/home';
import RegisterScreen from './src/pages/register';
import LoginScreen from './src/pages/login';
import CardScreen from './src/pages/card';
import FavoriteScreen from './src/pages/favorite';
import SearchScreen from './src/pages/search';
import DonateScreen from './src/pages/donate';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const isWeb = Platform.OS === 'web';

function TabsNav() {
  const route = useRoute();

  return (
    <>
      {Platform.OS !== 'web' && route.name !== DonateScreen && (
        <View
          style={{
            position: 'absolute',
            bottom: 80,
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: colors.marker,
            zIndex: 1000,
          }}
        />
      )}

      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            const size = isWeb ? (focused ? 35 : 30) : focused ? 28 : 24;
            const color = focused ? '#D93036' : '#351313';
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Search':
                iconName = 'search';
                break;
              case 'Favorites':
                iconName = 'heart';
                break;
              case 'Donation':
                iconName = 'plus-circle';
                break;
              case 'Request':
                iconName = 'rotate-cw';
                break;
            }
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
                style={styles.iconTab}
              />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text style={ focused ? typog.tabOn : typog.tabOff}>
              {route.name}
            </Text>
          ),
          tabBarStyle: {
            height: isWeb ? 70 : 80,
            backgroundColor: colors.background,
            elevation: isWeb ? 10 : 0,
            position: 'absolute',
            paddingTop: 5,
            borderTopColor: colors.marker,
            borderTopWidth: isWeb ? 2 : 0,
          },
          headerShown: false,
        })}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Search" component={SearchScreen} />
        <Tabs.Screen
          name="Donation"
          component={DonateScreen}
          options={{
          }}
        />
        <Tabs.Screen name="Favorites" component={FavoriteScreen} />
        <Tabs.Screen name="Request" component={RequestScreen} />
      </Tabs.Navigator>
    </>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    DGrotesque: require('./assets/fonts/DarkerGrotesque-Regular.ttf'),
    'DGrotesque-Medium': require('./assets/fonts/DarkerGrotesque-Medium.ttf'),
    'DGrotesque-SemiBold': require('./assets/fonts/DarkerGrotesque-SemiBold.ttf'),
    'DGrotesque-Bold': require('./assets/fonts/DarkerGrotesque-Bold.ttf'),
    'DGrotesque-ExtraBold': require('./assets/fonts/DarkerGrotesque-ExtraBold.ttf'),
    'DGrotesque-Black': require('./assets/fonts/DarkerGrotesque-Black.ttf'),
    'DGrotesque-Light': require('./assets/fonts/DarkerGrotesque-Light.ttf'),
  });

  if (!fontsLoaded) return null;

{/* <Stack.Screen name="Register" component={RegisterScreen} /> <Stack.Screen name="Login" component={LoginScreen} />   <Stack.Screen name="Tabs" component={TabsNav} */}

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Tabs" component={TabsNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
