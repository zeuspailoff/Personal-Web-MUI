import { useEffect } from 'react';

const BASE = 'Abraham Díaz';

/** Keeps the browser tab title in sync with the current page. */
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Full Stack Developer`;
  }, [title]);
};

export default useDocumentTitle;
