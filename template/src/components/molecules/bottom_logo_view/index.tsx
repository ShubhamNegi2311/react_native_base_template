import React from 'react';
import {Image, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './style';

type Props = {};

const BottomLogoViewComp = (props: Props) => {
  const theme = useTheme();
  const viewStyle = style(theme);
  return (
    <View style={viewStyle.imageContainer}>
      <Image
        source={require('assets/images/cwc-full-logo.png')}
        resizeMethod={'resize'}
        resizeMode={'contain'}
        style={viewStyle.logoImage}
      />
    </View>
  );
};

export const BottomLogoView = React.memo(BottomLogoViewComp);
