import {MD3CustomTheme} from 'react-native-paper';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {IS_ANDROID} from 'utilities/constants';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
    screenContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.colors.background,
      paddingVertical: IS_ANDROID ? vs(10) : 0,
    },
  });
