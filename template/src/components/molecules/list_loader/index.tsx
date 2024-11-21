import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const ListLoaderComp: React.FC = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
      }}>
      <ActivityIndicator size={'large'} color={theme.colors.primary} />
    </View>
  );
};

export const ListLoader = React.memo(ListLoaderComp);
