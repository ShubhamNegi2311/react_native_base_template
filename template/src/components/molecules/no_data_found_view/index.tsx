import BaseText from 'components/base_components/base_text';
import React from 'react';
import {View} from 'react-native';
import {Icon, useTheme} from 'react-native-paper';
import {MaterialIcon, SCREEN_WIDTH} from 'utilities/constants';
import {style} from './style';

type NoDataFoundViewProps = {
  message?: string;
  height?: number;
  width?: number;
};

const NoDataFoundView: React.FC<NoDataFoundViewProps> = props => {
  const {
    message = 'No Data Found!',
    height = SCREEN_WIDTH * 0.3,
    width = SCREEN_WIDTH * 0.5,
  } = props;
  const theme = useTheme();

  const viewStyle = style(theme, height, width);
  return (
    <View style={viewStyle.mainContainer}>
      <View style={viewStyle.contentContainer}>
        <Icon
          source={MaterialIcon.FILE_SEARCH_OUTLINE}
          color={theme.colors.iconColor.regular}
          size={height * 0.25}
        />
        <BaseText style={viewStyle.messageText} children={message} />
      </View>
    </View>
  );
};

export default NoDataFoundView;
