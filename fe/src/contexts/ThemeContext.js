import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import PropTypes from 'prop-types';

import { KEY_STORAGE_THEME } from '../storage/StoregeKeys';

import themes from '../assets/styles/themes';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({ title: 'light', theme: themes.light });

  const handleToggleTheme = useCallback(() => {
    let themeTemp = {};

    if (theme.title === 'light') {
      themeTemp = { title: 'dark', theme: themes.dark };
    } else {
      themeTemp = { title: 'light', theme: themes.light };
    }

    setTheme(themeTemp);
    localStorage.setItem(KEY_STORAGE_THEME, JSON.stringify(themeTemp.title));
  }, [theme]);

  useEffect(() => {
    const storagedTheme = localStorage.getItem(KEY_STORAGE_THEME);

    if (storagedTheme) {
      if (JSON.parse(storagedTheme) === 'light') {
        setTheme({ title: 'light', theme: themes.light });
      } else {
        setTheme({ title: 'dark', theme: themes.dark });
      }
    }
  }, []);

  const themeContextProviderValue = useMemo(() => ({
    handleToggleTheme,
    selectedTheme: theme.title,
    theme: theme.theme,
  }), [handleToggleTheme, theme]);

  return (
    <ThemeContext.Provider
      value={themeContextProviderValue}
    >
      <ThemeProviderStyled theme={theme.theme}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
