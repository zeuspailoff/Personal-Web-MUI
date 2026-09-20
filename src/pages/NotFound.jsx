import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Layout from '../components/layout/Layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useLanguage } from '../i18n/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();
  useDocumentTitle(t('notFound.title'));

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '5rem', md: '7rem' },
            background: (theme) =>
              `linear-gradient(92deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          {t('notFound.title')}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, mb: 4 }}>
          {t('notFound.subtitle')}
        </Typography>
        <Box>
          <Button component={RouterLink} to="/" variant="contained" size="large" startIcon={<HomeIcon />}>
            {t('notFound.cta')}
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
