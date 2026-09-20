import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

/** App shell: fixed navbar, growing main area and a footer pinned to the bottom. */
const Layout = ({ children, offsetTop = true }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Nav />
    <Box
      component="main"
      sx={{ flexGrow: 1, pt: offsetTop ? { xs: '68px', md: '80px' } : 0 }}
    >
      {children}
    </Box>
    <Footer />
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node,
  offsetTop: PropTypes.bool,
};

export default Layout;
