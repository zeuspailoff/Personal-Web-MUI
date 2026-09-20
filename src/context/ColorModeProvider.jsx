import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext } from './ColorModeContext';
import buildTheme from '../theme';

const STORAGE_KEY = 'cv-color-mode';

const getInitialMode = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* storage unavailable (private mode, blocked cookies) */
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const value = useMemo(
    () => ({ mode, toggleColorMode: () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark')) }),
    [mode],
  );

  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ColorModeProvider.propTypes = { children: PropTypes.node };

export default ColorModeProvider;
