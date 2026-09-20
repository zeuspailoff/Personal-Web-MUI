import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { asset } from '../utils/asset';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useLanguage } from '../i18n/LanguageContext';

const ProjectCard = ({ project }) => {
  const { lang, t } = useLanguage();
  const copy = project[lang] ?? project.en;
  const to = `/projects/${project.slug}`;

  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
        '&:hover, &:focus-within': {
          transform: { md: 'translateY(-6px)' },
          borderColor: 'primary.main',
          boxShadow: (theme) => `0 22px 48px ${alpha(theme.palette.common.black, 0.35)}`,
        },
        '&:hover .project-cover img, &:focus-within .project-cover img': {
          transform: 'scale(1.06)',
        },
      }}
    >
      <Box
        className="project-cover"
        component={RouterLink}
        to={to}
        sx={{
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '16 / 10',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
        }}
      >
        <Box
          component="img"
          src={asset(project.cover)}
          alt={copy.title}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {copy.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {copy.summary}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 2.5 }}>
          {project.tech.map((tech) => (
            <Chip key={tech} label={tech} size="small" variant="outlined" />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 0.5 }}>
        <Tooltip title={t('projects.repo')}>
          <IconButton
            component="a"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t('projects.repo')} - ${copy.title}`}
            size="small"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        {project.demo ? (
          <Tooltip title={t('projects.demo')}>
            <IconButton
              component="a"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t('projects.demo')} - ${copy.title}`}
              size="small"
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : null}
        <Button
          component={RouterLink}
          to={to}
          size="small"
          endIcon={<ArrowForwardIcon />}
          sx={{ ml: 'auto' }}
        >
          {t('projects.more')}
        </Button>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    en: PropTypes.object.isRequired,
    es: PropTypes.object,
  }).isRequired,
};

export default ProjectCard;
