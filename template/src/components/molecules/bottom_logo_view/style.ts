import {MD3CustomTheme} from 'react-native-paper';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
    imageContainer: {
      alignSelf: 'center',
      padding: 10,
      backgroundColor: theme.colors.backdrop,
      borderRadius: theme.radius.buttonBorderRadius.regular,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: vs(15),
    },
    logoImage: {
      height: SCREEN_HEIGHT * 0.04,
      width: SCREEN_WIDTH * 0.55,
    },
  });
