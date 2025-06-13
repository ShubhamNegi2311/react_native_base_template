import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {CommonActions} from '@react-navigation/native';
import BaseText from 'components/base_components/base_text';
import React from 'react';
import {
  BottomNavigation,
  Icon,
  MD3CustomTheme,
  useTheme,
} from 'react-native-paper';
import {DashbordBottomTabBarParamList} from 'types/navigation_types';
import {
  BottomTabBarIconSize,
  BottomTabBarLabelSize,
  MaterialIcon,
  SCREEN_HEIGHT,
} from 'utilities/constants';

const getBottomTabIcon = (
  name: string,
  focused: boolean,
  theme: MD3CustomTheme,
) => {
  const getIconName = () => {
    const tabName = name as keyof DashbordBottomTabBarParamList;
    switch (tabName) {
      case 'HomeScreen':
        return focused ? MaterialIcon.HOME : MaterialIcon.HOME_OUTLINE;
      case 'ProfileScreen':
        return focused ? MaterialIcon.ACCOUNT : MaterialIcon.ACCOUNT_OUTLINE;
      case 'SettingsScreen':
        return focused ? MaterialIcon.SETTINGS : MaterialIcon.SETTINGS_OUTLINE;
    }
  };
  return (
    <Icon
      source={getIconName()}
      size={BottomTabBarIconSize}
      color={
        focused
          ? theme.colors.bottomTabBar.iconSelected
          : theme.colors.bottomTabBar.iconUnselected
      }
    />
  );
};

const getTabName = (name: string) => {
  const tabName = name as keyof DashbordBottomTabBarParamList;
  switch (tabName) {
    case 'HomeScreen':
      return 'Home';
    case 'ProfileScreen':
      return 'Account';
    case 'SettingsScreen':
      return 'Settings';
  }
};

const BottomTabBarComp: React.FC<BottomTabBarProps> = props => {
  const {navigation, state, descriptors, insets} = props;
  const theme = useTheme();
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      style={{
        height: SCREEN_HEIGHT * 0.1,
        backgroundColor: theme.colors.statusBar.backgroundColor,
      }}
      activeIndicatorStyle={{
        backgroundColor: theme.colors.secondary,
      }}
      onTabPress={({route, preventDefault}) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({route: {name}, focused}) =>
        getBottomTabIcon(name, focused, theme)
      }
      renderLabel={({route, focused}) => (
        <BaseText
          style={[
            focused ? theme.fonts.bold : theme.fonts.regular,
            {
              alignSelf: 'center',
              color: theme.colors.textColor.white,
              fontSize: BottomTabBarLabelSize,
            },
          ]}
          children={getTabName(route.name)}
        />
      )}
    />
  );
};

const BottomTabBarView = React.memo(BottomTabBarComp);
export default BottomTabBarView;
