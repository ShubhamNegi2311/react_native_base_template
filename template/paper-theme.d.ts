import 'react-native-paper';
import {MD3Theme} from 'react-native-paper';
import {
  MD3Colors,
  MD3Type,
  MD3Typescale,
} from 'react-native-paper/lib/typescript/types';

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
    };
    iconColor: {
      regular: string;
      alert: string;
      error: string;
      success: string;
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

  export interface MD3CustomTheme extends MD3Theme {
    colors: MD3ThemeColors;
    fonts: MD3ThemeFonts;
  }

  export function useTheme(): MD3CustomTheme;
}
