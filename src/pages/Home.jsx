import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import SkillsSection from '../components/home/SkillsSection';
import AboutSection from '../components/home/AboutSection';
import Reveal from '../components/Reveal';
import Layout from '../components/layout/Layout';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />

      <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box
              sx={{
                textAlign: 'center',
                px: { xs: 3, md: 8 },
                py: { xs: 6, md: 8 },
                borderRadius: 4,
                border: 1,
                borderColor: 'divider',
                background: (theme) =>
                  `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.16)}, ${alpha(
                    theme.palette.secondary.main,
                    0.12,
                  )})`,
              }}
            >
              <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                {t('cta.title')}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, mb: 4 }}>
                {t('cta.subtitle')}
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {t('cta.button')}
              </Button>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
