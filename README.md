# CV Personal

Un CV web para mostrar los proyectos realizados más destacados.

Hecho en React + Vite + MUI, con tema claro/oscuro y contenido en inglés y español.

## Arrancar el proyecto

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run lint     # eslint
```

El formulario de contacto usa EmailJS. Copia `.env.example` a `.env` y rellena
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_USER_ID`.
Si faltan, el formulario sigue funcionando pero avisa de que el envío no está
configurado en lugar de fallar.

## Añadir un proyecto

Todo el portfolio sale de [`src/data/projects.js`](src/data/projects.js). Añade un
objeto al array con su `slug`, imágenes, enlaces, tecnologías y los textos en `en`
y `es`; la tarjeta de la home y la página `/projects/<slug>` se generan solas.

Los textos de la interfaz (menú, botones, secciones) están en
[`src/i18n/translations.js`](src/i18n/translations.js), y los datos personales,
enlaces y el listado de tecnologías en [`src/data/site.js`](src/data/site.js).

## Estructura

```
src/
  components/      Nav, Footer, tarjetas y secciones de la home
  context/         tema claro/oscuro (persistido en localStorage)
  data/            projects.js y site.js — el contenido del sitio
  i18n/            diccionario EN/ES y su provider
  pages/           Home, Contact, ProjectDetail, NotFound
  theme/           paleta, tipografía y overrides de MUI
```
