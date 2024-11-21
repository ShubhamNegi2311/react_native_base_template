// theme.ts
import {
  MD3CustomTheme,
  MD3DarkTheme,
  MD3LightTheme,
  MD3ThemeFonts,
} from 'react-native-paper';
import {ms} from 'react-native-size-matters';

// Extend the MD3Typescale with custom fonts
const customFonts: MD3ThemeFonts = {
  displayLarge: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: ms(24),
    letterSpacing: 0,
    lineHeight: ms(30),
  },
  displayMedium: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: ms(20),
    letterSpacing: 0,
    lineHeight: ms(24),
  },
  displaySmall: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: ms(16),
    letterSpacing: 0,
    lineHeight: ms(18),
  },
  headlineLarge: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: ms(20),
    letterSpacing: 0,
    lineHeight: ms(24),
  },
  headlineMedium: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: ms(18),
    letterSpacing: 0,
    lineHeight: ms(20),
  },
  headlineSmall: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: ms(16),
    letterSpacing: 0,
    lineHeight: ms(18),
  },
  titleLarge: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: ms(22),
    letterSpacing: 0,
    lineHeight: ms(24),
  },
  titleMedium: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: ms(16),
    letterSpacing: 0,
    lineHeight: ms(18),
  },
  titleSmall: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: ms(14),
    letterSpacing: 0,
    lineHeight: ms(16),
  },
  bodyLarge: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: ms(16),
    letterSpacing: 0.1,
    lineHeight: ms(18),
  },
  bodyMedium: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: ms(14),
    letterSpacing: 0.1,
    lineHeight: ms(16),
  },
  bodySmall: {
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
    fontSize: ms(12),
    letterSpacing: 0.1,
    lineHeight: ms(14),
  },
  labelLarge: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: ms(16),
    letterSpacing: 0.1,
    lineHeight: ms(18),
  },
  labelMedium: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: ms(14),
    letterSpacing: 0.1,
    lineHeight: ms(16),
  },
  labelSmall: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: ms(12),
    letterSpacing: 0.1,
    lineHeight: ms(14),
  },
  semiBold: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: ms(16),
    letterSpacing: 0.1,
    lineHeight: ms(18),
  },
  bold: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '500',
    fontSize: ms(14),
    letterSpacing: 0.1,
    lineHeight: ms(16),
  },
  regular: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: ms(12),
    letterSpacing: 0.1,
    lineHeight: ms(14),
  },
  default: {
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    letterSpacing: 0.1,
  },
};

// Light Theme
export const lightTheme: MD3CustomTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    background: '#ffffff',
    surface: '#f5f5f5',
    error: '#b00020',
    onPrimary: '#ffffff',
    onBackground: '#000000',
    onSurface: '#000000',
    // Required custom colors
    success: '#4caf50', // Green
    warning: '#ff9800', // Orange
    info: '#2196f3', // Blue
    accent: '#ff4081', // Pink
    buttonColor: {
      regular: '#554875',
      alert: '#550000',
      error: '#AA2222',
      success: '#44EE00',
    },
    textColor: {
      regular: '#000000',
      alert: '#550000',
      error: '#AA2222',
      success: '#44EE00',
    },
    iconColor: {
      regular: '#FFFFFF',
      alert: '#550000',
      error: '#AA2222',
      success: '#44EE00',
    },
    statusBar: {
      backgroundColor: '#FFFFFF',
      iconColor: '#000000',
    },
  },
  fonts: customFonts,
  roundness: 8,
};

// Dark Theme
export const darkTheme: MD3CustomTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212',
    surface: '#1e1e1e',
    error: '#cf6679',
    onPrimary: '#000000',
    onBackground: '#ffffff',
    onSurface: '#ffffff',
    // Required custom colors
    success: '#66bb6a', // Light Green
    warning: '#ffa726', // Light Orange
    info: '#29b6f6', // Light Blue
    accent: '#ff80ab', // Light Pink
    buttonColor: {
      regular: '#568956',
      alert: '#550000',
      error: '#AA2222',
      success: '#44EE00',
    },
    textColor: {
      regular: '#FFFFFF',
      alert: '#550000',
      error: '#AA2222',
      success: '#44EE00',
    },
    iconColor: {
      regular: '#FFFFFF',
      alert: '#550000',
      error: '#AA2222',
      success: '#44EE00',
    },
    statusBar: {
      backgroundColor: '#000000',
      iconColor: '#FFFFFF',
    },
  },
  fonts: customFonts,
  roundness: 8,
};
