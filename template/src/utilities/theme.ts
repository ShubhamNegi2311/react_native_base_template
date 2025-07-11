// theme.ts -> Contains theme config for React native paper.
import {
  MD3CustomTheme,
  MD3DarkTheme,
  MD3LightTheme,
  MD3ThemeFonts,
} from 'react-native-paper';
import {ms} from './scale_utils';

// Extend the MD3Typescale with custom fonts
const customFonts: MD3ThemeFonts = {
  displayLarge: {
    fontFamily: 'Helvetica-Bold',
    fontWeight: '700',
    fontSize: ms(24),
    letterSpacing: 0,
    lineHeight: ms(30),
  },
  displayMedium: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '500',
    fontSize: ms(20),
    letterSpacing: 0,
    lineHeight: ms(24),
  },
  displaySmall: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '400',
    fontSize: ms(16),
    letterSpacing: 0,
    lineHeight: ms(18),
  },
  headlineLarge: {
    fontFamily: 'Helvetica-Bold',
    fontWeight: '700',
    fontSize: ms(30),
    letterSpacing: 0,
    lineHeight: ms(36),
  },
  headlineMedium: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '500',
    fontSize: ms(18),
    letterSpacing: 0,
    lineHeight: ms(20),
  },
  headlineSmall: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '400',
    fontSize: ms(16),
    letterSpacing: 0,
    lineHeight: ms(18),
  },
  titleLarge: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '500',
    fontSize: ms(22),
    letterSpacing: 0,
    lineHeight: ms(24),
  },
  titleMedium: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '500',
    fontSize: ms(18),
    letterSpacing: 0,
    lineHeight: ms(20),
  },
  titleSmall: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '400',
    fontSize: ms(16),
    letterSpacing: 0,
    lineHeight: ms(18),
  },
  bodyLarge: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '400',
    fontSize: ms(16),
    letterSpacing: 0.1,
    lineHeight: ms(18),
  },
  bodyMedium: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '400',
    fontSize: ms(14),
    letterSpacing: 0.1,
    lineHeight: ms(16),
  },
  bodySmall: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '300',
    fontSize: ms(12),
    letterSpacing: 0.1,
    lineHeight: ms(14),
  },
  labelLarge: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '500',
    fontSize: ms(16),
    letterSpacing: 0.1,
    lineHeight: ms(18),
  },
  labelMedium: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '500',
    fontSize: ms(14),
    letterSpacing: 0.1,
    lineHeight: ms(16),
  },
  labelSmall: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '400',
    fontSize: ms(12),
    letterSpacing: 0.1,
    lineHeight: ms(14),
  },
  semiBold: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '500',
    fontSize: ms(16),
    letterSpacing: 0.1,
    lineHeight: ms(18),
  },
  bold: {
    fontFamily: 'Helvetica-Bold',
    fontWeight: '500',
    fontSize: ms(14),
    letterSpacing: 0.1,
    lineHeight: ms(16),
  },
  regular: {
    fontFamily: 'Helvetica-Regular',
    fontWeight: '400',
    fontSize: ms(14),
    letterSpacing: 0.1,
    lineHeight: ms(16),
  },
  default: {
    fontWeight: '400',
    fontFamily: 'Helvetica-Regular',
    letterSpacing: 0.1,
  },
};

// Light Theme
export const lightTheme: MD3CustomTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#427BAB',
    onPrimary: '#FFFFFF',
    primaryContainer: '#D1E4FF',
    onPrimaryContainer: '#001D36',
    secondary: '#54677A',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#D7E3F1',
    onSecondaryContainer: '#121C2A',
    tertiary: '#6B5F8C',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#E9DDFF',
    onTertiaryContainer: '#231737',
    error: '#AA0808',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FCFCFF',
    onBackground: '#1A1C1E',
    surface: '#FCFCFF',
    onSurface: '#1A1C1E',
    surfaceVariant: '#DEE3EB',
    onSurfaceVariant: '#42474E',
    outline: '#427CAC',
    outlineVariant: '#C2C7CF',
    shadow: '#00000080',
    scrim: '#000000',
    inverseSurface: '#2F3033',
    inverseOnSurface: '#F0F0F4',
    inversePrimary: '#A1C9FF',

    // Required custom colors
    success: '#256F3A', // Green
    warning: '#E76500', // Orange
    info: '#0070F2', // Blue
    accent: '#ff4081', // Pink
    buttonColor: {
      regular: '#427CAC',
      alert: '#550000',
      error: '#AA0808',
      success: '#256F3A',
      reset: '#AE3232',
      submit: '#427BAB',
      cancel: '#D1E4FF',
      disabled: '#858585',
      transparent: '#00000000',
    },
    textColor: {
      regular: '#000000',
      alert: '#550000',
      error: '#AA0808',
      success: '#256F3A',
      placeholder: '#858585',
      white: '#FFFFFF',
      black: '#000000',
      primary: '#427CAC',
    },
    iconColor: {
      regular: '#000000',
      alert: '#550000',
      error: '#AA0808',
      success: '#256F3A',
      black: '#000000',
      white: '#FFFFFF',
    },
    statusBar: {
      backgroundColor: '#154165',
      iconColor: '#000000',
    },
    borderColor: {
      regular: '#DBDBDB',
      error: '#AA0808',
      success: '#256F3A',
      transparent: '#00000000',
      disabled: '#858585',
      primary: '#427CAC',
    },
    loader: {
      background: '#E9E9E999',
      backdrop: '#00000080',
      indicator: '#427BAB',
      shimmerBone: '#4D4D4D',
      shimmerHighlight: '#8E8E8E99',
    },
    dataTable: {
      headerBackground: '#E9E9E9',
      rowBackground: '#F5F5F5',
    },
    successContainer: '#E8F5E9',
    warningContainer: '#FFF3E0',
    infoContainer: '#E3F2FD',
    textInput: {
      label: '#556B82',
      text: '#000000',
      placeholder: '#858585',
      successMessage: '#256F3A',
      errorMessage: '#AA0808',
      border: '#DBDBDB',
      errorBorder: '#AA0808',
      background: '#E8ECF4',
    },
    transparent: '#00000000',
    bottomTabBar: {
      titleSelected: '#FFFFFF',
      titleUnselected: '#FFFFFF80',
      iconSelected: '#FFFFFF',
      iconUnselected: '#FFFFFF80',
    },
    card: {
      cardBackground: '#F5F5F5',
    },
  },
  fonts: customFonts,
  roundness: 8,
  radius: {
    small: ms(4),
    regular: ms(8),
    large: ms(12),
    extraLarge: ms(20),
    circle: 999,
  },
};

