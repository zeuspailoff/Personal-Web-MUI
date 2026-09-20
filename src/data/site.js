export const site = {
  name: 'Abraham Díaz',
  fullName: 'Abraham Díaz González',
  logo: '/Abraham.png',
  logoOnLight: '/logoabraham.png',
  // Deja un PDF en public/ y pon aquí su ruta (p.ej. '/Abraham-Diaz-CV.pdf')
  // para que reaparezcan los botones de descarga del CV. Con null se ocultan.
  cv: null,
  github: 'https://github.com/zeuspailoff/',
  linkedin: 'https://www.linkedin.com/in/abrahamdiazgonzalez/',
};

/**
 * Skill groups rendered in the "Technologies I work with" section.
 * `icon` points at a file in /public/icons; skills without one fall back to a
 * lettered badge, so new entries never break the layout.
 */
export const skillGroups = [
  {
    id: 'frontend',
    labelKey: 'stack.frontend',
    skills: [
      { name: 'HTML5', icon: '/icons/html5.png' },
      { name: 'CSS3', icon: '/icons/css.png' },
      { name: 'JavaScript', icon: '/icons/js.png' },
      { name: 'React' },
      { name: 'Material UI' },
      { name: 'Bootstrap' },
    ],
  },
  {
    id: 'backend',
    labelKey: 'stack.backend',
    skills: [
      { name: 'Node.js', icon: '/icons/node.png' },
      { name: 'Express' },
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Python' },
    ],
  },
  {
    id: 'tools',
    labelKey: 'stack.tools',
    skills: [
      { name: 'Git', icon: '/icons/git.png' },
      { name: 'GitHub', icon: '/icons/github.png' },
      { name: 'MySQL' },
      { name: 'Vite' },
      { name: 'IntelliJ' },
    ],
  },
];

export default site;
