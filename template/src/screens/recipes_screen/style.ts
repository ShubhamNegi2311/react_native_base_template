import {MD3CustomTheme} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
    mainContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.colors.background,
      alignItems: 'center',
    },
  });
