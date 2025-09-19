export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de desarrollo web',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia de la web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Evolución de la web: desde la Web 1.0 (estática) hasta la Web 3.0 (descentralizada)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Impacto de los estándares web: HTML, CSS y JavaScript en el desarrollo web',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Tecnologías claves en la evolución: HTML5, CSS3 y JavaScript moderno',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Cambio de paradigma: de sitios estáticos a dinámicos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'La web semántica y su importancia: ontologías y estructuración de contenido',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diferencias entre sitios estáticos y dinámicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Definición de sitios estáticos y dinámicos: características y diferencias claves     ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Tecnologías utilizadas en sitios estáticos: HTML, CSS y JavaScript básico',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Generación dinámica de contenido: servidores y bases de datos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Uso de servidores en sitios dinámicos: PHP, Node.js y Python',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Beneficios y limitaciones de ambos tipos: rendimiento, escalabilidad y flexibilidad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conceptos de diseño responsivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Diseño adaptable a diferentes dispositivos: principios de diseño responsivo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Uso de Media Queries: configuración para diferentes resoluciones de pantalla',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Flexbox y Grid Layout: técnicas para diseñar layouts flexibles',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Optimización para dispositivos móviles: mejores prácticas de UX en móviles',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Accesibilidad web: implementación de un diseño inclusivo y accesible',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2)',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'AJAX',
      significado:
        'Acrónimo de <em>Asynchronous JavaScript and XML</em>, es una técnica de desarrollo web que permite actualizar partes específicas de una página web sin necesidad de recargar completamente la página, mejorando significativamente la experiencia del usuario al hacer las aplicaciones web más rápidas e interactivas.',
    },
    {
      termino: 'API',
      significado:
        'Siglas de <em>Application Programming Interface</em>, se refiere a un conjunto de protocolos y herramientas que permiten a diferentes aplicaciones de software comunicarse entre sí, facilitando la integración de servicios y el intercambio de datos de manera estructurada y segura.',
    },
    {
      termino: 'ARIA',
      significado:
        'Acrónimo de <em>Accessible Rich Internet Applications</em>, es un conjunto de atributos especiales que se pueden añadir a elementos HTML para proporcionar información adicional sobre su función y estado a las tecnologías asistivas, mejorando la accesibilidad web para usuarios con discapacidades.',
    },
    {
      termino: '<em>Arrow functions</em>',
      significado:
        'Característica de JavaScript moderno que proporciona una sintaxis más concisa para escribir funciones, utilizando la notación de flecha (=>) y ofreciendo un comportamiento especial con respecto al contexto (this), simplificando el código y mejorando su legibilidad.',
    },
    {
      termino: '<em>Async/await</em>',
      significado:
        'Sintaxis moderna de JavaScript que permite escribir código asíncrono de manera más legible y estructurada, facilitando el manejo de operaciones que toman tiempo como peticiones a servidores o acceso a bases de datos sin bloquear la ejecución del resto del programa.',
    },
    {
      termino: '<em>Breakpoints</em>',
      significado:
        'Puntos específicos de ancho de pantalla donde el diseño responsivo cambia su layout para adaptarse mejor al dispositivo, permitiendo que las aplicaciones web se vean y funcionen óptimamente en diferentes tamaños de pantalla, desde móviles hasta monitores de escritorio.',
    },
    {
      termino: 'CDN',
      significado:
        'Siglas de <em>Content Delivery Network</em>, es una red de servidores distribuidos geográficamente que almacenan copias de contenido web estático, permitiendo que los usuarios accedan a los recursos desde el servidor más cercano a su ubicación para mejorar la velocidad de carga.',
    },
    {
      termino: 'CGI',
      significado:
        'Acrónimo de <em>Common Gateway Interface</em>, es un estándar que define cómo los servidores web pueden ejecutar programas externos para generar contenido dinámico, representando una de las primeras tecnologías utilizadas para crear sitios web interactivos.',
    },
    {
      termino: 'CSS',
      significado:
        'Siglas de <em>Cascading Style Sheets</em>, es un lenguaje de diseño utilizado para definir la presentación visual de documentos HTML, incluyendo aspectos como colores, tipografía, layout y animaciones, permitiendo separar el contenido de su presentación visual.',
    },
    {
      termino: 'CSS Grid:',
      significado:
        'Sistema de <em>layout</em> bidimensional de CSS que permite crear diseños complejos organizando elementos en filas y columnas, proporcionando control preciso sobre la posición y el tamaño de los elementos en una página web con mayor flexibilidad que métodos tradicionales.',
    },
    {
      termino: '<em>Destructuring</em>',
      significado:
        'Característica de JavaScript moderno que permite extraer valores de arrays u objetos y asignarlos a variables individuales de manera concisa, simplificando el código y mejorando su legibilidad al trabajar con estructuras de datos complejas.',
    },
    {
      termino: 'Django',
      significado:
        '<em>Framework</em> de desarrollo web para Python que proporciona una estructura robusta para crear aplicaciones web complejas, incluyendo herramientas integradas para manejo de bases de datos, autenticación de usuarios y generación automática de interfaces administrativas.',
    },
    {
      termino: 'DOM',
      significado:
        'Siglas de <em>Document Object Model</em>, es una representación estructurada del contenido HTML de una página web que permite a los lenguajes de programación como JavaScript acceder y modificar dinámicamente los elementos, texto y atributos de la página.',
    },
    {
      termino: 'Express.js',
      significado:
        '<em>Framework</em> minimalista para Node.js que simplifica la creación de aplicaciones web y APIs del lado del servidor, proporcionando herramientas para manejar rutas, middleware y respuestas HTTP de manera eficiente y estructurada.',
    },
    {
      termino: 'Fetch API:',
      significado:
        'Interfaz moderna de JavaScript que proporciona una forma más poderosa y flexible de realizar peticiones HTTP que el método XMLHttpRequest tradicional, utilizando promesas para manejar respuestas asíncronas de manera más elegante.',
    },
    {
      termino: 'Flask',
      significado:
        '<em>Framework</em> ligero para Python que permite crear aplicaciones web rápidamente con una estructura mínima, siendo ideal para proyectos pequeños y medianos que requieren flexibilidad y control sobre la arquitectura de la aplicación.',
    },
    {
      termino: '<em>Flexbox</em>',
      significado:
        'Método de <em>layout</em> unidimensional de CSS que facilita la distribución de espacio y la alineación de elementos dentro de un contenedor, proporcionando control sobre la dirección, el orden y la flexibilidad de los elementos de manera más intuitiva que métodos tradicionales.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'Estructura de <em>software</em> que proporciona una base y herramientas predefinidas para el desarrollo de aplicaciones, estableciendo patrones arquitectónicos y mejores prácticas que aceleran el desarrollo y mejoran la calidad del código resultante.',
    },
    {
      termino: '<em>Frontend</em>',
      significado:
        'Parte de una aplicación web que interactúa directamente con el usuario, incluyendo todo lo que se ejecuta en el navegador como la interfaz visual, la lógica de presentación y las interacciones del usuario, también conocida como lado del cliente.',
    },
    {
      termino: 'Grid Layout',
      significado:
        'Sistema de diseño CSS que permite crear <em>layouts</em> bidimensionales complejos organizando elementos en una cuadrícula de filas y columnas, ofreciendo mayor control y flexibilidad para diseñar interfaces web modernas y responsivas.',
    },
    {
      termino: 'HTML',
      significado:
        'Siglas de <em>HyperText Markup Language</em>, es el lenguaje de marcado estándar utilizado para crear y estructurar contenido en páginas web, definiendo elementos como encabezados, párrafos, enlaces y multimedia a través de etiquetas específicas.',
    },
    {
      termino: 'HTML5',
      significado:
        'Quinta versión del lenguaje HTML que introduce elementos semánticos, APIs nativas para multimedia y aplicaciones web, capacidades de almacenamiento local y nuevas funcionalidades que eliminan la dependencia de plugins externos como Flash.',
    },
    {
      termino: 'HTTP',
      significado:
        'Siglas de <em>HyperText Transfer Protocol</em>, es el protocolo de comunicación utilizado para transferir información entre servidores web y navegadores, definiendo cómo se solicitan y envían recursos web a través de internet.',
    },
    {
      termino: 'JavaScript',
      significado:
        'Lenguaje de programación interpretado que se ejecuta principalmente en navegadores web para añadir interactividad y dinamismo a las páginas web, aunque también se utiliza en servidores y otras aplicaciones.',
    },
    {
      termino: 'Jekyll',
      significado:
        'Generador de sitios estáticos escrito en Ruby que transforma archivos de texto plano en sitios web completos, siendo especialmente popular para blogs y documentación técnica debido a su integración con GitHub Pages.',
    },
    {
      termino: 'jQuery',
      significado:
        'Biblioteca de JavaScript que simplifica la manipulación del DOM, el manejo de eventos y las peticiones AJAX, proporcionando una sintaxis más concisa y compatible entre diferentes navegadores para operaciones comunes de desarrollo web.',
    },
    {
      termino: 'JSON-LD',
      significado:
        'Acrónimo de JavaScript <em>Object Notation for Linked Data</em>, es un formato de datos estructurados que permite añadir contexto semántico a páginas web de manera que las máquinas puedan comprender e interpretar el contenido más efectivamente.',
    },
    {
      termino: '<em>Laravel</em>',
      significado:
        'Framework de PHP que proporciona una sintaxis elegante y herramientas robustas para el desarrollo de aplicaciones web, incluyendo un ORM integrado, sistema de <em>templating</em> y herramientas para autenticación y autorización.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'Disposición y organización visual de elementos en una página web, incluyendo la estructura general, la posición de componentes y la distribución del espacio, siendo fundamental para crear interfaces efectivas y atractivas.',
    },
    {
      termino: '<em>Lazy loading</em>',
      significado:
        'Técnica de optimización que retrasa la carga de recursos no críticos como imágenes hasta que son necesarios, mejorando el tiempo de carga inicial de las páginas web y reduciendo el uso de ancho de banda.',
    },
    {
      termino: '<em>Localhost</em>',
      significado:
        'Dirección IP especial (127.0.0.1) que hace referencia al propio equipo donde se ejecuta una aplicación, comúnmente utilizada durante el desarrollo web para probar aplicaciones antes de desplegarlas en los servidores de producción.',
    },
    {
      termino: '<em>Media queries</em>',
      significado:
        'Característica de CSS que permite aplicar estilos específicos basándose en las características del dispositivo como el ancho de pantalla, la orientación o la resolución, siendo fundamental para implementar diseño responsivo.',
    },
    {
      termino: 'Microdatos',
      significado:
        'Especificación HTML que permite añadir información semántica estructurada directamente en el <em>markup</em> de una página web, facilitando que los motores de búsqueda y otras aplicaciones comprendan mejor el contenido y su significado.',
    },
    {
      termino: '<em>Mobile first</em>',
      significado:
        'Estrategia de diseño que comienza el proceso de desarrollo enfocándose en dispositivos móviles y luego expande las funcionalidades para pantallas más grandes, resultando en experiencias más eficientes y centradas en lo esencial.',
    },
    {
      termino: 'MongoDB',
      significado:
        'Base de datos NoSQL orientada a documentos que almacena información en formato JSON, proporcionando flexibilidad en el esquema de datos y escalabilidad horizontal para aplicaciones web modernas.',
    },
    {
      termino: 'MVC',
      significado:
        'Siglas de <em>Model-View-Controller</em>, es un patrón arquitectónico que separa una aplicación en tres componentes interconectados: el modelo (datos), la vista (interfaz) y el controlador (lógica), facilitando el mantenimiento y la escalabilidad del código.',
    },
    {
      termino: 'MySQL',
      significado:
        'Sistema de gestión de bases de datos relacionales de código abierto ampliamente utilizado en aplicaciones web, conocido por su rendimiento, confiabilidad y facilidad de uso para almacenar y recuperar datos estructurados.',
    },
    {
      termino: 'Node.js',
      significado:
        ' Entorno de ejecución para JavaScript del lado del servidor que permite utilizar JavaScript para crear aplicaciones <em>backend</em>, APIs y herramientas de desarrollo, ampliando el uso del lenguaje más allá del navegador.',
    },
    {
      termino: 'NoSQL',
      significado:
        'Término que describe bases de datos que no utilizan el modelo relacional tradicional, ofreciendo mayor flexibilidad en el esquema de datos y mejor escalabilidad horizontal para aplicaciones web que manejan grandes volúmenes de información.',
    },
    {
      termino: 'NPM',
      significado:
        'Siglas de <em>Node Package Manager</em>, es el gestor de paquetes por defecto para Node.js que permite instalar, actualizar y gestionar dependencias de proyectos JavaScript, facilitando la reutilización de código y la gestión de bibliotecas.',
    },
    {
      termino: 'Ontologías',
      significado:
        'Representaciones formales de conocimiento que definen conceptos, propiedades y relaciones dentro de un dominio específico, utilizadas en la web semántica para estructurar información de manera que las máquinas puedan procesarla e interpretarla.',
    },
    {
      termino: 'OWL',
      significado:
        'Siglas de Web <em>Ontology Language</em>, es un lenguaje de marcado semántico diseñado para publicar y compartir ontologías en la web, permitiendo definir vocabularios ricos que faciliten el procesamiento automático de información.',
    },
    {
      termino: 'PHP',
      significado:
        'Acrónimo recursivo de PHP: <em>Hypertext Preprocessor</em>, es un lenguaje de programación de código abierto especialmente diseñado para desarrollo web del lado del servidor, conocido por su facilidad de uso e integración con bases de datos.',
    },
    {
      termino: 'PostgreSQL',
      significado:
        'Sistema de gestión de bases de datos relacionales de código abierto conocido por su robustez, extensibilidad y cumplimiento de estándares SQL, siendo popular para aplicaciones empresariales que requieren integridad de datos.',
    },
    {
      termino: '<em>Progressive Web App</em>',
      significado:
        'Aplicación web que utiliza tecnologías modernas para proporcionar experiencias similares a las aplicaciones nativas, incluyendo funcionalidad offline, notificaciones push y capacidad de instalación en dispositivos móviles.',
    },
    {
      termino: '<em>Promises</em>',
      significado:
        'Objetos en JavaScript que representan la eventual finalización o falla de una operación asíncrona, proporcionando una alternativa más limpia y manejable que los callbacks tradicionales para controlar el flujo de código asíncrono.',
    },
    {
      termino: 'Pull-to-refresh',
      significado:
        'Patrón de interacción en dispositivos móviles donde el usuario desliza hacia abajo en la parte superior de una lista para actualizar el contenido, proporcionando una forma intuitiva de obtener información actualizada.',
    },
    {
      termino: 'PWA',
      significado:
        'Siglas de <em>Progressive Web App</em>, aplicaciones web que utilizan tecnologías modernas para ofrecer experiencias similares a aplicaciones nativas, incluyendo funcionamiento offline, notificaciones y posibilidad de instalación.',
    },
    {
      termino: 'Python',
      significado:
        'Lenguaje de programación de alto nivel conocido por su sintaxis clara y legible, ampliamente utilizado en desarrollo web, análisis de datos, inteligencia artificial y automatización de tareas.',
    },
    {
      termino: 'RDF',
      significado:
        'Siglas de <em>Resource Description Framework</em>, es un modelo estándar para el intercambio de datos en la web que proporciona una estructura común para describir recursos y sus relaciones de manera que las máquinas puedan procesarlos.',
    },
    {
      termino: '<em>React</em>',
      significado:
        'Biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas, especialmente aplicaciones de una sola página, utilizando un paradigma basado en componentes reutilizables y un DOM virtual para optimización.',
    },
    {
      termino: '<em>Redis</em>',
      significado:
        'Base de datos en memoria de estructura de datos que se utiliza como base de datos, caché y broker de mensajes, conocida por su alta velocidad y capacidad de manejar operaciones en tiempo real.',
    },
    {
      termino: '<em>Responsive</em>',
      significado:
        ' Enfoque de diseño web que hace que las páginas se rendericen bien en una variedad de dispositivos y tamaños de ventana, adaptándose automáticamente para proporcionar una experiencia de usuario óptima sin importar el dispositivo utilizado.',
    },
    {
      termino: 'REST',
      significado:
        ' Siglas de <em>Representational State Transfer</em>, es un estilo arquitectónico para diseñar servicios web que utiliza métodos HTTP estándar y principios simples para crear APIs que sean escalables, mantenibles y fáciles de usar.',
    },
    {
      termino: 'Schema.org',
      significado:
        'Vocabulario colaborativo que proporciona esquemas para datos estructurados en páginas web, facilitando que los motores de búsqueda comprendan mejor el contenido y puedan presentarlo de manera más rica en los resultados.',
    },
    {
      termino: '<em>Skip links</em>',
      significado:
        'Enlaces de navegación que permiten a usuarios de tecnologías asistivas saltar directamente al contenido principal de una página, mejorando la accesibilidad al evitar la necesidad de navegar a través de elementos repetitivos como menús.',
    },
    {
      termino: 'SPARQL',
      significado:
        'Lenguaje de consulta y protocolo para bases de datos RDF que permite realizar consultas complejas sobre datos semánticos estructurados, facilitando la extracción de información específica de repositorios de conocimiento.',
    },
    {
      termino: 'SQLite',
      significado:
        'Sistema de gestión de bases de datos relacionales embebido que no requiere un servidor separado, siendo ideal para aplicaciones que necesitan una base de datos ligera y autónoma.',
    },
    {
      termino: '<em>Swipe</em>',
      significado:
        'Gesto táctil que consiste en deslizar el dedo rápidamente sobre la pantalla de un dispositivo móvil para activar una acción específica, como cambiar de página, eliminar elementos o navegar entre opciones.',
    },
    {
      termino: '<em>Symfony</em>',
      significado:
        '<em>Framework</em> de PHP que proporciona componentes reutilizables y una estructura robusta para desarrollar aplicaciones web empresariales, enfocándose en las mejores prácticas y la arquitectura modular.',
    },
    {
      termino: '<em>Tap-and-hold</em>',
      significado:
        'Gesto táctil que consiste en mantener presionado un elemento en la pantalla durante un período prolongado para activar menús contextuales o acciones secundarias, común en interfaces móviles.',
    },
    {
      termino: 'UX',
      significado:
        'Siglas de <em>User Experience</em>, se refiere a la experiencia general que tiene una persona al interactuar con un producto digital, incluyendo aspectos de usabilidad, accesibilidad, diseño y satisfacción del usuario.',
    },
    {
      termino: 'WCAG',
      significado:
        'Siglas de <em>Web Content Accessibility Guidelines</em>, son pautas desarrolladas por el W3C que proporcionan recomendaciones para hacer el contenido web más accesible para personas con discapacidades, estableciendo estándares internacionales de accesibilidad.',
    },
    {
      termino: 'Web 1.0',
      significado:
        'Primera generación de la web caracterizada por sitios estáticos con contenido principalmente de solo lectura, donde los usuarios actuaban como consumidores pasivos de información sin capacidad de interacción o contribución al contenido.',
    },
    {
      termino: 'Web 2.0',
      significado:
        'Segunda generación de la web que introdujo interactividad y participación del usuario, caracterizada por redes sociales, blogs, wikis y otras plataformas colaborativas que permiten a los usuarios crear y compartir contenido.',
    },
    {
      termino: 'Web 3.0',
      significado:
        'Tercera generación de la web que se enfoca en la descentralización, inteligencia artificial y web semántica, promoviendo un internet más inteligente donde las máquinas pueden comprender y procesar información de manera más sofisticada.',
    },
    {
      termino: '<em>Webpack</em>',
      significado:
        '<em>Bundler</em> de módulos para aplicaciones JavaScript modernas que analiza las dependencias del proyecto y genera archivos optimizados para producción, facilitando la gestión de recursos y la optimización del rendimiento.',
    },
    {
      termino: 'XMLHttpRequest:',
      significado:
        'API del navegador que permite realizar peticiones HTTP asíncronas desde JavaScript, siendo la base tecnológica de AJAX y precursor de APIs más modernas como fetch para la comunicación cliente-servidor.',
    },
  ],
}
