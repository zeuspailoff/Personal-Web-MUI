import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

/**
 * Fades and lifts its children into view the first time they are scrolled to.
 * Falls back to rendering them visible when IntersectionObserver is missing or
 * the visitor asked for reduced motion.
 */
const Reveal = ({ children, delay = 0, y = 24, sx, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (!node || reduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translate3d(0, ${y}px, 0)`,
        transition: (theme) =>
          theme.transitions.create(['opacity', 'transform'], {
            duration: 620,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
        transitionDelay: `${delay}ms`,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  y: PropTypes.number,
  sx: PropTypes.object,
};

export default Reveal;
