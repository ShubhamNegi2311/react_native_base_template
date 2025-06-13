import React from 'react';
import {PressableProps, StyleProp, View, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {ms} from 'utilities/scale_utils';

type CardViewCompProps = PressableProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const CardViewComp: React.FC<CardViewCompProps> = props => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          padding: ms(10),
          borderRadius: theme.radius.small,
          backgroundColor: theme.colors.card.cardBackground,
          marginVertical: ms(10),
          boxShadow: `1px 1px 10px ${theme.colors.shadow}`,
        },
        props?.style,
      ]}>
      {props?.children ?? null}
    </View>
  );
};

const CardView = React.memo(CardViewComp);
export default CardView;
