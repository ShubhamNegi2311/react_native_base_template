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
    warning: string;
    info: string;
    accent: string;
    buttonColor: {
      regular: string;
      alert: string;
      error: string;
      success: string;
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
    };
    statusBar: {
      backgroundColor: string;
      iconColor: string;
    };
  }

  interface MD3ThemeFonts extends MD3Typescale {
    regular: MD3Type;
    bold: MD3Type;
    semiBold: MD3Type;
  }

  interface BorderRoundness {
    buttonBorderRadius: {
      small: number;
      regular: number;
      large: number;
      extraLarge: number;
    };
  }

  export interface MD3CustomTheme extends MD3Theme {
    colors: MD3ThemeColors;
    fonts: MD3ThemeFonts;
    radius: BorderRoundness;
  }

  export function useTheme(): MD3CustomTheme;
}
