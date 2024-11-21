import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconView} from 'components/molecules/icon_view';
import React from 'react';
import {ms} from 'react-native-size-matters';
import HomeScreen from 'screens/dashboard/home';
import ProfileScreen from 'screens/dashboard/profile';
import SettingsScreen from 'screens/dashboard/settings';
import {TabBarParamList} from 'types/navigation_types';
import {IconType} from 'utilities/enums';

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
              <IconView
                iconName={focused ? 'home' : 'home-outline'}
                iconSize={iconSize}
                iconType={IconType.MaterialCommunity}
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
              <IconView
                iconName={focused ? 'account' : 'account-outline'}
                iconSize={iconSize}
                iconType={IconType.MaterialCommunity}
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
              <IconView
                iconName={focused ? 'cog' : 'cog-outline'}
                iconSize={iconSize}
                iconType={IconType.MaterialCommunity}
              />
            );
          },
        }}
      />
    </TabBar.Navigator>
  );
};

export default DashboardNavigator;
