import {StyleSheet} from 'react-native';
import {MD3CustomTheme} from 'react-native-paper';
import {ms} from 'utilities/scale_utils';

export const style = (theme: MD3CustomTheme) =>
  StyleSheet.create({
    otpMainContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    boxContainer: {
      borderWidth: ms(1),
      borderRadius: theme.radius.regular,
      textAlign: 'center',
      color: theme.colors.textColor.regular,
    },
  });
