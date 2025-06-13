import {MD3CustomTheme} from 'react-native-paper';
import {ms, ScaledSheet} from 'react-native-size-matters';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
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
