import {MD3CustomTheme} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

export const style = (theme: MD3CustomTheme, height: number, width: number) =>
  ScaledSheet.create({
    mainContainer: {width: '100%', alignItems: 'center'},
    contentContainer: {
      height,
      width,
      borderRadius: theme.radius.small,
      justifyContent: 'center',
      alignItems: 'center',
      gap: height * 0.1,
    },
    messageText: {
      ...theme.fonts.labelLarge,
      color: theme.colors.textColor.regular,
      textAlign: 'center',
    },
  });
