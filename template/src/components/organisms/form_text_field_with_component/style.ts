import {MD3CustomTheme} from 'react-native-paper';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {SCREEN_HEIGHT} from 'utilities/constants';

export const style = (theme: MD3CustomTheme) =>
  ScaledSheet.create({
    parentContainer: {
      width: '100%',
    },
    mainContainer: {
      width: '100%',
      flexDirection: 'row',
      borderRadius: theme.radius.small,
      backgroundColor: '#F7F8F9',
      borderWidth: ms(1),
      borderColor: theme.colors.textInput.background,
    },
    textInput: {
      flex: 1,
      height: SCREEN_HEIGHT * 0.065,
      backgroundColor: '#F7F8F9',
    },
    textInputOutline: {
      borderRadius: theme.radius.small,
      borderWidth: 0,
    },
    label: {
      color: theme.colors.textInput.label,
      width: '100%',
      padding: ms(5),
      ...theme.fonts.labelSmall,
      fontWeight: '500',
    },
    error: {
      color: theme.colors.textInput.errorMessage,
      width: '100%',
      padding: ms(5),
    },
    requiredText: {
      color: theme.colors.textInput.errorMessage,
    },
    leftRightComponentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: ms(10),
    },
  });
