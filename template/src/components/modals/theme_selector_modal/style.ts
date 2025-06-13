import {StyleSheet} from 'react-native';
import {MD3CustomTheme} from 'react-native-paper';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';
import {ms} from 'utilities/scale_utils';

export const style = (theme: MD3CustomTheme) =>
  StyleSheet.create({
    overlay: {
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: 'red',
    },
    dialog: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.radius.regular,
      padding: ms(20),
      width: SCREEN_WIDTH * 0.8,
      gap: ms(10),
    },
    title: {
      fontSize: ms(18),
      fontWeight: 'bold',
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: ms(5),
    },
    label: {
      fontSize: ms(16),
    },
    closeButton: {
      alignSelf: 'flex-end',
      padding: ms(10),
      backgroundColor: theme.colors.buttonColor.regular,
      borderRadius: theme.radius.small,
    },
  });
