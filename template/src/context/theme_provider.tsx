import React from 'react';

interface ThemeContextType {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderType = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderType> = props => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false); // Initial theme state
  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  return (
    <ThemeContext.Provider value={{toggleTheme, isDarkTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
