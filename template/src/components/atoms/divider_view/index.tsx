import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SCREEN_WIDTH } from 'utilities/constants';
import { ms } from 'utilities/scale_utils';
type DividerViewCompProps = {
  height?: number;
  width?: number;
  color?: string;
  borderRadius?: number;
};

const DividerViewComp: React.FC<DividerViewCompProps> = props => {
  const theme = useTheme();
  const {
    height = ms(1),
    width = SCREEN_WIDTH * 0.9,
    color = theme.colors.borderColor.regular,
    borderRadius = 0,
  } = props;
  return (
    <View style={{ height, width, backgroundColor: color, borderRadius }} />
  );
};

const DividerView = React.memo(DividerViewComp);
export default DividerView;
