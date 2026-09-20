import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { site } from '../data/site';

/**
 * The monogram ships in two versions: a cream one for dark surfaces and a
 * charcoal one for light surfaces. Pick whichever the current theme needs.
 */
const Logo = ({ height = 48, sx }) => {
  const theme = useTheme();
  const src = theme.palette.mode === 'dark' ? site.logo : site.logoOnLight;

  return (
    <Box
      component="img"
      src={src}
      alt={site.name}
      sx={{ height, width: 'auto', display: 'block', ...sx }}
    />
  );
};

Logo.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  sx: PropTypes.object,
};

export default Logo;
