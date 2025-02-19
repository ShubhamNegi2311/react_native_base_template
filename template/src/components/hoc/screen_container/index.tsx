import React from 'react';
import {useTheme} from 'react-native-paper';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {style} from './style';

type AppScreenContainerProps = SafeAreaViewProps & {
  children: React.ReactNode;
};

const AppScreenContainer: React.FC<AppScreenContainerProps> = props => {
  const theme = useTheme();
  return (
    <SafeAreaView
      {...props}
      style={[style(theme).screenContainer, props.style]}
    />
  );
};

export default AppScreenContainer;
