import React from 'react';
import Ionic  from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingScreen from './src/screens/SettingScreen';
import { StatusBar } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';


const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
    <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home':'home-outline';
            
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle-sharp':'person-circle-outline';
            
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings':'settings-outline';
            
          }
          else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp':'search-outline';
            
          }


          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
       
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
