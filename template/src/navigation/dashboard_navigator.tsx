import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBarView from 'components/organisms/bottom_tab_bar';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreen from 'screens/dashboard/home';
import ProfileScreen from 'screens/dashboard/profile';
import SettingsScreen from 'screens/dashboard/settings';
import {DashbordBottomTabBarParamList} from 'types/navigation_types';
import {SCREEN_WIDTH} from 'utilities/constants';

const TabBar = createBottomTabNavigator<DashbordBottomTabBarParamList>();

const DashboardNavigator: React.FC = () => {
  const {top} = useSafeAreaInsets();
  return (
    <TabBar.Navigator
      tabBar={props => <BottomTabBarView {...props} />}
      screenOptions={{
        header: () => <View style={{height: top, width: SCREEN_WIDTH}} />,
      }}>
      <TabBar.Screen name={'HomeScreen'} component={HomeScreen} />
      <TabBar.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <TabBar.Screen name={'SettingsScreen'} component={SettingsScreen} />
    </TabBar.Navigator>
  );
};

export default DashboardNavigator;
