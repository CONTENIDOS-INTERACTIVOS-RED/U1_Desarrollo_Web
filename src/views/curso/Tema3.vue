<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Conceptos de diseño responsivo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El diseño responsivo representa una filosofía de desarrollo web que busca crear experiencias optimizadas para la amplia variedad de dispositivos y tamaños de pantalla existentes en el ecosistema digital actual. Se comprende que esta aproximación trasciende los aspectos puramente técnicos para abarcar consideraciones de usabilidad, accesibilidad y experiencia del usuario que son fundamentales para el éxito de cualquier aplicación web moderna. La implementación efectiva de diseño responsivo requiere una comprensión profunda de las capacidades y limitaciones de diferentes dispositivos, así como de las expectativas de los usuarios en diversos contextos de uso.
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El diseño responsivo no es simplemente una técnica de CSS, sino una metodología integral que afecta decisiones arquitectónicas, de contenido y de interacción desde las primeras etapas del desarrollo. La proliferación de dispositivos móviles, tablets, desktops, y dispositivos emergentes como wearables y displays de gran formato ha hecho que el diseño responsivo sea un requisito fundamental en lugar de una característica opcional. Se implementan principios que garantizan que las aplicaciones web funcionen efectivamente independientemente del dispositivo utilizado para acceder a ellas.
    
    p.mb-5 Los subtemas que se abordarán incluyen los principios fundamentales del diseño adaptable a diferentes dispositivos, proporcionando un marco teórico sólido; el uso de media queries para crear interfaces que se adapten a diferentes resoluciones; las técnicas modernas de layout como Flexbox y Grid que facilitan la creación de diseños flexibles; la optimización específica para dispositivos móviles considerando las características únicas de esta plataforma; y la implementación de accesibilidad web que garantice que las aplicaciones sean utilizables por personas con diversas capacidades y necesidades.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Diseño adaptable a diferentes dispositivos: principios de diseño responsivo
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 El diseño adaptable a diferentes dispositivos es un componente esencial del desarrollo web moderno, ya que garantiza una experiencia de usuario consistente y accesible sin importar el dispositivo utilizado.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Diseño adaptable a diferentes dispositivos: principios de diseño responsivo  
            p.mb-4(data-aos="fade-right") En el PDF Diseño adaptable a diferentes dispositivos, se presentan los principios fundamentales del diseño responsivo, abordando conceptos clave como grillas fluidas, imágenes flexibles y media queries. A través de una perspectiva práctica, se explora cómo estas estrategias permiten crear interfaces que se ajustan eficientemente a distintos contextos de visualización, promoviendo soluciones inclusivas y funcionales en entornos reales de desarrollo de software.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Diseño adaptable a diferentes dispositivos: principios de diseño responsivo  
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Uso de Media Queries: configuración para diferentes resoluciones de pantalla
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las media queries representan el mecanismo principal de CSS para aplicar estilos específicos basándose en las características del dispositivo o medio de visualización, permitiendo la creación de interfaces que se adaptan inteligentemente a diferentes contextos de uso. Se comprende que las media queries van más allá de simples verificaciones de ancho de pantalla, proporcionando capacidades para detectar orientación del dispositivo, densidad de píxeles, capacidades de color, y métodos de interacción disponibles. Esta flexibilidad permite crear experiencias verdaderamente adaptativas que no solo se ajustan visualmente, sino que también optimizan la funcionalidad, según las capacidades específicas de cada dispositivo.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.svg")
            .col-lg-9
              p Vara Mesa y Granada (2015), destacan que la configuración efectiva de media queries requiere una comprensión profunda de los breakpoints apropiados para diferentes tipos de dispositivos, considerando no solo las resoluciones comunes, sino también las tendencias de uso y los patrones de comportamiento del usuario. Se implementan estrategias que definen rangos de resolución específicos para móviles, tabletas y desktops, pero también se consideran casos especiales como pantallas de alta densidad, dispositivos plegables, y pantallas ultra panorámicas. La optimización de media queries incluye técnicas como la combinación de múltiples condiciones, el uso de características menos comunes como aspect-ratio, y la implementación de fallbacks para navegadores que no soportan características específicas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.svg")
            .col-lg-9
              p En proyectos de ingeniería de software, se observa el uso estratégico de media queries en aplicaciones de desarrollo que deben adaptarse a diferentes configuraciones del espacio de trabajo: desarrolladores que utilizan múltiples monitores pueden beneficiarse de layouts expandidos que aprovechen el espacio horizontal adicional, mientras que aquellos trabajando en laptops requieren interfaces más compactas que maximicen el uso del espacio vertical. Las media queries permiten detectar estas configuraciones y adaptar automáticamente la interfaz, proporcionando herramientas como paneles de código expandidos, vistas de depuración especializadas, y organizaciones de información que se optimizan, según el contexto específico de trabajo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.svg")
            .col-lg-9
              p Para ilustrar el uso efectivo de media queries, se propone crear un sistema de documentación técnica que se adapte a diferentes resoluciones y contextos de uso. Se implementan media queries que detecten dispositivos móviles para mostrar una navegación colapsable y priorizar el contenido principal, tabletas para proporcionar una navegación lateral persistente y aprovechar el espacio adicional, y desktops para implementar layouts de múltiples columnas con navegación avanzada. Se añaden media queries especializadas para detectar preferencias del usuario como modo oscuro, reducción de movimiento, y alto contraste. El resultado demuestra cómo las media queries pueden crear experiencias verdaderamente personalizadas que se adaptan no solo al dispositivo, sino también a las preferencias y necesidades específicas del usuario.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Flexbox y Grid Layout: técnicas para diseñar layouts flexibles
    
    p.mb-5 El diseño de layouts flexibles es un aspecto clave en la construcción de interfaces web modernas, ya que permite adaptar eficientemente la disposición de los elementos a diferentes tamaños y tipos de pantalla.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Flexbox y Grid Layout: técnicas para diseñar layouts flexibles 
            p.mb-4(data-aos="fade-right") En el PDF Flexbox y Grid Layout, se exploran dos tecnologías fundamentales —Flexbox y CSS Grid— que ofrecen soluciones potentes para crear estructuras responsivas y organizadas. A través del análisis de sus características, usos complementarios y aplicaciones prácticas en entornos reales de desarrollo, se proporciona una base sólida para implementar diseños adaptativos que optimicen la experiencia del usuario.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Flexbox y Grid Layout: técnicas para diseñar layouts flexibles 
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/9.png', alt='')
    
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Optimización para dispositivos móviles: mejores prácticas de UX en móviles
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La optimización para dispositivos móviles requiere una comprensión profunda de las características únicas de esta plataforma, incluyendo limitaciones de ancho de banda, métodos de interacción táctil, contextos de uso diversos, y expectativas específicas de rendimiento. El diseño móvil no es simplemente una versión reducida del diseño de desktop, sino una experiencia completamente diferente que debe considerar factores como el tamaño de los elementos táctiles, la jerarquía visual en espacios limitados, y la optimización para conexiones de red variables. Los usuarios móviles a menudo buscan información específica rápidamente, requiriendo interfaces que prioricen contenido esencial y minimicen la fricción en las interacciones más comunes.
    
        .bg-color-6.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Celaya Luna (2015), destaca que las mejores prácticas de UX móvil incluyen la implementación de navegación simplificada, optimización de formularios para entrada táctil, y la reducción de la carga cognitiva mediante interfaces intuitivas que aprovechan patrones de interacción familiares. Se implementan técnicas como lazy loading para imágenes, compresión de recursos para reducir tiempos de carga, y Progressive Web App (PWA) features que proporcionan experiencias similares a aplicaciones nativas. La optimización móvil también incluye consideraciones de accesibilidad específicas, como garantizar que los elementos táctiles tengan tamaños mínimos apropiados y que el contraste sea suficiente para visualización en diferentes condiciones de iluminación.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En el contexto de herramientas para equipos de ingeniería de software, se observa la necesidad de optimizar interfaces móviles para casos de uso específicos como revisión de código durante desplazamientos, acceso a documentación técnica en dispositivos móviles, y notificaciones de sistemas de CI/CD que requieren acción inmediata. Los desarrolladores necesitan poder realizar tareas críticas desde dispositivos móviles, como aprobar pull requests, revisar logs de error, y comunicarse con el equipo sobre solicitudes urgentes. Esta funcionalidad requiere interfaces que simplifiquen tareas complejas sin sacrificar la funcionalidad esencial.
    
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 Para demostrar las mejores prácticas de UX móvil, se propone crear una aplicación de gestión de tareas de desarrollo optimizada específicamente para dispositivos móviles. Se implementa una interfaz que utilice gestos táctiles intuitivos como swipe para marcar tareas completadas, pull-to-refresh para actualizar el estado del proyecto, y tap-and-hold para acceder a opciones avanzadas. Se optimiza la navegación utilizando un patrón de tab bar que permita acceso rápido a las secciones más importantes: tareas pendientes, notificaciones, y comunicación del equipo. Se añaden características específicas móviles como notificaciones push simuladas, modo offline para visualizar información crítica sin conexión, e integración con características del dispositivo como cámara para adjuntar imágenes a los reportes de bugs. El resultado demuestra cómo las consideraciones específicas de UX móvil pueden crear experiencias que no solo funcionan en dispositivos móviles, sino que aprovechan las características únicas de esta plataforma.
    
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Accesibilidad web: implementación de un diseño inclusivo y accesible
    
    p.mb-5 La accesibilidad web es un componente esencial del desarrollo digital inclusivo, ya que busca asegurar que todas las personas, independientemente de sus capacidades o limitaciones, puedan interactuar con sitios y aplicaciones de manera efectiva.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Accesibilidad web: implementación de un diseño inclusivo y accesible 
            p.mb-4(data-aos="fade-right") En el PDF Accesibilidad web, se exploran los principios, normativas y técnicas que permiten diseñar experiencias web accesibles, con énfasis en la implementación de buenas prácticas desde el inicio del proceso de desarrollo. A través de ejemplos concretos y ejercicios aplicados, el documento proporciona a los estudiantes las herramientas necesarias para integrar la accesibilidad como un valor fundamental del diseño web moderno.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Accesibilidad web: implementación de un diseño inclusivo y accesible 
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='')
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexión
    
    p.mb-5 Los fundamentos del desarrollo web representan la base sobre la cual se construye toda la disciplina del desarrollo de aplicaciones web modernas, proporcionando el contexto histórico, técnico y metodológico necesario para comprender la evolución y las tendencias actuales de esta área. La comprensión profunda de estos conceptos fundamentales se vuelve esencial para cualquier profesional de la ingeniería de software que busque especializarse en el desarrollo web o integrar tecnologías web en proyectos más amplios.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/15.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p El estudio de la historia de la web proporciona perspectiva sobre cómo las decisiones tecnológicas del pasado han influido en las posibilidades actuales, y cómo las tendencias emergentes pueden afectar el futuro del desarrollo web. Esta comprensión histórica permite a los desarrolladores tomar decisiones más informadas sobre qué tecnologías adoptar, cómo estructurar proyectos para facilitar la evolución futura, y cómo anticipar cambios en el ecosistema tecnológico. La transición de la web estática a la dinámica y la emergencia de la web semántica ilustran cómo la tecnología evoluciona para satisfacer necesidades cada vez más sofisticadas de usuarios y organizaciones.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/16.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p La distinción entre sitios estáticos y dinámicos trasciende aspectos puramente técnicos para abarcar consideraciones arquitectónicas, de rendimiento, y de experiencia del usuario que afectan fundamentalmente el éxito de los proyectos web. En el contexto laboral actual, donde la eficiencia y la escalabilidad son criterios críticos, la capacidad de elegir apropiadamente entre diferentes enfoques tecnológicos se vuelve una competencia fundamental. Los profesionales que comprenden estas diferencias pueden optimizar costos, mejorar rendimiento, y crear soluciones más apropiadas para los requisitos específicos de cada proyecto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/17.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p El diseño responsivo y la accesibilidad web representan principios fundamentales que reflejan la evolución de la web hacia una plataforma verdaderamente universal e inclusiva. En un mundo donde el acceso a la información digital se ha vuelto fundamental para la participación económica y social, la capacidad de crear experiencias web que funcionen efectivamente para todos los usuarios, independientemente de sus capacidades o el dispositivo utilizado, se convierte en una responsabilidad profesional y social. Estos principios no solo mejoran la experiencia del usuario, sino que también resultan en código más robusto, mantenible, y adaptable a cambios futuros en el ecosistema tecnológico.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/18.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La aplicación de estos fundamentos en el contexto laboral de la ingeniería de software se manifiesta en la capacidad de los profesionales para crear soluciones web que no solo funcionen correctamente, sino que también sean escalables, accesibles, y preparadas para evolucionar con las necesidades cambiantes del negocio y la tecnología. La comprensión de estos principios fundamentales proporciona la base teórico práctica necesaria para abordar desafíos más complejos en el desarrollo web, para continuar aprendiendo y adaptándose a las innovaciones tecnológicas futuras.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/113039?page=1" target="_blank" rel="noopener noreferrer") Celaya Luna, A. (Coord.). (2015). Desarrollo de páginas web con Joomla 2.5: (2 ed.). Editorial ICB. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1" target="_blank" rel="noopener noreferrer") Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249857?page=1" target="_blank" rel="noopener noreferrer") Granados La Paz, R. L. (2023). Desarrollo de aplicaciones web en el entorno servidor. IFCD0210: (1 ed.). IC Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62488?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. & Granada, D. (2015). Desarrollo web en entorno cliente: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer") MDN Contributors. (s. f.). Responsive Web Design. En MDN Web Docs (licencia abierta MDN). 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.udacity.com/blog/2024/07/the-10-key-principles-of-responsive-web-design-a-beginners-guide.html" target="_blank" rel="noopener noreferrer") Sayed, M. (2024). The 10 key principles of responsive web design: a beginner’s guide. Udacity Blog. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ncase.me/loopy/" target="_blank" rel="noopener noreferrer") Loopy Descripción: Simulador gráfico de sistemas que permite modelar y visualizar interacciones, ideal para prototipado visual en diseño responsivo.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://fritzing.org" target="_blank" rel="noopener noreferrer") Fritzing (simulador de prototipos físicos) Descripción: Aunque está orientado a electrónica, su entorno gráfico de prototipado (breadboard) ayuda a entender prototipos visuales adaptativos, análogo al diseño web responsivo.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/hI3SnDQWJN8" target="_blank" rel="noopener noreferrer") KeepCoding - Tech School. (2022, 17 de marzo). ¿Qué es y cómo funciona el Diseño Responsive? [Vídeo] YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/95p72cTNTWM" target="_blank" rel="noopener noreferrer") WordPress. (2025, 15 de mayo). Diseño web y accesibilidad: creando experiencias para todos [Vídeo] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Quién inventó la World Wide Web?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Steve Jobs',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tim Berners-Lee',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Elon Musk',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Bill Gates',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: Tim Berners-Lee desarrolló la web en 1989 mientras trabajaba en el CERN.',
            mensaje_incorrecto:
              'Incorrecto: Aunque otros fueron influyentes en la informática, el creador de la web fue Tim Berners-Lee.',
          },
          {
            id: 2,
            texto:
              '¿Qué tipo de sitio web no cambia a menos que se modifique el código fuente?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dinámico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Estático',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Responsivo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Interactivo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: Un sitio estático muestra siempre el mismo contenido hasta que un desarrollador lo modifica manualmente.',
            mensaje_incorrecto:
              'Incorrecto: Los sitios dinámicos sí cambian según la interacción del usuario o el servidor.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes opciones describe un sitio dinámico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Su contenido es siempre igual',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Se actualiza con base en interacciones del usuario',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Se aloja sin servidor',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo usa HTML',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: Los sitios dinámicos generan contenido en tiempo real según el usuario o las bases de datos.',
            mensaje_incorrecto:
              'Incorrecto: Esa descripción se ajusta más a un sitio estático.',
          },
          {
            id: 4,
            texto:
              '¿Qué elemento se utiliza en CSS para aplicar diseño responsivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Variables',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Selectores',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Media queries',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Animaciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: Las media queries permiten aplicar estilos diferentes según el tamaño o tipo de dispositivo.',
            mensaje_incorrecto:
              'Incorrecto: Aunque otros elementos son importantes, solo las media queries permiten adaptar el diseño responsivamente.',
          },
          {
            id: 5,
            texto: '¿Qué beneficio ofrece el diseño responsivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Adapta el sitio a múltiples dispositivos',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Aumenta el tamaño de la fuente',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Mejora la velocidad del sitio',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Elimina errores de programación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El diseño responsivo asegura una experiencia óptima en cualquier dispositivo.',
            mensaje_incorrecto:
              'Incorrecto: Aunque mejora la experiencia, no está diseñado para corregir errores ni aumentar velocidad por sí solo.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
