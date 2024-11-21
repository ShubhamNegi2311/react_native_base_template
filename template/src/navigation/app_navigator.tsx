import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useThemeContext} from 'context/theme_provider';
import React from 'react';
import {useTheme} from 'react-native-paper';
import DashboardScreen from 'screens/dashboard';
import RecipesScreen from 'screens/recipes_screen';
import {AppStackParamList} from 'types/navigation_types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
  const {isDarkTheme} = useThemeContext();
  const theme = useTheme();
  return (
    <NavigationContainer
      theme={{
        dark: isDarkTheme,
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.background,
          text: theme.colors.textColor.regular,
          border: theme.colors.primary,
          notification: theme.colors.background,
        },
        fonts: {
          regular: {
            fontFamily: theme.fonts.regular.fontFamily,
            fontWeight: 'normal',
          },
          medium: {
            fontFamily: theme.fonts.semiBold.fontFamily,
            fontWeight: 'normal',
          },
          bold: {
            fontFamily: theme.fonts.bold.fontFamily,
            fontWeight: 'normal',
          },
          heavy: {
            fontFamily: theme.fonts.bold.fontFamily,
            fontWeight: 'normal',
          },
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: isDarkTheme ? 'light' : 'dark',
          statusBarAnimation: 'slide',
        }}>
        <Stack.Screen name={'DashBoardScreen'} component={DashboardScreen} />
        <Stack.Screen name={'RecipesScreen'} component={RecipesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
