import {MD3CustomTheme} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
    modalView: {
      height: '100%',
      width: '100%',
    },
    screenContainer: {
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.backdrop,
    },
  });
