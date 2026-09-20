import { Link as RouterLink, Navigate, useParams } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { asset } from '../utils/asset';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Layout from '../components/layout/Layout';
import Reveal from '../components/Reveal';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useLanguage } from '../i18n/LanguageContext';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();

  const index = projects.findIndex((project) => project.slug === slug);
  const project = index >= 0 ? projects[index] : null;
  const copy = project ? project[lang] ?? project.en : null;
  const next = project ? projects[(index + 1) % projects.length] : null;

  useDocumentTitle(copy?.title);

  if (!project) return <Navigate to="/404" replace />;

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Button
          component={RouterLink}
          to="/#projects"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: { xs: 3, md: 5 }, ml: -1 }}
        >
          {t('detail.back')}
        </Button>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Reveal>
              <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2 }}>
                {project.tech.map((tech) => (
                  <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                ))}
              </Stack>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, mb: 2 }}>
                {copy.title}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ fontWeight: 500, mb: 4, lineHeight: 1.45 }}
              >
                {copy.headline}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mb: 5 }}>
                <Button
                  component="a"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                >
                  {t('detail.repo')}
                </Button>
                {project.demo ? (
                  <Button
                    component="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    startIcon={<OpenInNewIcon />}
                  >
                    {t('detail.demo')}
                  </Button>
                ) : null}
              </Stack>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={5}>
            <Reveal delay={100}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: 1,
                  borderColor: 'divider',
                  boxShadow: (theme) => `0 28px 60px ${alpha(theme.palette.common.black, 0.32)}`,
                  position: 'sticky',
                  top: { md: 104 },
                }}
              >
                <Box
                  component="img"
                  src={asset(project.image)}
                  alt={copy.title}
                  loading="lazy"
                  sx={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={7}>
            <Reveal>
              {copy.intro.map((paragraph) => (
                <Typography
                  key={paragraph.slice(0, 40)}
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ fontSize: '1.05rem' }}
                >
                  {paragraph}
                </Typography>
              ))}

              <Divider sx={{ my: 4 }} />

              <Typography variant="h4" gutterBottom>
                {t('detail.features')}
              </Typography>
              <List disablePadding>
                {copy.features.map((feature) => (
                  <ListItem key={feature} disableGutters alignItems="flex-start" sx={{ py: 0.75 }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.4, color: 'primary.main' }}>
                      <CheckCircleOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.02rem' }}
                    />
                  </ListItem>
                ))}
              </List>

              <Typography variant="body1" color="text.secondary" sx={{ mt: 4, fontSize: '1.05rem' }}>
                {copy.outro}
              </Typography>
            </Reveal>
          </Grid>
        </Grid>

        <Divider sx={{ mt: { xs: 6, md: 8 }, mb: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Button component={RouterLink} to="/#projects" startIcon={<ArrowBackIcon />}>
            {t('detail.back')}
          </Button>
          <Button
            component={RouterLink}
            to={`/projects/${next.slug}`}
            endIcon={<ArrowForwardIcon />}
            variant="outlined"
          >
            {t('detail.next')}: {(next[lang] ?? next.en).title}
          </Button>
        </Stack>
      </Container>
    </Layout>
  );
};

export default ProjectDetail;
