import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import Logo from '../Logo';
import { useColorMode } from '../../context/ColorModeContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { site } from '../../data/site';

const drawerWidth = 280;

const navItems = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.projects', to: '/#projects' },
  { key: 'nav.about', to: '/#about' },
  { key: 'nav.contact', to: '/contact' },
];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const { mode, toggleColorMode } = useColorMode();
  const { lang, toggleLang, t } = useLanguage();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 12 });

  const closeDrawer = () => setMobileOpen(false);
  const isActive = (to) => (to.includes('#') ? pathname === '/' && hash === `#${to.split('#')[1]}` : pathname === to);

  const themeToggle = (
    <Tooltip title={t('nav.toggleTheme')}>
      <IconButton onClick={toggleColorMode} color="inherit" aria-label={t('nav.toggleTheme')}>
        {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Tooltip>
  );

  const langToggle = (
    <Tooltip title={t('nav.toggleLanguage')}>
      <Button
        onClick={toggleLang}
        color="inherit"
        size="small"
        startIcon={<TranslateIcon fontSize="small" />}
        aria-label={t('nav.toggleLanguage')}
        sx={{ minWidth: 0, px: 1.5 }}
      >
        {lang === 'en' ? 'ES' : 'EN'}
      </Button>
    </Tooltip>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          backgroundColor: (theme) =>
            scrolled ? alpha(theme.palette.background.default, 0.82) : 'transparent',
          borderBottom: (theme) =>
            `1px solid ${scrolled ? theme.palette.divider : 'transparent'}`,
          transition: 'background-color .3s ease, border-color .3s ease, backdrop-filter .3s ease',
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar sx={{ gap: 1, px: { xs: 2, md: 3 }, minHeight: { xs: 68, md: 80 } }}>
            <Box
              component={RouterLink}
              to="/"
              aria-label={site.name}
              sx={{ display: 'inline-flex', alignItems: 'center', mr: 'auto' }}
            >
              <Logo height={{ xs: 46, md: 56 }} />
            </Box>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  component={RouterLink}
                  to={item.to}
                  color="inherit"
                  sx={{
                    px: 2,
                    color: isActive(item.to) ? 'primary.main' : 'text.primary',
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                  }}
                >
                  {t(item.key)}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'text.primary' }}>
              {langToggle}
              {themeToggle}
              {site.cv ? (
                <Button
                  component="a"
                  href={site.cv}
                  download
                  variant="contained"
                  size="small"
                  startIcon={<DownloadIcon fontSize="small" />}
                  sx={{ display: { xs: 'none', sm: 'inline-flex' }, ml: 0.5 }}
                >
                  CV
                </Button>
              ) : null}
              <IconButton
                color="inherit"
                aria-label={t('nav.menu')}
                onClick={() => setMobileOpen(true)}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundImage: 'none',
            bgcolor: 'background.default',
            p: 2,
          },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Box component={RouterLink} to="/" onClick={closeDrawer}>
            <Logo height={52} />
          </Box>
          <IconButton onClick={closeDrawer} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.to}
                onClick={closeDrawer}
                selected={isActive(item.to)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText primaryTypographyProps={{ fontWeight: 600 }} primary={t(item.key)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {site.cv ? (
          <>
            <Divider sx={{ my: 1 }} />
            <Button
              component="a"
              href={site.cv}
              download
              variant="contained"
              fullWidth
              startIcon={<DownloadIcon />}
              onClick={closeDrawer}
            >
              {t('hero.ctaCv')}
            </Button>
          </>
        ) : null}
      </Drawer>
    </>
  );
};

export default Nav;
