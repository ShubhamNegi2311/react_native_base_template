import {MD3CustomTheme} from 'react-native-paper';
import {ms, ScaledSheet} from 'react-native-size-matters';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
    mainContainer: {
      width: '100%',
    },
    textInput: {
      width: '100%',
      ...theme.fonts.regular,
    },
    label: {
      color: theme.colors.textColor.primary,
      width: '100%',
      padding: ms(5),
      fontWeight: 'bold',
    },
    error: {
      color: theme.colors.textColor.alert,
      width: '100%',
      padding: ms(5),
    },
    requiredText: {
      color: theme.colors.textColor.error,
    },
  });
