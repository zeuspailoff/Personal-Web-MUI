export const LANGUAGES = ['en', 'es'];

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Open navigation menu',
    'nav.toggleTheme': 'Switch theme',
    'nav.toggleLanguage': 'Cambiar a español',

    'hero.greeting': "Hi, I'm",
    'hero.name': 'Abraham Díaz',
    'hero.role': 'Full Stack Developer',
    'hero.tagline':
      'I build web products end to end — from the React interface to the Node.js or Spring Boot API and the database behind it.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV',
    'hero.ctaContact': 'Get in touch',

    'stats.projects': 'Projects shipped',
    'stats.stack': 'Core technologies',
    'stats.focus': 'Focus',
    'stats.focusValue': 'Full Stack',

    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Portfolio Showcase: Exploring My Creations',
    'projects.subtitle':
      'A selection of the things I have designed, built and shipped. Each one has its own page with the details.',
    'projects.filterAll': 'All',
    'projects.repo': 'Check the repository',
    'projects.demo': 'Open the live site',
    'projects.more': 'Learn more',
    'projects.empty': 'No projects match this filter.',

    'stack.eyebrow': 'Toolbox',
    'stack.title': 'Technologies I work with',
    'stack.subtitle': 'The stack I use day to day, on both sides of the API.',
    'stack.frontend': 'Front-end',
    'stack.backend': 'Back-end',
    'stack.tools': 'Tools & databases',

    'about.eyebrow': 'About me',
    'about.title': 'Who am I?',
    'about.p1':
      'I am someone who finds their identity in the world of technology and programming. My studies in git, HTML, Java, JavaScript, Python, Node.js, Spring Boot, CSS, and Material UI not only constitute a solid foundation of technical knowledge but also reflect my commitment to continuous learning and personal improvement.',
    'about.p2':
      'I consider honesty to be fundamental in all my interactions, both in my work and personal life. I believe in transparency and integrity as pillars of any relationship or project I engage in.',
    'about.p3':
      'My interest in technology goes beyond mere curiosity; it is a passion that drives my desire to explore new solutions and contribute to the advancement of society through technological innovation. I value personal growth both professionally and personally, and I constantly seek opportunities to expand my skills and knowledge, as well as to grow as an individual.',

    'cta.title': 'Have a project in mind?',
    'cta.subtitle': "Tell me about it — I'll get back to you as soon as I can.",
    'cta.button': 'Write to me',

    'detail.back': 'Back to projects',
    'detail.features': 'Key Features',
    'detail.stack': 'Built with',
    'detail.repo': 'Repository',
    'detail.demo': 'Live site',
    'detail.next': 'Next project',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Contact Me',
    'contact.intro':
      "If you have any questions, feel free to reach out to me through the form below. I'll get back to you as soon as possible! Don't forget to include a contact method so I can respond to you.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again later.',
    'contact.notConfigured':
      'The mail service is not configured yet. Reach me on LinkedIn or GitHub in the meantime.',
    'contact.errRequired': 'This field is required',
    'contact.errEmail': 'Enter a valid email address',
    'contact.elsewhere': 'Prefer another channel?',

    'footer.role': 'Full Stack Developer',
    'footer.built': 'Built with React, Vite and MUI.',
    'footer.rights': 'All rights reserved.',
    'footer.github': 'Check my GitHub',
    'footer.linkedin': 'Check my LinkedIn',
    'footer.top': 'Back to top',

    'notFound.title': 'Page not found',
    'notFound.subtitle': 'The page you are looking for does not exist or has been moved.',
    'notFound.cta': 'Go back home',
  },

  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.menu': 'Abrir menú de navegación',
    'nav.toggleTheme': 'Cambiar tema',
    'nav.toggleLanguage': 'Switch to English',

    'hero.greeting': 'Hola, soy',
    'hero.name': 'Abraham Díaz',
    'hero.role': 'Desarrollador Full Stack',
    'hero.tagline':
      'Construyo productos web de principio a fin: desde la interfaz en React hasta la API en Node.js o Spring Boot y la base de datos que hay detrás.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaCv': 'Descargar CV',
    'hero.ctaContact': 'Contactar',

    'stats.projects': 'Proyectos publicados',
    'stats.stack': 'Tecnologías principales',
    'stats.focus': 'Perfil',
    'stats.focusValue': 'Full Stack',

    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Portfolio: un recorrido por mis creaciones',
    'projects.subtitle':
      'Una selección de lo que he diseñado, construido y publicado. Cada proyecto tiene su propia página con los detalles.',
    'projects.filterAll': 'Todos',
    'projects.repo': 'Ver el repositorio',
    'projects.demo': 'Abrir la web',
    'projects.more': 'Saber más',
    'projects.empty': 'Ningún proyecto coincide con este filtro.',

    'stack.eyebrow': 'Herramientas',
    'stack.title': 'Tecnologías con las que trabajo',
    'stack.subtitle': 'El stack que uso a diario, a ambos lados de la API.',
    'stack.frontend': 'Front-end',
    'stack.backend': 'Back-end',
    'stack.tools': 'Herramientas y bases de datos',

    'about.eyebrow': 'Sobre mí',
    'about.title': '¿Quién soy?',
    'about.p1':
      'Soy alguien que encuentra su identidad en el mundo de la tecnología y la programación. Mis estudios en git, HTML, Java, JavaScript, Python, Node.js, Spring Boot, CSS y Material UI no solo constituyen una base sólida de conocimiento técnico, sino que también reflejan mi compromiso con el aprendizaje continuo y la mejora personal.',
    'about.p2':
      'Considero la honestidad algo fundamental en todas mis interacciones, tanto en lo profesional como en lo personal. Creo en la transparencia y la integridad como pilares de cualquier relación o proyecto en el que participo.',
    'about.p3':
      'Mi interés por la tecnología va más allá de la simple curiosidad: es una pasión que impulsa mi deseo de explorar nuevas soluciones y contribuir al avance de la sociedad a través de la innovación tecnológica. Valoro el crecimiento tanto profesional como personal, y busco constantemente oportunidades para ampliar mis habilidades y conocimientos, además de crecer como persona.',

    'cta.title': '¿Tienes un proyecto en mente?',
    'cta.subtitle': 'Cuéntamelo y te responderé lo antes posible.',
    'cta.button': 'Escríbeme',

    'detail.back': 'Volver a proyectos',
    'detail.features': 'Características principales',
    'detail.stack': 'Construido con',
    'detail.repo': 'Repositorio',
    'detail.demo': 'Web en vivo',
    'detail.next': 'Siguiente proyecto',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Contacta conmigo',
    'contact.intro':
      'Si tienes cualquier duda, escríbeme con el formulario de abajo. Te responderé lo antes posible. No olvides incluir una forma de contacto para poder contestarte.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensaje enviado correctamente.',
    'contact.error': 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.',
    'contact.notConfigured':
      'El servicio de correo aún no está configurado. Mientras tanto puedes escribirme por LinkedIn o GitHub.',
    'contact.errRequired': 'Este campo es obligatorio',
    'contact.errEmail': 'Introduce un correo electrónico válido',
    'contact.elsewhere': '¿Prefieres otro canal?',

    'footer.role': 'Desarrollador Full Stack',
    'footer.built': 'Hecho con React, Vite y MUI.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.github': 'Visita mi GitHub',
    'footer.linkedin': 'Visita mi LinkedIn',
    'footer.top': 'Volver arriba',

    'notFound.title': 'Página no encontrada',
    'notFound.subtitle': 'La página que buscas no existe o se ha movido.',
    'notFound.cta': 'Volver al inicio',
  },
};

export default translations;
