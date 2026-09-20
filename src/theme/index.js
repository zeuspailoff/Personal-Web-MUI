import { createTheme, alpha } from '@mui/material/styles';

const palettes = {
  dark: {
    mode: 'dark',
    primary: { main: '#38bdf8', light: '#7dd3fc', dark: '#0284c7', contrastText: '#03131f' },
    secondary: { main: '#e3bd8d', light: '#f0d6b4', dark: '#c2934f', contrastText: '#0b1120' },
    background: { default: '#0a1220', paper: '#111e33' },
    text: { primary: '#e8eefc', secondary: '#9fb0cd' },
    divider: 'rgba(148, 178, 224, 0.16)',
  },
  light: {
    mode: 'light',
    primary: { main: '#0369a1', light: '#0ea5e9', dark: '#075985', contrastText: '#ffffff' },
    secondary: { main: '#a8762f', light: '#c99a52', dark: '#7d5416', contrastText: '#ffffff' },
    background: { default: '#f4f7fb', paper: '#ffffff' },
    text: { primary: '#101b2d', secondary: '#4a5b73' },
    divider: 'rgba(16, 27, 45, 0.12)',
  },
};

/** Builds the app theme for a given color mode. */
export const buildTheme = (mode) => {
  const isDark = mode === 'dark';
  const palette = palettes[isDark ? 'dark' : 'light'];

  const theme = createTheme({
    palette,
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      h1: { fontFamily: '"Outfit", sans-serif', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 },
      h2: { fontFamily: '"Outfit", sans-serif', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 },
      h3: { fontFamily: '"Outfit", sans-serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 },
      h4: { fontFamily: '"Outfit", sans-serif', fontWeight: 700, letterSpacing: '-0.015em' },
      h5: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
      subtitle1: { lineHeight: 1.6 },
      body1: { lineHeight: 1.75 },
      body2: { lineHeight: 1.7 },
      button: { fontWeight: 600, textTransform: 'none', letterSpacing: 0 },
      overline: { fontWeight: 700, letterSpacing: '0.18em' },
    },
  });

  return createTheme(theme, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: palette.background.default,
            backgroundImage: isDark
              ? `radial-gradient(1100px 620px at 12% -8%, ${alpha(palette.primary.main, 0.16)}, transparent 60%),
                 radial-gradient(900px 520px at 92% 4%, ${alpha(palette.secondary.main, 0.14)}, transparent 62%)`
              : `radial-gradient(1000px 560px at 10% -10%, ${alpha(palette.primary.main, 0.12)}, transparent 60%),
                 radial-gradient(860px 500px at 94% 2%, ${alpha(palette.secondary.main, 0.1)}, transparent 62%)`,
            backgroundAttachment: 'fixed',
          },
          '::selection': {
            backgroundColor: alpha(palette.primary.main, 0.32),
          },
          '*::-webkit-scrollbar': { width: 10, height: 10 },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(palette.text.secondary, 0.35),
            borderRadius: 8,
          },
          '*::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 20 },
          sizeLarge: { paddingBlock: 12, paddingInline: 28, fontSize: '1rem' },
          containedPrimary: {
            boxShadow: `0 10px 26px ${alpha(palette.primary.main, isDark ? 0.3 : 0.28)}`,
            '&:hover': { boxShadow: `0 14px 32px ${alpha(palette.primary.main, 0.38)}` },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: `1px solid ${palette.divider}`,
            backgroundColor: isDark ? alpha(palette.background.paper, 0.72) : palette.background.paper,
            backdropFilter: 'blur(8px)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 600 },
          outlined: { borderColor: palette.divider },
        },
      },
      MuiTooltip: {
        defaultProps: { arrow: true },
      },
      MuiLink: {
        defaultProps: { underline: 'hover' },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? alpha('#ffffff', 0.03) : alpha('#0b1120', 0.02),
          },
        },
      },
    },
  });
};

export default buildTheme;
