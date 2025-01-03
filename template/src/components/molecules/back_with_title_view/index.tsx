import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BounceView from '../bounce_view';
import {style} from './style';

type BackWithTitleCompProps = {
  title: string;
  onBackPress?: () => void;
};

const BackWithTitleComp: React.FC<BackWithTitleCompProps> = props => {
  const {title} = props;
  const theme = useTheme();
  return (
    <View style={style.mainContainer}>
      <BounceView onPress={props?.onBackPress}>
        <MaterialIcons
          name={'chevron-left'}
          size={ms(40)}
          color={theme.colors.iconColor.black}
        />
      </BounceView>
      <Text style={[theme.fonts.titleLarge, {flex: 1}]}>{title}</Text>
    </View>
  );
};

export const BackWithTitleHeader = React.memo(BackWithTitleComp);
