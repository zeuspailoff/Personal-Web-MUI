import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../Logo';
import { useLanguage } from '../../i18n/LanguageContext';
import { site } from '../../data/site';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        pt: { xs: 6, md: 8 },
        pb: 4,
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              component={RouterLink}
              to="/"
              sx={{ display: 'inline-flex' }}
              aria-label={site.name}
            >
              <Logo height={64} />
            </Box>
            <Box>
              <Typography variant="h6">{site.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {t('footer.role')}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title={t('footer.github')}>
              <IconButton
                component="a"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.github')}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={t('footer.linkedin')}>
              <IconButton
                component="a"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.linkedin')}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={t('footer.top')}>
              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label={t('footer.top')}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} {site.fullName}. {t('footer.rights')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('footer.built')}{' '}
            <Link component={RouterLink} to="/contact" color="primary.main">
              {t('nav.contact')}
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
