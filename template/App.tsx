import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider, useThemeContext} from 'context/theme_provider';
import AppNavigator from 'navigation/app_navigator';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
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

const MainApp: React.FC = () => {
  const {isDarkTheme} = useThemeContext();

  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ReduxProvider store={store}>
        <AppNavigator />
      </ReduxProvider>
    </PaperProvider>
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
