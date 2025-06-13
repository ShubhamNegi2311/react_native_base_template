import 'react-native-paper';
import {MD3Theme} from 'react-native-paper';
import {
  MD3Colors,
  MD3Type,
  MD3Typescale,
} from 'react-native-paper/lib/typescript/types';

// Module Overrides for react native paper for custom theme support
declare module 'react-native-paper' {
  interface MD3ThemeColors extends MD3Colors {
    success: string;
    successContainer: string;
    warning: string;
    warningContainer: string;
    info: string;
    infoContainer: string;
    accent: string;
    transparent: string;
    buttonColor: {
      regular: string;
      alert: string;
      error: string;
      success: string;
      reset: string;
      submit: string;
      cancel: string;
      disabled: string;
      transparent: string;
    };
    textColor: {
      regular: string;
      alert: string;
      error: string;
      success: string;
      placeholder: string;
      white: string;
      black: string;
      primary: string;
    };
    iconColor: {
      regular: string;
      alert: string;
      error: string;
      success: string;
      black: string;
      white: string;
    };
    borderColor: {
      regular: string;
      error: string;
      success: string;
      transparent: string;
      disabled: string;
      primary: string;
    };
    statusBar: {
      backgroundColor: string;
      iconColor: string;
    };
    loader: {
      background: string;
      backdrop: string;
      indicator: string;
      shimmerBone: string;
      shimmerHighlight: string;
    };
    dataTable: {
      headerBackground: string;
      rowBackground: string;
    };
    textInput: {
      label: string;
      text: string;
      placeholder: string;
      successMessage: string;
      errorMessage: string;
      border: string;
      errorBorder: string;
      background: string;
    };
    bottomTabBar: {
      titleSelected: string;
      titleUnselected: string;
      iconSelected: string;
      iconUnselected: string;
    };
    card: {
      cardBackground: string;
    };
  }

  interface MD3ThemeFonts extends MD3Typescale {
    regular: MD3Type;
    bold: MD3Type;
    semiBold: MD3Type;
  }

  interface BorderRoundness {
    small: number;
    regular: number;
    large: number;
    extraLarge: number;
    circle: number;
  }

  export interface MD3CustomTheme extends MD3Theme {
    colors: MD3ThemeColors;
    fonts: MD3ThemeFonts;
    radius: BorderRoundness;
  }

  export function useTheme(): MD3CustomTheme;
}
