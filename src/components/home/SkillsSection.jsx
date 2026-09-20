import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { skillGroups } from '../../data/site';

const SkillBadge = ({ skill }) => (
  <Stack
    direction="row"
    spacing={1.25}
    alignItems="center"
    sx={{
      px: 1.75,
      py: 1,
      borderRadius: 2,
      border: 1,
      borderColor: 'divider',
      bgcolor: (theme) => alpha(theme.palette.primary.main, 0.05),
      transition: 'border-color .25s ease, transform .25s ease',
      '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
    }}
  >
    {skill.icon ? (
      <Box
        component="img"
        src={skill.icon}
        alt=""
        loading="lazy"
        sx={{ width: 22, height: 22, objectFit: 'contain', display: 'block' }}
      />
    ) : (
      <Box
        aria-hidden
        sx={{
          width: 22,
          height: 22,
          borderRadius: '6px',
          display: 'grid',
          placeItems: 'center',
          fontSize: 12,
          fontWeight: 700,
          color: 'primary.main',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
        }}
      >
        {skill.name.charAt(0)}
      </Box>
    )}
    <Typography variant="body2" fontWeight={600}>
      {skill.name}
    </Typography>
  </Stack>
);

SkillBadge.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }).isRequired,
};

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="section"
      id="stack"
      sx={{
        py: { xs: 8, md: 12 },
        scrollMarginTop: { xs: '68px', md: '80px' },
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.5),
        borderTop: 1,
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow={t('stack.eyebrow')}
          title={t('stack.title')}
          subtitle={t('stack.subtitle')}
        />
        <Grid container spacing={3}>
          {skillGroups.map((group, index) => (
            <Grid item xs={12} md={4} key={group.id} sx={{ display: 'flex' }}>
              <Reveal delay={index * 90} sx={{ width: '100%', display: 'flex' }}>
                <Card sx={{ width: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {t(group.labelKey)}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                      {group.skills.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
