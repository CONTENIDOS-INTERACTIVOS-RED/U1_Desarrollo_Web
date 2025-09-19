<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Historia de la web'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La historia de la web representa un viaje fascinante que permite comprender cómo la tecnología ha transformado la forma en que interactuamos con la información y entre nosotros. Se observa que esta evolución no ha sido lineal, sino que ha pasado por diferentes etapas que han marcado hitos significativos en el desarrollo de la sociedad digital. El conocimiento de esta historia proporciona contexto para entender las decisiones de diseño actuales y las tendencias futuras en el desarrollo web.
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El estudio de la evolución web es fundamental para comprender las limitaciones y posibilidades de las tecnologías actuales, así como para anticipar los cambios que se avecinan en el campo del desarrollo web. La transición desde la Web 1.0 hasta la Web 3.0 representa no solo un cambio tecnológico, sino también una transformación en la forma en que concebimos la interacción digital. Se implementa un análisis que permite identificar los patrones de evolución tecnológica y su impacto en la ingeniería de software moderna. Esta comprensión resulta esencial para tomar decisiones informadas sobre qué tecnologías adoptar en proyectos específicos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Se abordarán los siguientes subtemas que contribuyen a una comprensión integral de la historia web: la evolución desde la Web 1.0 hasta la Web 3.0, examinando las características distintivas de cada generación; el impacto de los estándares web en el desarrollo moderno; las tecnologías claves que han impulsado esta evolución; el cambio de paradigma hacia sitios dinámicos; y la importancia de la web semántica en la estructuración del contenido. 
    
        .bg-color-5.p-5(data-aos="fade-left")
          p.mb-0 Cada uno de estos aspectos se conecta directamente con las prácticas actuales de desarrollo web y proporciona las bases teóricas necesarias para comprender las tendencias emergentes.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Evolución de la web: desde la Web 1.0 (estática) hasta la Web 3.0 (descentralizada)
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La evolución de la Web desde su concepción inicial hasta las implementaciones actuales representa uno de los cambios tecnológicos más significativos de las últimas décadas. Se comprende que la Web 1.0, caracterizada por su naturaleza estática y unidireccional, estableció las bases para el intercambio de información a través de documentos hipertextuales. Durante esta fase, se observaba una estructura simple donde los usuarios actuaban principalmente como consumidores de contenido, sin capacidad de interacción o modificación. La arquitectura de esta primera generación Web se basaba en páginas HTML estáticas servidas por servidores Web básicos, creando un ecosistema donde la información fluía en una sola dirección desde los creadores de contenido hacia los usuarios finales.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.svg")
            .col-lg-9
              p Contreras Castañeda (2016), describe cómo la evolución hacia la Web 2.0 marcó un punto de inflexión en el desarrollo web, introduciendo conceptos de interactividad y participación del usuario que transformaron completamente la experiencia digital. Se implementaron tecnologías que permitieron la creación de contenido dinámico, donde los usuarios podían no solo consumir información, sino también generar, modificar y compartir contenido. Esta transición se caracterizó por el desarrollo de aplicaciones web interactivas, redes sociales y plataformas colaborativas que redefinieron las posibilidades de comunicación digital. La Web 2.0 introdujo conceptos como AJAX, que permitió actualizaciones asíncronas de contenido sin recargar páginas completas, mejorando significativamente la experiencia del usuario.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.svg")
            .col-lg-9
              p Un ejemplo práctico de esta evolución se observa en el desarrollo de sistemas de gestión de contenido para proyectos de ingeniería de software. Durante la era de la Web 1.0, los equipos de desarrollo debían actualizar manualmente archivos HTML estáticos para modificar documentación o reportes de proyecto. Con la llegada de la Web 2.0, se implementaron sistemas colaborativos como wikis y plataformas de gestión de proyectos que permitían a múltiples desarrolladores contribuir simultáneamente a la documentación. La Web 3.0, con su enfoque en la descentralización y la inteligencia artificial, está comenzando a introducir sistemas que pueden organizar y estructurar automáticamente la información del proyecto, utilizando algoritmos de aprendizaje automático para mejorar la eficiencia del equipo de desarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.svg")
            .col-lg-9
              p Para implementar un ejemplo práctico que demuestre la evolución web, se puede crear una página que represente las tres generaciones: primero, se desarrolla una página HTML estática simple con contenido fijo, representando la Web 1.0; segundo, se añade JavaScript para permitir interactividad básica como formularios dinámicos, ejemplificando la Web 2.0; finalmente, se integra una API que utilice datos semánticos estructurados, simulando características de la Web 3.0. El resultado muestra claramente las diferencias en funcionalidad y capacidades entre cada generación, proporcionando una comprensión tangible de la evolución tecnológica y sus implicaciones para el desarrollo web moderno.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Impacto de los estándares web: HTML, CSS y JavaScript en el desarrollo web
    
    p.mb-5 La comprensión del impacto de los estándares web es esencial para el desarrollo de aplicaciones modernas, sostenibles y accesibles.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Impacto de los estándares web: HTML, CSS y JavaScript en el desarrollo web
            p.mb-4(data-aos="fade-right") En el PDF Impacto de los estándares web, se analiza cómo tecnologías fundamentales como HTML, CSS y JavaScript han evolucionado para establecer principios comunes que aseguran la compatibilidad, funcionalidad y eficiencia del desarrollo web. Este recurso ofrece un recorrido práctico por su aplicación, destacando su relevancia en la creación de soluciones interoperables y de alta calidad dentro del campo de la ingeniería de software.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Impacto de los estándares web: HTML, CSS y JavaScript en el desarrollo web.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Tecnologías claves en la evolución: HTML5, CSS3 y JavaScript moderno
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las tecnologías HTML5, CSS3 y JavaScript moderno, representan la culminación de décadas de evolución en el desarrollo web, integrando capacidades avanzadas que han transformado las posibilidades de creación de aplicaciones web. El HTML5 introdujo elementos semánticos, APIs nativas para multimedia, almacenamiento local y comunicación en tiempo real, eliminando la dependencia de plugins externos como Flash. 
    
        .bg-color-6.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta evolución permitió el desarrollo de aplicaciones web más ricas y de mayor calidad, con capacidades que anteriormente solo estaban disponibles en aplicaciones de escritorio. CSS3 expandió las posibilidades de diseño visual con animaciones, transiciones, transformaciones y layouts flexibles, proporcionando herramientas para crear interfaces modernas y atractivas.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/11.svg")
            .col-lg-9
              p Granados La Paz (2023) destaca que la evolución hacia JavaScript moderno ha sido fundamental para el desarrollo de aplicaciones web complejas, introduciendo conceptos como programación asíncrona, módulos ES6, y frameworks reactivos que han revolucionado la arquitectura del software web. Se implementan características como arrow functions, destructuring, promises y async/await que mejoran significativamente la legibilidad y mantenibilidad del código. La introducción de herramientas como webpack, npm y sistemas de transpilación, ha creado un ecosistema de desarrollo web que rivaliza con las herramientas tradicionales de desarrollo de software. Esta evolución ha permitido que JavaScript se expanda más allá del navegador, convirtiéndose en un lenguaje viable para desarrollo del lado del servidor y aplicaciones móviles.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/12.svg")
            .col-lg-9
              p En proyectos de ingeniería de software, se observa cómo estas tecnologías modernas han facilitado el desarrollo de herramientas de prototipado rápido y sistemas de documentación interactiva. Los equipos de desarrollo utilizan HTML5 Canvas para crear diagramas arquitectónicos interactivos, CSS3 para animaciones que explican flujos de procesos complejos, y JavaScript moderno para implementar simuladores que permiten a los stakeholders experimentar con diferentes escenarios del sistema. Esta aproximación ha mejorado significativamente la comunicación entre equipos técnicos y no técnicos, facilitando la validación de requisitos y la toma de decisiones en proyectos complejos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.svg")
            .col-lg-9
              p Para demostrar las capacidades de estas tecnologías modernas, se propone crear una aplicación web que utilice las características avanzadas de HTML5, CSS3 y JavaScript ES6+. Se comienza implementando una estructura semántica con HTML5, incluyendo elementos como canvas para gráficos, video para contenido multimedia y formularios con validación nativa. Se añaden estilos CSS3 con animaciones, grid layout y media queries para responsividad. Finalmente, se implementa JavaScript moderno utilizando modules, fetch API para comunicación asíncrona, y localStorage para persistencia de datos. El resultado es una aplicación web moderna que demuestra las capacidades actuales del desarrollo web y sirve como base para entender las posibilidades tecnológicas disponibles en proyectos profesionales.


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Cambio de paradigma: de sitios estáticos a dinámicos
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 El cambio de paradigma de sitios estáticos a dinámicos representa una transformación clave en la evolución del desarrollo web, al pasar de contenidos fijos a experiencias interactivas adaptadas a las necesidades del usuario.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Cambio de paradigma: de sitios estáticos a dinámicos 
            p.mb-4(data-aos="fade-right") En el PDF Cambio de paradigma, se exploran las implicaciones técnicas y funcionales de esta transición, destacando cómo ha impactado la arquitectura, la experiencia de usuario y las metodologías de desarrollo. Este análisis ofrece al estudiante una visión integral de los fundamentos que dieron origen a la web dinámica y su aplicación en entornos reales de ingeniería de software.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cambio de paradigma: de sitios estáticos a dinámicos
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='')

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] La web semántica y su importancia: ontologías y estructuración de contenido
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La web semántica representa una evolución conceptual que busca transformar la web desde un repositorio de documentos hacia una base de conocimiento estructurada y procesable por máquinas. Esta aproximación se fundamenta en la idea de añadir significado explícito al contenido web, permitiendo que las aplicaciones comprendan y procesen la información de manera más inteligente. Las ontologías, como sistemas formales para representar conocimiento, proporcionan el marco teórico necesario para estructurar información de manera que pueda ser interpretada tanto por humanos como por sistemas automatizados. 
    
        .bg-color-8.p-5(data-aos="fade-left")
          p.mb-0 Esta estructuración semántica facilita la integración de datos de múltiples fuentes, la búsqueda más precisa de información y el desarrollo de aplicaciones inteligentes que pueden razonar sobre el contenido.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/17.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p Cardador Cabello (2015), destaca que la implementación de tecnologías de web semántica ha abierto nuevas posibilidades para el desarrollo de aplicaciones web distribuidas que pueden intercambiar y procesar información de manera más eficiente. Se implementan estándares como RDF (Resource Description Framework), OWL (Web Ontology Language) y SPARQL para consultas semánticas, creando un ecosistema donde los datos pueden ser interconectados y reutilizados de manera más efectiva. La estructuración semántica del contenido web, permite el desarrollo de sistemas que pueden realizar inferencias automáticas, descubrir relaciones ocultas entre datos y proporcionar respuestas más precisas a consultas complejas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/18.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p En el contexto de la ingeniería de software, se observa la aplicación de principios de web semántica en el desarrollo de sistemas de documentación técnica y bases de conocimiento empresarial. Los equipos de desarrollo utilizan ontologías para estructurar información sobre arquitecturas de software, patrones de diseño y mejores prácticas, creando sistemas que pueden recomendar soluciones apropiadas basándose en el contexto específico del proyecto. Esta aproximación ha mejorado significativamente la reutilización de conocimiento y la consistencia en la aplicación de estándares de desarrollo. La implementación de metadatos semánticos en código fuente y documentación facilita la automatización de procesos como generación de documentación, análisis de dependencias y detección de patrones arquitectónicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/19.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p Para demostrar los conceptos de web semántica, se propone crear un sistema que utilice microdatos y JSON-LD para estructurar información semánticamente. Se comienza definiendo un esquema simple para representar información sobre proyectos de software, incluyendo propiedades como nombre, descripción, tecnologías utilizadas y estado del proyecto. Se implementa el marcado semántico en HTML utilizando microdatos del vocabulario Schema.org, añadiendo posteriormente metadatos en formato JSON-LD para enriquecer la información. Se crea una función JavaScript que puede extraer y procesar esta información semántica, demostrando cómo las máquinas pueden comprender y utilizar el contenido estructurado. El resultado muestra cómo la estructuración semántica mejora la interoperabilidad y facilita el desarrollo de aplicaciones más inteligentes y eficientes.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/44134?page=1" target="_blank" rel="noopener noreferrer") Cardador Cabello, A. L. (2015). Desarrollo de aplicaciones web distribuidas (UF1846): ( ed.). IC Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1" target="_blank" rel="noopener noreferrer") Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web" target="_blank" rel="noopener noreferrer") W3C. (s. f.). History of the World Wide Web. En Wikipedia, la enciclopedia libre (licencia CC BY-SA 3.0). 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium" target="_blank" rel="noopener noreferrer") W3C. (s. f.). World Wide Web Consortium. En Wikipedia, la enciclopedia libre (licencia CC BY-SA 3.0). 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://webhistorian.github.io/" target="_blank" rel="noopener noreferrer") Web Historian Descripción: Extensión que visualiza tu historial de navegación como gráficos interactivos, permitiendo analizar cómo navegas la web. Totalmente cliente, código abierto.



           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/jbEz2DqnPys" target="_blank" rel="noopener noreferrer") Profesor Sergio Brandán. (2021, 22 de julio). ¡La historia completa de la web en 40 minutos! [Vídeo] YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/_wcyGwmGNGI" target="_blank" rel="noopener noreferrer") WordPress. (2024, 12 de agosto). En un contenido web perfecto manda la semántica y no el aspecto [Vídeo] YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
