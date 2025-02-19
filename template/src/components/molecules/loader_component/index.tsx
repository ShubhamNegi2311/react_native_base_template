import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './style';

const LoaderComp: React.FC = () => {
  const theme = useTheme();
  const viewStyle = style(theme);

  return (
    <View style={style(theme).mainContainer}>
      <View style={viewStyle.loaderBackgroundContainer}>
        <ActivityIndicator
          size={'large'}
          animating
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
};

export const LoaderComponent = React.memo(LoaderComp);
