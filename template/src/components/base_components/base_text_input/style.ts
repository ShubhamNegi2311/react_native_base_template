import {StyleSheet} from 'react-native';
import {MD3CustomTheme} from 'react-native-paper';
import {ms} from 'utilities/scale_utils';

export const style = (theme: MD3CustomTheme) =>
  StyleSheet.create({
    mainContainer: {
      width: '100%',
    },
    textInput: {
      width: '100%',
      backgroundColor: theme.colors.textInput.background,
      borderRadius: ms(10),
      ...theme.fonts.regular,
    },
    label: {
      color: theme.colors.textColor.regular,
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
