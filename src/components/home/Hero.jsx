import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Reveal from '../Reveal';
import { useLanguage } from '../../i18n/LanguageContext';
import { asset } from '../../utils/asset';
import { site } from '../../data/site';
import projects, { allTech } from '../../data/projects';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { value: String(projects.length), label: t('stats.projects') },
    { value: String(allTech.length), label: t('stats.stack') },
    { value: t('stats.focusValue'), label: t('stats.focus') },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        minHeight: { xs: 'auto', md: 'calc(100vh - 80px)' },
        py: { xs: 8, md: 10 },
      }}
    >
      {/* Original banner artwork, kept as a soft backdrop behind the hero copy. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: {
            xs: `url(${asset('/AbrahamBannerMovile.png')})`,
            sm: `url(${asset('/AbrahamBanner.png')})`,
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: (theme) => (theme.palette.mode === 'dark' ? 0.2 : 0.14),
          filter: 'saturate(1.1)',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: (theme) =>
              `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.55)} 0%, ${theme.palette.background.default} 92%)`,
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ maxWidth: 820 }}>
          <Reveal>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: 'success.main',
                  boxShadow: (theme) => `0 0 0 6px ${alpha(theme.palette.success.main, 0.16)}`,
                }}
              />
              <Typography variant="overline" color="text.secondary">
                {t('hero.greeting')}
              </Typography>
            </Stack>
          </Reveal>

          <Reveal delay={80}>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.75rem', sm: '4rem', md: '5rem' }, mb: 1 }}
            >
              {t('hero.name')}
            </Typography>
          </Reveal>

          <Reveal delay={140}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2.1rem', md: '2.6rem' },
                mb: 3,
                background: (theme) =>
                  `linear-gradient(92deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              {t('hero.role')}
            </Typography>
          </Reveal>

          <Reveal delay={200}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, maxWidth: 640, mb: 4 }}
            >
              {t('hero.tagline')}
            </Typography>
          </Reveal>

          <Reveal delay={260}>
            <Stack direction="row" flexWrap="wrap" gap={1.5} alignItems="center">
              <Button
                component={RouterLink}
                to="/#projects"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {t('hero.ctaProjects')}
              </Button>
              {site.cv ? (
                <Button
                  component="a"
                  href={asset(site.cv)}
                  download
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                >
                  {t('hero.ctaCv')}
                </Button>
              ) : (
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                >
                  {t('hero.ctaContact')}
                </Button>
              )}
              <Stack direction="row" spacing={0.5} sx={{ ml: { sm: 1 } }}>
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
              </Stack>
            </Stack>
          </Reveal>

          <Reveal delay={320}>
            <Stack
              direction="row"
              divider={
                <Box sx={{ width: '1px', bgcolor: 'divider', alignSelf: 'stretch', mx: { xs: 2, sm: 3 } }} />
              }
              sx={{ mt: { xs: 6, md: 8 } }}
            >
              {stats.map((stat) => (
                <Box key={stat.label}>
                  <Typography variant="h4" sx={{ color: 'primary.main' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