// Dark Theme
export const darkTheme: MD3CustomTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#A1C9FF',
    onPrimary: '#00325A',
    primaryContainer: '#214A7B',
    onPrimaryContainer: '#D1E4FF',
    secondary: '#BCC7D7',
    onSecondary: '#26333F',
    secondaryContainer: '#3D4A57',
    onSecondaryContainer: '#D7E3F1',
    tertiary: '#CDC0E9',
    onTertiary: '#392C4F',
    tertiaryContainer: '#504466',
    onTertiaryContainer: '#E9DDFF',
    error: '#AA0808',
    onError: '#690005',
    errorContainer: '#FFAAAA',
    onErrorContainer: '#FFDAD6',
    background: '#1A1C1E',
    onBackground: '#E2E2E5',
    surface: '#1A1C1E',
    onSurface: '#E2E2E5',
    surfaceVariant: '#42474E',
    onSurfaceVariant: '#C2C7CF',
    outline: '#427CAC',
    outlineVariant: '#42474E',
    shadow: '#E3E3E366',
    scrim: '#000000',
    inverseSurface: '#E2E2E5',
    inverseOnSurface: '#2F3033',
    inversePrimary: '#427BAB',

    // Required custom colors
    success: '#256F3A', // Light Green
    warning: '#E76500', // Light Orange
    info: '#0070F2', // Light Blue
    accent: '#ff80ab', // Light Pink
    buttonColor: {
      regular: '#427CAC',
      alert: '#550000',
      error: '#AA0808',
      success: '#256F3A',
      reset: '#AE3232',
      submit: '#96CCFF',
      cancel: '#030303',
      disabled: '#858585',
      transparent: '#00000000',
    },
    textColor: {
      regular: '#FFFFFF',
      alert: '#550000',
      error: '#AA0808',
      success: '#256F3A',
      placeholder: '#858585',
      white: '#FFFFFF',
      black: '#000000',
      primary: '#427CAC',
    },
    iconColor: {
      regular: '#FFFFFF',
      alert: '#550000',
      error: '#AA0808',
      success: '#256F3A',
      black: '#000000',
      white: '#FFFFFF',
    },
    statusBar: {
      backgroundColor: '#154165',
      iconColor: '#FFFFFF',
    },
    borderColor: {
      regular: '#96CCFF',
      error: '#AA0808',
      success: '#256F3A',
      transparent: '#00000000',
      disabled: '#858585',
      primary: '#427CAC',
    },
    loader: {
      background: '#E9E9E999',
      backdrop: '#00000080',
      indicator: '#96CCFF',
      shimmerBone: '#1D1D1D',
      shimmerHighlight: '#E9E9E999',
    },
    dataTable: {
      headerBackground: '#494949',
      rowBackground: '#F5F5F5',
    },
    successContainer: '#114E20',
    warningContainer: '#DDA726',
    infoContainer: '#0D47A1',
    textInput: {
      label: '#556B82',
      text: '#000000',
      placeholder: '#858585',
      successMessage: '#256F3A',
      errorMessage: '#AA0808',
      border: '#DBDBDB',
      errorBorder: '#AA0808',
      background: '#E8ECF4',
    },
    transparent: '#00000000',
    bottomTabBar: {
      titleSelected: '#FFFFFF',
      titleUnselected: '#FFFFFF80',
      iconSelected: '#FFFFFF',
      iconUnselected: '#FFFFFF80',
    },
    card: {
      cardBackground: '#373839',
    },
  },
  fonts: customFonts,
  roundness: 8,
  radius: {
    small: ms(4),
    regular: ms(8),
    large: ms(12),
    extraLarge: ms(20),
    circle: 999,
  },
};
