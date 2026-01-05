<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diferencias entre sitios estáticos y dinámicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La distinción entre sitios estáticos y dinámicos constituye uno de los conceptos fundamentales que todo desarrollador web debe comprender para tomar decisiones arquitectónicas apropiadas en sus proyectos. Esta diferenciación no es meramente técnica, sino que implica consideraciones sobre rendimiento, escalabilidad, mantenibilidad y experiencia del usuario. La comprensión de las características específicas de cada tipo de sitio permite evaluar cuál es la aproximación más adecuada para resolver problemas específicos.
    
        .bg-color-6.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Se implementa un análisis detallado de las tecnologías, metodologías y arquitecturas asociadas con cada tipo de sitio, reconociendo que la decisión entre estático y dinámico afecta todos los aspectos del desarrollo web.
        p La evolución tecnológica ha introducido enfoques híbridos que combinan las ventajas de ambos paradigmas, como la generación estática con hidratación del lado del cliente. El dominio de estas diferencias es esencial para el desarrollo de aplicaciones web eficientes y apropiadas para cada contexto específico.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          p.mb-0 Los subtemas que se abordarán incluyen la definición y características distintivas de sitios estáticos y dinámicos, proporcionando criterios claros para la clasificación; las tecnologías específicas utilizadas en cada tipo de sitio; los mecanismos de generación dinámica de contenido; el papel de los servidores en sitios dinámicos; y el análisis comparativo de beneficios y limitaciones de cada aproximación.
        p(data-aos="fade-left") Estos aspectos se integran para proporcionar una comprensión completa que facilite la toma de decisiones técnicas informadas en proyectos de desarrollo web.
    
        

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Definición de sitios estáticos y dinámicos: características y diferencias claves     
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los sitios estáticos se caracterizan por servir contenido predefinido que permanece invariable independientemente del usuario que acceda al sistema, mientras que los sitios dinámicos generan contenido personalizado en tiempo real basándose en diversos factores como el usuario, el contexto o datos externos. Un sitio estático consiste en archivos HTML, CSS y JavaScript que se almacenan en el servidor web tal como fueron creados, sin procesamiento adicional en el momento de la solicitud. Esta aproximación resulta en tiempos de carga muy rápidos y requisitos mínimos de recursos del servidor, pero limita la capacidad de personalización e interactividad. Los sitios estáticos son ideales para contenido que no cambia frecuentemente, como páginas corporativas, blogs personales o documentación técnica.
    
        .bg-color-5.p-5(data-aos="fade-left")
          p.mb-0 Contreras Castañeda (2016), explica que los sitios dinámicos utilizan tecnologías del lado del servidor para procesar solicitudes y generar contenido personalizado, permitiendo la creación de aplicaciones web complejas que pueden adaptarse a las necesidades específicas de cada usuario. Se implementan bases de datos para almacenar información variable, sistemas de autenticación para personalizar la experiencia del usuario, y APIs para integrar servicios externos. Esta flexibilidad permite el desarrollo de aplicaciones como redes sociales, sistemas de comercio electrónico, y plataformas de gestión de contenido, donde este debe adaptarse dinámicamente, según el contexto del usuario y las interacciones del sistema.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          p.mb-0 En el desarrollo de herramientas para equipos de ingeniería de software, se observa claramente la diferencia entre estos enfoques: un sitio estático podría presentar documentación técnica fija que todos los desarrolladores ven de la misma manera, mientras que un sistema dinámico podría mostrar información específica del proyecto en el que está trabajando cada desarrollador, incluir notificaciones personalizadas sobre tareas asignadas, y adaptar la interfaz, según los permisos del usuario. Esta diferenciación afecta significativamente la utilidad del sistema y la experiencia del usuario final, determinando qué tipo de problemas puede resolver efectivamente la aplicación.
        p(data-aos="fade-left") Para ilustrar estas diferencias, se propone crear dos versiones de un portafolio profesional: una versión estática y otra dinámica. 
    
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="78%" y="68.5%" numero="+")
                h5 La versión estática
                p La versión estática incluye páginas HTML fijas con información personal, proyectos completados y contacto, utilizando únicamente HTML, CSS y JavaScript básico para efectos visuales. 
    
              .bg-color-white.box-shadow.p-3(x="23%" y="68.5%" numero="+")
                h5 La versión dinámica
                p La versión dinámica implementa un sistema de gestión de contenido simple que permite actualizar información, añadir nuevos proyectos dinámicamente, y personalizar la visualización, según el tipo de visitante. 

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Se utiliza JavaScript para simular la funcionalidad del lado del servidor mediante localStorage. El resultado demuestra claramente las diferencias en flexibilidad, mantenibilidad y capacidades funcionales entre ambos enfoques, proporcionando una comprensión práctica de cuándo elegir cada aproximación.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tecnologías utilizadas en sitios estáticos: HTML, CSS y JavaScript básico
    
    p.mb-5 El conocimiento de las tecnologías utilizadas en sitios estáticos es esencial para comprender los fundamentos del desarrollo web y construir interfaces funcionales, accesibles y visualmente atractivas.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Tecnologías utilizadas en sitios estáticos: HTML, CSS y JavaScript básico
            p.mb-4(data-aos="fade-right") En el PDF Tecnologías utilizadas en sitios estáticos, se examinan las funciones de HTML, CSS y JavaScript básico en la creación de páginas web estructuradas, estilizadas e interactivas del lado del cliente. A través de ejemplos prácticos, se evidencia cómo estas tecnologías permiten desarrollar soluciones eficientes sin procesamiento del lado del servidor, aplicables en contextos reales como la documentación técnica en ingeniería de software.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tecnologías utilizadas en sitios estáticos: HTML, CSS y JavaScript básico.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Generación dinámica de contenido: servidores y bases de datos
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          p.mb-0 La generación dinámica de contenido representa el proceso mediante el cual los servidores web crean páginas HTML personalizadas en tiempo real, basándose en datos almacenados en bases de datos, información del usuario, o parámetros de solicitud específicos. Se comprende que este proceso involucra la ejecución de código del lado del servidor que puede acceder a recursos dinámicos, procesar lógica de negocio compleja, y generar respuestas personalizadas para cada solicitud. Los servidores web modernos implementan diversos mecanismos para generar contenido dinámico, desde simples scripts CGI hasta frameworks de aplicaciones web completos que proporcionan abstracciones de alto nivel para el desarrollo de aplicaciones complejas.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.svg")
            .col-lg-9
              p Granados La Paz (2023) explica que las bases de datos juegan un papel fundamental en la generación de contenido dinámico, proporcionando persistencia de datos y capacidades de consulta que permiten a las aplicaciones web mantener estado y ofrecer experiencias personalizadas. Se implementan sistemas de gestión de bases de datos relacionales como MySQL, PostgreSQL, o SQLite para aplicaciones que requieren transacciones ACID y consultas complejas, mientras que bases de datos NoSQL como MongoDB o Redis se utilizan para aplicaciones que necesitan escalabilidad horizontal y flexibilidad en el esquema de datos. La integración entre aplicaciones web y bases de datos requiere consideraciones de seguridad, rendimiento y escalabilidad que afectan significativamente la arquitectura del sistema.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.svg")
            .col-lg-9
              p En el contexto de desarrollo de software, se observa la aplicación de generación dinámica de contenido en sistemas de gestión de proyectos donde cada desarrollador ve información específica sobre sus tareas asignadas, el estado del proyecto varía, según los permisos del usuario, y los reportes se generan automáticamente basándose en datos actualizados en tiempo real. Esta aproximación permite crear herramientas colaborativas donde múltiples usuarios pueden trabajar simultáneamente, con sincronización automática de cambios y notificaciones en tiempo real. La implementación de estas funcionalidades requieren arquitecturas que puedan manejar concurrencia, mantener consistencia de datos y proporcionar experiencias fluidas a los usuarios
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.svg")
            .col-lg-9
              p Para demostrar la generación dinámica de contenido, se propone crear un sistema de gestión de tareas que simule la funcionalidad del lado del servidor utilizando JavaScript y localStorage. Se implementa una "base de datos" simulada en localStorage que almacena información sobre tareas, usuarios y proyectos. Se crea una función que genere HTML dinámicamente basándose en filtros del usuario, como mostrar solo tareas asignadas al usuario actual o filtrar por estado del proyecto. Se añade funcionalidad para actualizar el contenido en tiempo real cuando se realizan cambios, simulando la sincronización típica de aplicaciones web dinámicas. El resultado demuestra los principios fundamentales de la generación dinámica de contenido y proporciona una base para comprender cómo funcionan los sistemas más complejos con procesamiento real del lado del servidor.
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Uso de servidores en sitios dinámicos: PHP, Node.js y Python
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 La comprensión del uso de servidores en sitios dinámicos es clave para el desarrollo de aplicaciones web interactivas que respondan a las necesidades específicas de los usuarios en tiempo real.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Uso de servidores en sitios dinámicos: PHP, Node.js y Python 
            p.mb-4(data-aos="fade-right") En el PDF Uso de servidores en sitios dinámicos, se analizan tres tecnologías fundamentales —PHP, Node.js y Python— que permiten procesar datos en el servidor, generar contenido dinámico y conectar con bases de datos. A través de comparaciones prácticas, se exploran sus características distintivas, casos de uso y ventajas, brindando herramientas para tomar decisiones informadas en el diseño e implementación de soluciones web modernas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Uso de servidores en sitios dinámicos: PHP, Node.js y Python 
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='')

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Beneficios y limitaciones de ambos tipos: rendimiento, escalabilidad y flexibilidad
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los sitios estáticos ofrecen ventajas significativas en términos de rendimiento, dado que no requieren procesamiento del lado del servidor para generar contenido, resultando en tiempos de carga extremadamente rápidos y capacidad de servir miles de usuarios simultáneos con recursos mínimos del servidor. Esta eficiencia se traduce en costos de hosting reducidos y mayor disponibilidad del sistema, especialmente cuando se utilizan redes de distribución de contenido (CDN) para servir los archivos estáticos desde ubicaciones geográficamente cercanas a los usuarios. 
    
        .bg-color-6.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La simplicidad arquitectónica de los sitios estáticos también resulta en mayor seguridad, dado que la ausencia de procesamiento del lado del servidor elimina muchas vulnerabilidades comunes como inyección SQL, ataques de scripting del lado del servidor, y compromiso de bases de datos.
        p Así mismo, los sitios estáticos destacan por su facilidad de mantenimiento y escalabilidad, ya que su estructura simple permite actualizaciones rápidas mediante la modificación directa de archivos, sin necesidad de gestionar bases de datos o lógica compleja del servidor. Esto facilita la integración con herramientas modernas de desarrollo como generadores de sitios estáticos y flujos de trabajo basados en control de versiones, lo que mejora la colaboración entre equipos y reduce la probabilidad de errores.

    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/17.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p Celaya Luna (2015), destaca que los sitios dinámicos proporcionan flexibilidad y funcionalidad que no es posible alcanzar con sitios estáticos, permitiendo la personalización del contenido, interactividad compleja, y la implementación de lógica de negocio sofisticada. Se implementan capacidades como autenticación de usuarios, procesamiento de formularios, integración con servicios externos, y actualización de contenido en tiempo real que son fundamentales para aplicaciones web modernas. Sin embargo, esta flexibilidad conlleva costos en términos de complejidad arquitectónica, requisitos de recursos del servidor, y potenciales vulnerabilidades de seguridad que requieren monitoreo y mantenimiento constante.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/18.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p En el desarrollo de herramientas para equipos de ingeniería de software, se observa que los sitios estáticos son ideales para documentación técnica, páginas de landing de proyectos, y sistemas de presentación de resultados que no requieren actualización frecuente. Los sitios dinámicos son necesarios para herramientas colaborativas, sistemas de gestión de proyectos, y aplicaciones que requieren sincronización en tiempo real entre múltiples usuarios. La decisión entre estático y dinámico a menudo resulta en arquitecturas híbridas que combinan generación estática para contenido que cambia poco con APIs dinámicas para funcionalidades que requieren procesamiento en tiempo real.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/19.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p Para demostrar estos beneficios y limitaciones, se propone crear un análisis comparativo práctico implementando el mismo sistema de documentación de proyecto en ambos enfoques. Se mide el tiempo de carga de la versión estática versus la dinámica, se evalúa la capacidad de personalización de cada aproximación, y se simula la carga de usuarios concurrentes para comparar el rendimiento. Se implementa una herramienta de análisis que mida métricas como tiempo de primera carga, tiempo de interactividad, y uso de recursos del navegador. El resultado proporciona datos cuantitativos sobre las diferencias de rendimiento y una comprensión práctica de cuándo elegir cada enfoque basándose en los requisitos específicos del proyecto y las restricciones de recursos disponibles.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249857?page=1" target="_blank" rel="noopener noreferrer") Granados La Paz, R. L. (2023). Desarrollo de aplicaciones web en el entorno servidor. IFCD0210: (1 ed.). IC Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62489?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. Verde Marín, J. & López Sanz, M. (2015). Desarrollo web en entorno servidor: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://webflow.com/blog/static-vs-dynamic-websites" target="_blank" rel="noopener noreferrer") Babich, N. (2025, junio). Static vs. dynamic websites — what’s the difference? [Blog]. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.webnots.com/comparison-of-static-and-dynamic-website/" target="_blank" rel="noopener noreferrer") WebNots. (2025, mayo). Static vs Dynamic Websites: Key Differences Explained. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://virejdasani.github.io/Responsivize/" target="_blank" rel="noopener noreferrer") Responsivize Descripción: App de escritorio open source para probar cómo se adaptan sitios web a diferentes dispositivos (iPhone, Android, tablets). Muy útil para evaluar comportamientos dinámicos.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://medevel.com/responsive-design-tools/" target="_blank" rel="noopener noreferrer") The Responsive Design Checker Descripción: Herramienta web open source para testear sitios en múltiples resoluciones, perfecta para comparar el comportamiento de contenido estático versus dinámico.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/2PxkoBCp4TY" target="_blank" rel="noopener noreferrer") Internet-class. (2016, 29 de septiembre). ¿Cuál es la diferencia entre una página web estática y dinámica? [Vídeo] YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/dUvNReyOhbI" target="_blank" rel="noopener noreferrer") WordPress. (2024, 22 de abril). Diseñando contenidos irresistibles para tu web con IA  [Vídeo] YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
