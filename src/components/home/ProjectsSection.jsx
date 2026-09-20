import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProjectCard from '../ProjectCard';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import projects, { allTech } from '../../data/projects';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState(null);

  const visible = useMemo(
    () => (filter ? projects.filter((project) => project.tech.includes(filter)) : projects),
    [filter],
  );

  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: { xs: '68px', md: '80px' } }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <Reveal>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            justifyContent="center"
            sx={{ mb: { xs: 4, md: 6 } }}
          >
            <Chip
              label={t('projects.filterAll')}
              onClick={() => setFilter(null)}
              color={filter === null ? 'primary' : 'default'}
              variant={filter === null ? 'filled' : 'outlined'}
            />
            {allTech.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                onClick={() => setFilter((prev) => (prev === tech ? null : tech))}
                color={filter === tech ? 'primary' : 'default'}
                variant={filter === tech ? 'filled' : 'outlined'}
              />
            ))}
          </Stack>
        </Reveal>

        {visible.length ? (
          <Grid container spacing={3}>
            {visible.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.slug} sx={{ display: 'flex' }}>
                <Reveal delay={(index % 3) * 90} sx={{ width: '100%', display: 'flex' }}>
                  <ProjectCard project={project} />
                </Reveal>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography align="center" color="text.secondary">
            {t('projects.empty')}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsSection;
