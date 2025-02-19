import {MD3CustomTheme} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
    mainContainer: {
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.loader.backdrop,
    },
    loaderBackgroundContainer: {
      height: SCREEN_WIDTH * 0.4,
      width: SCREEN_WIDTH * 0.4,
      borderRadius: theme.radius.buttonBorderRadius.regular,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.loader.background,
    },
  });
