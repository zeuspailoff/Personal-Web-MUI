import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import Reveal from '../Reveal';
import { useLanguage } from '../../i18n/LanguageContext';
import { site } from '../../data/site';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: { xs: '68px', md: '80px' } }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Reveal>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: 1,
                  borderColor: 'divider',
                  boxShadow: (theme) => `0 30px 60px ${alpha(theme.palette.common.black, 0.3)}`,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: (theme) =>
                      `linear-gradient(140deg, ${alpha(theme.palette.primary.main, 0.18)}, transparent 55%)`,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/cvfotoresume.png"
                  alt={site.fullName}
                  loading="lazy"
                  sx={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={7}>
            <Reveal delay={120}>
              <Typography variant="overline" color="primary.main">
                {t('about.eyebrow')}
              </Typography>
              <Typography variant="h3" sx={{ mt: 1, mb: 3, fontSize: { xs: '2rem', md: '2.6rem' } }}>
                {t('about.title')}
              </Typography>
              {['about.p1', 'about.p2', 'about.p3'].map((key) => (
                <Typography key={key} variant="body1" color="text.secondary" paragraph>
                  {t(key)}
                </Typography>
              ))}
              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 3 }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                >
                  {t('hero.ctaContact')}
                </Button>
                {site.cv ? (
                  <Button component="a" href={site.cv} download variant="outlined" startIcon={<DownloadIcon />}>
                    {t('hero.ctaCv')}
                  </Button>
                ) : null}
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
