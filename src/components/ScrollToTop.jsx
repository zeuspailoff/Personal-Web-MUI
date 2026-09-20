import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the scroll position on navigation, or scrolls to the anchored section
 * when the URL carries a hash (e.g. /#projects from the nav bar).
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
