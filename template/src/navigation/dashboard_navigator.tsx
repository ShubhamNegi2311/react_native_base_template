import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ms} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from 'screens/dashboard/home';
import ProfileScreen from 'screens/dashboard/profile';
import SettingsScreen from 'screens/dashboard/settings';
import {TabBarParamList} from 'types/navigation_types';

const TabBar = createBottomTabNavigator<TabBarParamList>();

const DashboardNavigator: React.FC = () => {
  const iconSize = ms(25);
  return (
    <TabBar.Navigator>
      <TabBar.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={iconSize}
              />
            );
          },
        }}
      />
      <TabBar.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'account' : 'account-outline'}
                size={iconSize}
              />
            );
          },
        }}
      />
      <TabBar.Screen
        name={'SettingsScreen'}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'cog' : 'cog-outline'}
                size={iconSize}
              />
            );
          },
        }}
      />
    </TabBar.Navigator>
  );
};

export default DashboardNavigator;
