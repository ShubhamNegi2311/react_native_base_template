import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AppLoader from 'components/hoc/app_loader';
import {AppDialogProvider} from 'context/app_dialog_provider';
import {ThemeProvider, useThemeContext} from 'context/theme_provider';
import RootNavigator from 'navigation/root_navigator';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';
import Toast, {
  ErrorToast,
  SuccessToast,
  ToastConfig,
} from 'react-native-toast-message';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from 'store';
import {darkTheme, lightTheme} from 'utilities/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      retry: 3,
    },
  },
});

const toastConfig: ToastConfig = {
  // Overwrite 'success' type, by modifying the existing `SuccessToast` component
  success: props => (
    <SuccessToast
      {...props}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      text1Style={{
        fontSize: ms(14),
      }}
      text2Style={{
        fontSize: ms(14),
      }}
    />
  ),

  //  Overwrite 'error' type, by modifying the existing `ErrorToast` component
  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      text1Style={{
        fontSize: ms(14),
      }}
      text2Style={{
        fontSize: ms(14),
      }}
    />
  ),
};

const MainApp: React.FC = () => {
  const {isDarkTheme} = useThemeContext();

  return (
    <>
      {/* React native paper theme provider */}
      <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {/* Redux Provider for Redux Toolkit State Management */}
        <ReduxProvider store={store}>
          {/* App Dialog Provider for displaying dialog in the app. */}
          <AppDialogProvider>
            {/* Global app loader to display over whole application when visible */}
            <AppLoader>
              {/* Safearea provider for managing screens within safearea */}
              <SafeAreaProvider>
                {/* Root navigator for the application which manages other 
              navigators based on user's current state. i.e Logged in/out  */}
                <RootNavigator />
              </SafeAreaProvider>
            </AppLoader>
          </AppDialogProvider>
        </ReduxProvider>
      </PaperProvider>
      <Toast config={toastConfig} />
    </>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <ThemeProvider>
          <MainApp />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
