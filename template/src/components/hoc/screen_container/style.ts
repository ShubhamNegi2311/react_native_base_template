import { StyleSheet } from 'react-native';
import { MD3CustomTheme } from 'react-native-paper';
import { IS_ANDROID } from 'utilities/constants';
import { vs } from 'utilities/scale_utils';

export const style = (theme: MD3CustomTheme) =>
  StyleSheet.create({
    screenContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.colors.background,
      paddingVertical: IS_ANDROID ? vs(10) : 0,
    },
  });
