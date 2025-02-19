import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useThemeContext} from 'context/theme_provider';
import React from 'react';
import {AppState, AppStateStatus, NativeEventSubscription} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import DashboardScreen from 'screens/dashboard';
import {setShowPrivacyGuard} from 'store/slices/app_data_slice';
import {AppStackParamList} from 'types/navigation_types';
import {IS_ANDROID, IS_IOS} from 'utilities/constants';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
  const theme = useTheme();
  const {isDarkTheme} = useThemeContext();
  const dispatch = useDispatch();

  React.useEffect(() => {
    let subscription: NativeEventSubscription | null = null;
    if (IS_IOS) {
      subscription = AppState.addEventListener('change', handleAppStateChange);
    }
    return () => {
      subscription && subscription?.remove();
    };
  }, []);

  const handleAppStateChange = (state: AppStateStatus) => {
    // for now we are skipping for android due to its limitations of not detecting app in recents
    if (IS_ANDROID) return;
    if (state === 'active') {
      dispatch(setShowPrivacyGuard(false));
    } else if (state === 'inactive') {
      dispatch(setShowPrivacyGuard(true));
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: isDarkTheme ? 'light' : 'dark',
        statusBarTranslucent: false,
        statusBarBackgroundColor: theme.colors.statusBar.backgroundColor,
      }}>
      <Stack.Screen name={'DashBoardScreen'} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
