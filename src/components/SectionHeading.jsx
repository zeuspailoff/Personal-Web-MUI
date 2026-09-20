import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }) => (
  <Reveal>
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === 'center' ? 720 : 'none',
        mx: align === 'center' ? 'auto' : 0,
        mb: { xs: 5, md: 7 },
      }}
    >
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: 'primary.main',
            fontSize: '0.75rem',
            '&::before': {
              content: '""',
              width: 28,
              height: 2,
              borderRadius: 1,
              bgcolor: 'primary.main',
            },
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h3" sx={{ mt: 1, fontSize: { xs: '2rem', md: '2.6rem' } }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontSize: '1.05rem' }}>
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  </Reveal>
);

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
};

export default SectionHeading;
