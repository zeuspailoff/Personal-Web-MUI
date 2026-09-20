/**
 * Single source of truth for the portfolio.
 * Adding a project here creates its card on the home page and its own
 * detail route at /projects/<slug> automatically.
 */
const projects = [
  {
    slug: 'space-game',
    cover: '/spacegif1.gif',
    image: '/spacegif1.gif',
    repo: 'https://github.com/zeuspailoff/Space-game',
    demo: null,
    tech: ['Java', 'IntelliJ', 'Graphics', 'Physics'],
    en: {
      title: 'Space-Game',
      summary:
        'Embark on an exciting space adventure in Cosmic Cascade! This Asteroids-style game challenges you to navigate asteroid fields, dodge enemies, and unleash laser chaos.',
      headline:
        'Embark on an exhilarating journey with Space Game, a dynamic 2D asteroid-themed adventure.',
      intro: [
        'In this game, players face relentless waves of enemies that increase in intensity as the game progresses. Each enemy defeated rewards the player with points, driving the primary objective of achieving the highest score possible.',
        'Developed in the IntelliJ development environment using the Java language, Space Game harnesses the capabilities of the ModelAndView object to deliver a seamless gaming experience. The project integrates advanced graphics to create an engaging visual environment, realistic physics to simulate accurate object behaviors, and responsive keyboard and mouse controls for intuitive user interaction.',
      ],
      features: [
        'Challenging Gameplay: Navigate through progressively difficult waves of enemies.',
        'Scoring System: Earn points for each defeated enemy to achieve high scores.',
        'Advanced Graphics: Enjoy an appealing visual experience with detailed graphics.',
        'Realistic Physics: Experience lifelike object behavior and interactions within the game environment.',
        'Responsive Controls: Utilize keyboard and mouse inputs for precise and smooth gameplay.',
      ],
      outro:
        'Space Game combines classic arcade excitement with modern development techniques to offer players an immersive and challenging experience. Dive into the action and see how high you can score!',
    },
    es: {
      title: 'Space-Game',
      summary:
        'Embárcate en una aventura espacial con Cosmic Cascade. Un juego al estilo Asteroids en el que navegas por campos de asteroides, esquivas enemigos y desatas el caos láser.',
      headline:
        'Embárcate en un viaje trepidante con Space Game, una aventura 2D dinámica de temática asteroide.',
      intro: [
        'En este juego el jugador se enfrenta a oleadas incesantes de enemigos que aumentan de intensidad conforme avanza la partida. Cada enemigo derribado otorga puntos, con el objetivo principal de conseguir la puntuación más alta posible.',
        'Desarrollado en el entorno IntelliJ con lenguaje Java, Space Game aprovecha las capacidades del objeto ModelAndView para ofrecer una experiencia de juego fluida. El proyecto integra gráficos avanzados para crear un entorno visual atractivo, física realista para simular el comportamiento de los objetos y controles de teclado y ratón que responden de forma intuitiva.',
      ],
      features: [
        'Jugabilidad exigente: avanza por oleadas de enemigos cada vez más difíciles.',
        'Sistema de puntuación: gana puntos por cada enemigo derribado y bate tu récord.',
        'Gráficos avanzados: una experiencia visual cuidada y detallada.',
        'Física realista: comportamiento e interacción de los objetos fieles a la realidad.',
        'Controles responsivos: teclado y ratón para un manejo preciso y suave.',
      ],
      outro:
        'Space Game combina la emoción del arcade clásico con técnicas de desarrollo modernas para ofrecer una experiencia inmersiva y desafiante. Métete en la acción y descubre hasta dónde llegas.',
    },
  },
  {
    slug: 'restaurants',
    cover: '/restauranteAbuela.png',
    image: '/restauranteAbuela.png',
    repo: 'https://github.com/zeuspailoff/zeuspailoff.github.com',
    demo: null,
    tech: ['HTML', 'CSS', 'JavaScript'],
    en: {
      title: 'Restaurants Website',
      summary:
        'Discover and vote for your favorite restaurants with our interactive template! Join a community of food lovers, explore new cuisines, and share your culinary experiences with ease.',
      headline: 'Discover and vote for the best restaurants on our website.',
      intro: [
        "On our platform, you'll find a selection of exceptional restaurants, each with detailed descriptions, locations, opening hours, and specialties. From cozy local bistros to elegant gourmet restaurants, there's a dining experience for every taste.",
        'Users can vote for their favorite restaurants, helping to highlight the most popular and recommended places. You can also leave your reviews and experiences to provide valuable information for other visitors.',
      ],
      features: [
        'Restaurant Listings: Detailed information about each restaurant.',
        'Voting System: Vote for your favorite places.',
        'Image Gallery: High-quality images of interiors and dishes.',
        'Reviews and Comments: Space for user opinions and experiences.',
        'Search Filters: Search by cuisine type, location, and price range.',
      ],
      outro:
        'Our goal is to offer an intuitive and visually pleasing platform where food lovers can discover new dining places and share their opinions. Explore and find the perfect restaurant for your next meal!',
    },
    es: {
      title: 'Web de restaurantes',
      summary:
        'Descubre y vota tus restaurantes favoritos con esta plantilla interactiva. Únete a una comunidad de amantes de la comida, explora nuevas cocinas y comparte tus experiencias culinarias.',
      headline: 'Descubre y vota los mejores restaurantes en nuestra web.',
      intro: [
        'En la plataforma encontrarás una selección de restaurantes excepcionales, cada uno con descripciones detalladas, ubicación, horarios y especialidades. Desde bistrós locales acogedores hasta restaurantes gourmet elegantes, hay una experiencia gastronómica para cada gusto.',
        'Los usuarios pueden votar por sus restaurantes favoritos, ayudando a destacar los locales más populares y recomendados. También puedes dejar tus reseñas y experiencias para aportar información valiosa a otros visitantes.',
      ],
      features: [
        'Listado de restaurantes: información detallada de cada local.',
        'Sistema de votación: vota por tus sitios favoritos.',
        'Galería de imágenes: fotos de calidad de interiores y platos.',
        'Reseñas y comentarios: espacio para las opiniones y experiencias de los usuarios.',
        'Filtros de búsqueda: busca por tipo de cocina, ubicación y rango de precio.',
      ],
      outro:
        'El objetivo es ofrecer una plataforma intuitiva y visualmente agradable donde los amantes de la gastronomía descubran nuevos sitios y compartan sus opiniones. Explora y encuentra el restaurante perfecto para tu próxima comida.',
    },
  },
  {
    slug: 'text-editor',
    cover: '/ThunderPeque.png',
    image: '/gifThunderEdit.gif',
    repo: 'https://github.com/zeuspailoff/Editor-de-texto',
    demo: null,
    tech: ['Java', 'IntelliJ', 'Swing'],
    en: {
      title: 'Text Editor',
      summary:
        'Meet Thunder-Edit: the text editor designed for efficiency. With its intuitive interface and innovative anchor feature, Thunder-Edit streamlines your editing process, keeping you focused and productive.',
      headline: 'Welcome to our Java Text Editor',
      intro: [
        'Our text editor, developed in Java using the IntelliJ development environment, offers a powerful and user-friendly text editing experience. Designed for both novice and professional users, this editor provides all the tools needed to manage your documents efficiently.',
        'Among its standout features is the ability to pin the editor window to your desired position on the screen, allowing you to customize your workspace and keep the editor accessible at all times.',
      ],
      features: [
        'Intuitive Interface: Easy to use with a clean and organized interface.',
        'Pinning Function: Pin the editor window to any position on your screen.',
        'Multiple Format Support: Compatible with various text file formats.',
        'Advanced Editing Features: Includes tools such as search and replace, syntax highlighting, and more.',
        'Developed in Java: Leverages the robustness and portability of the Java language.',
      ],
      outro:
        'This text editor combines advanced functionality with a straightforward design to offer you an efficient and effective tool for all your text editing needs. Try our editor and enhance your workflow today!',
    },
    es: {
      title: 'Editor de texto',
      summary:
        'Te presento Thunder-Edit: un editor de texto pensado para la eficiencia. Con una interfaz intuitiva y su innovadora función de anclaje, agiliza la edición y te mantiene concentrado y productivo.',
      headline: 'Bienvenido a nuestro editor de texto en Java',
      intro: [
        'Este editor de texto, desarrollado en Java con el entorno IntelliJ, ofrece una experiencia de edición potente y fácil de usar. Diseñado tanto para usuarios noveles como profesionales, incluye todas las herramientas necesarias para gestionar tus documentos de forma eficiente.',
        'Entre sus funciones más destacadas está la posibilidad de anclar la ventana del editor en la posición que quieras de la pantalla, lo que te permite personalizar tu espacio de trabajo y tenerlo siempre accesible.',
      ],
      features: [
        'Interfaz intuitiva: fácil de usar, limpia y bien organizada.',
        'Función de anclaje: fija la ventana del editor en cualquier posición de la pantalla.',
        'Soporte de múltiples formatos: compatible con varios formatos de archivo de texto.',
        'Edición avanzada: incluye buscar y reemplazar, resaltado de sintaxis y más.',
        'Desarrollado en Java: aprovecha la robustez y portabilidad del lenguaje.',
      ],
      outro:
        'Este editor combina funcionalidad avanzada con un diseño directo para ofrecerte una herramienta eficaz para todas tus necesidades de edición de texto. Pruébalo y mejora tu flujo de trabajo.',
    },
  },
  {
    slug: 'pizza-quiz',
    cover: '/pizzaquiz.gif',
    image: '/pizzaquiz.gif',
    repo: 'https://github.com/zeuspailoff/QuizGame',
    demo: 'https://pizza-quiz.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    en: {
      title: 'PizzaQuiz',
      summary:
        'PizzaQuiz: Dive into a world of pizza-themed trivia with PizzaQuiz! Test your knowledge of toppings, dough, and pizza history in this exciting quiz game. Challenge your friends, earn achievements, and become the ultimate pizza expert!',
      headline: 'Welcome to PizzaQuiz!',
      intro: [
        'Dive into a world of pizza-themed trivia with PizzaQuiz. Test your knowledge of toppings, dough, and pizza history in this exciting quiz game.',
        'PizzaQuiz is designed with HTML, CSS, and JavaScript to offer an interactive and fun user experience. Challenge your friends, earn achievements, and become the ultimate pizza expert.',
      ],
      features: [
        'Trivia Questions: Challenge your knowledge about all things pizza.',
        'Multiplayer: Compete against your friends and see who knows more.',
        'Achievements: Earn achievements as you play and showcase your expertise.',
        'Interactive Interface: Enjoy a smooth and engaging user experience.',
        'Built with HTML, CSS, and JavaScript: Utilizes modern web technologies for optimal performance.',
      ],
      outro:
        'PizzaQuiz combines fun and learning in an interactive platform. Start playing today and find out how much you really know about pizza!',
    },
    es: {
      title: 'PizzaQuiz',
      summary:
        'Sumérgete en un mundo de preguntas sobre pizza con PizzaQuiz. Pon a prueba lo que sabes de ingredientes, masas e historia de la pizza. Reta a tus amigos, consigue logros y conviértete en el experto definitivo.',
      headline: 'Bienvenido a PizzaQuiz',
      intro: [
        'Sumérgete en un mundo de preguntas sobre pizza con PizzaQuiz. Pon a prueba tus conocimientos sobre ingredientes, masas e historia de la pizza en este divertido juego de preguntas.',
        'PizzaQuiz está hecho con HTML, CSS y JavaScript para ofrecer una experiencia interactiva y divertida. Reta a tus amigos, consigue logros y conviértete en el experto definitivo en pizza.',
      ],
      features: [
        'Preguntas de trivia: pon a prueba todo lo que sabes sobre la pizza.',
        'Multijugador: compite con tus amigos y descubre quién sabe más.',
        'Logros: consigue logros mientras juegas y demuestra tu nivel.',
        'Interfaz interactiva: una experiencia de usuario fluida y atractiva.',
        'Hecho con HTML, CSS y JavaScript: tecnologías web modernas para un rendimiento óptimo.',
      ],
      outro:
        'PizzaQuiz combina diversión y aprendizaje en una plataforma interactiva. Empieza a jugar y descubre cuánto sabes realmente de pizza.',
    },
  },
  {
    slug: 'ineedup',
    cover: '/Home.png',
    image: '/Home.png',
    repo: 'https://github.com/zeuspailoff/Portal-de-necesidades-front',
    demo: 'https://ineedup.com.es/',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    en: {
      title: 'I Need Up',
      summary:
        'Welcome to Ineddup, where you can ask questions, find answers. Much like Stack Overflow, Ineddup provides a collaborative environment for users to seek knowledge, share expertise, and connect with others in their fields of interest',
      headline: 'Welcome to Ineddup',
      intro: [
        'Welcome to Ineddup, where you can ask questions and find answers. Much like Stack Overflow, Ineddup provides a collaborative environment for users to seek knowledge, share expertise, and connect with others in their fields of interest.',
        'Ineddup is built using React for the front-end, Node.js with Express for the back-end, and MySQL for the database. This combination ensures a robust, efficient, and scalable platform.',
        'The platform also incorporates email sending functionality for registration validation and password recovery, ensuring a secure and user-friendly experience.',
      ],
      features: [
        'Question and Answer Platform: Ask questions and get answers from the community.',
        'Collaborative Environment: Share knowledge and expertise with other users.',
        'React Front-End: Enjoy a dynamic and responsive user interface.',
        'Node.js and Express Back-End: Benefit from a powerful and efficient server-side framework.',
        'MySQL Database: Reliable and scalable database management.',
        'Email Functionality: Secure email validation for registration and password recovery.',
      ],
      outro:
        'Ineddup combines modern web technologies to provide a seamless and effective platform for knowledge sharing and community engagement. Join us today and start connecting with others in your field of interest!',
    },
    es: {
      title: 'I Need Up',
      summary:
        'Ineddup es el sitio donde puedes hacer preguntas y encontrar respuestas. Al estilo de Stack Overflow, ofrece un entorno colaborativo para buscar conocimiento, compartir experiencia y conectar con otras personas de tu campo.',
      headline: 'Bienvenido a Ineddup',
      intro: [
        'Bienvenido a Ineddup, donde puedes hacer preguntas y encontrar respuestas. Al estilo de Stack Overflow, Ineddup ofrece un entorno colaborativo para buscar conocimiento, compartir experiencia y conectar con otras personas de tu campo de interés.',
        'Ineddup está construido con React en el front-end, Node.js con Express en el back-end y MySQL como base de datos. Esta combinación garantiza una plataforma robusta, eficiente y escalable.',
        'La plataforma incorpora además envío de correos para validar el registro y recuperar la contraseña, garantizando una experiencia segura y cómoda.',
      ],
      features: [
        'Plataforma de preguntas y respuestas: pregunta y recibe respuestas de la comunidad.',
        'Entorno colaborativo: comparte conocimiento y experiencia con otros usuarios.',
        'Front-end en React: una interfaz dinámica y responsive.',
        'Back-end en Node.js y Express: un framework de servidor potente y eficiente.',
        'Base de datos MySQL: gestión de datos fiable y escalable.',
        'Funcionalidad de correo: validación segura en el registro y recuperación de contraseña.',
      ],
      outro:
        'Ineddup combina tecnologías web modernas para ofrecer una plataforma fluida y eficaz de intercambio de conocimiento y participación comunitaria. Únete y empieza a conectar con gente de tu campo.',
    },
  },
  {
    slug: 'first-cv',
    cover: '/cvfoto.png',
    image: '/cvfoto359.png',
    repo: 'https://github.com/zeuspailoff',
    demo: null,
    tech: ['HTML', 'CSS', 'Bootstrap'],
    en: {
      title: 'My First CV',
      summary:
        'A comprehensive showcase of my skills, experiences, and achievements. This digital resume provides a glimpse into my professional journey, highlighting my expertise in various fields and demonstrating my commitment to personal and professional development.',
      headline: 'Welcome to My First CV',
      intro: [
        'This is my first CV, designed and developed using HTML, CSS, and Bootstrap. It showcases my skills, experiences, and education in a clean and professional layout.',
        'The CV is structured to highlight key sections such as personal information, work experience, education, skills, and projects. Each section is carefully crafted to provide a comprehensive overview of my qualifications and achievements.',
      ],
      features: [
        'Clean Design: A neat and professional layout for easy readability.',
        'Responsive Layout: Built with Bootstrap to ensure a responsive design across all devices.',
        'Personal Information: Includes essential contact information and a brief personal statement.',
        'Work Experience: Detailed descriptions of my previous job roles and responsibilities.',
        'Education: Information on my academic background and achievements.',
        'Skills: A section highlighting my technical and soft skills.',
        'Projects: Showcase of my key projects with descriptions and links.',
      ],
      outro:
        'This CV is a testament to my dedication and skill in web development, combining modern web technologies to create a polished and effective personal profile. Explore my CV to learn more about my professional journey and capabilities.',
    },
    es: {
      title: 'Mi primer CV',
      summary:
        'Un repaso completo de mis habilidades, experiencia y logros. Este currículum digital ofrece una visión de mi trayectoria profesional, destacando mis conocimientos en distintas áreas y mi compromiso con el desarrollo personal y profesional.',
      headline: 'Bienvenido a mi primer CV',
      intro: [
        'Este es mi primer CV, diseñado y desarrollado con HTML, CSS y Bootstrap. Muestra mis habilidades, experiencia y formación en un diseño limpio y profesional.',
        'El CV está estructurado para destacar secciones clave como información personal, experiencia laboral, formación, habilidades y proyectos. Cada sección está cuidada para ofrecer una visión completa de mi perfil y mis logros.',
      ],
      features: [
        'Diseño limpio: una maquetación cuidada y profesional, fácil de leer.',
        'Diseño responsive: hecho con Bootstrap para adaptarse a todos los dispositivos.',
        'Información personal: datos de contacto esenciales y una breve presentación.',
        'Experiencia laboral: descripción detallada de mis puestos y responsabilidades.',
        'Formación: información sobre mi trayectoria académica y mis logros.',
        'Habilidades: sección con mis competencias técnicas y personales.',
        'Proyectos: muestra de mis proyectos principales con descripciones y enlaces.',
      ],
      outro:
        'Este CV refleja mi dedicación y mis conocimientos de desarrollo web, combinando tecnologías modernas para crear un perfil personal pulido y eficaz. Explóralo para conocer mejor mi trayectoria y mis capacidades.',
    },
  },
];

/** All distinct technologies across the portfolio, sorted alphabetically. */
export const allTech = [...new Set(projects.flatMap((project) => project.tech))].sort((a, b) =>
  a.localeCompare(b),
);

export const getProject = (slug) => projects.find((project) => project.slug === slug);

export default projects;
