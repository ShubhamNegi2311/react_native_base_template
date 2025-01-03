import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {style} from './style';

const ListLoaderComp: React.FC = () => {
  return (
    <View style={style.loaderContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export const ListLoader = React.memo(ListLoaderComp);
