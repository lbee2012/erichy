import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  themeName: 'light',
  palette: {},
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);
