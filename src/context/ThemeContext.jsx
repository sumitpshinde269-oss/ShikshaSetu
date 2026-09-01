import { createContext, useContext, useEffect, useState } from 'react';

const THEME_KEY = 'shiksha-theme';
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => (
    typeof window !== 'undefined' && window.sessionStorage.getItem(THEME_KEY) === 'dark'
  ));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.sessionStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: () => setIsDarkMode((current) => !current) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}
