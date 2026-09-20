/**
 * Resuelve una ruta de /public contra la base de despliegue.
 * En local devuelve '/foo.png'; en GitHub Pages '/Personal-Web-MUI/foo.png'.
 */
export const asset = (path) => {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};

export default asset;
