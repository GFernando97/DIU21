# DIU21
Prácticas Diseño Interfaces de Usuario 2020-21 (Tema: Turismo) 

Grupo: DIU2_roadToAndorra.  Curso: 2020/21 
Updated: 10/5/2021

Proyecto: TourGranada

Descripción: 

El proyecto consiste en el desarrollo de una aplicación institucional de turismo en la ciudad de Granada. A través de la aplicación los usuarios podrán obtener información relacionada con todo tipo de monumentos, museos, eventos, restaurantes, hoteles etc, etc. Además se ofrece la posibilidad de registrarse en la aplicación, lo cual permite el acceso a una serie de funcionalidades extra tales como: marcar como favoritos artículos que el usuario encuentre interesantes para poder acceder a ellos de forma más rápida en la sección de favoritos, realizar comentarios en los artículos, crear rutas turísticas personalizadas para realizar en Granada...

La aplicación también dispone de un motor de búsqueda de artículos dentro de la aplicación y se una sección especial para empresas a través de la cual un determinado negocio (hotel, restaurante, monumento...) podrá validarse y anunciarse en la aplicación.

Logotipo: 

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/LogoColorApp.png" width=25% height=25%>

Miembros
 * :bust_in_silhouette: Gabriel Fernando Lojano Mayaguari       :octocat:     GFernando97
 * :bust_in_silhouette: Moisés Noguera Carrillo      :octocat:      mnc99

----- 

# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

En primer lugar, para comprender mejor el estado del mercado al que va destinada la aplicación a desarrollar se ha realizado un análisis de cómo la competencia está abordando el turismo. Esto permite encontrar inspiración y también determinar qué aspectos o funcionalidades no son abarcados por los principales competidores y tenerlos en cuenta en la aplicación.

Hemos analizado 7 casos de estudio, 5 de ellos páginas web y dos aplicaciones móvil disponibles en Play Store.
Como conclusión, hemos concluido que aquella que mayor puntuación  ha obtenido en base a la información, reseñas, posibilidad de registro y demás apartados de comparación es la alicación movil Nativoo, ganando en posición a nuestra propuesta web [granadadirect](http://www.granadadirect.com/). No obstante esta aplicación no es perfecta ya que carece de una adaptación a posibles minusvalías y tampoco ofrece otros lenguajes a parte del español.

Como se ha mencionado antes, nuestra caso de estudio propuesto es [granadadirect](http://www.granadadirect.com/). Hemos escogido esta página debido a que el acceso a la misma y a sus apartados es bastante claro, pues todos los posibles ámbitos de información se encuentran en la página principal. Además, a medida que indagamos en la página, podemos observar que cuenta con una información de calidad, pues se nos ofrece tanto los datos sobre el lugar, monumento, restaurante, local... que vamos a visitar, además de una breve historia su localización y precios en caso en el que se deba pagar. Si bien es cierto que carece con apartados cuyos otros competidores si tienen, cosideramos que esta página es muy completa en los ámbitos en los que destaca.

![AnalisisCompetitivo](https://github.com/GFernando97/DIU21/blob/master/P1/AnalisisC.png)

![Método UX](img/Persona.png) 1.b Persona
-----

Tras realizar el análisis competitivo, se han creado dos usuarios ficticios para evaluar cuál es su experiencia de usuario y cómo reaccionan al utilizar la web que hemos escogido como caso de estudio para encontrar información turística. Gracias a este tipo de análisis podemos extraer información valiosa acerca de qué aspectos tener en cuenta a la hora de desarrollar nuestra propia aplicación para así lograr una buena experiencia de usuario.

Hemos diseñado a dos personas diferenciadas en edad y capacidad de uso de tecnólogias:
 
 1. Juan García:
 - Es un hombre avanzada edad,cuya mujer falleció y padre de dos hijos ya emancipados y completamente independientes. Trabaja de cartero, ha sido su trabajo de toda la vida, de echo, conoció a su mujer entregándole una carta y se enamoró completamente de ella. Es un hombre muy familiar, además de amistoso. En el trabajo es el más veterano y todos sus compañeros le tienen aprecio. Vive en Pinto, Madrid. Sus hijos, sin -embargo, al independizarse, se movilizaron a Granada por motivos de trabajo y relacion con sus respectivas parejas. Por ende, desde que su mujer falleciera, Juan vive solo. Si bien, pasa la mayor parte del tiempo libre que tiene en el bar con sus compañeros de trabajo viendo el partido de fútbol, Juan se siente a menudo sólo y echa de menos a sus hijos, desearía poder estar con ellos y poder conocer a su futuro nieto, que nacerá en breve.
 
![Juan](https://github.com/GFernando97/DIU21/blob/master/P1/Juan%20Persona%20.png)

2. Gabriella Ricci:
- Es una chica estudiante de traducción de idiomas. Soñadora y divertida, siempre le ha encantado descubrir nuevas experiencias, así como lugares y personas. Desafortunadamente, a la edad de 18 años, cuando apenas consiguió sacarse el carnet de conducir, sufrió un grave accidente de coche que la dejó con una minusvalía e incapaz de caminar por sí sola. Este evento no ha mermado sus ganas de vivir y siempre se ha mantenido con una sonrisa ante los nuevos obstáculos. Los encuentra desafiantes y no se rinde ante ellos. En cuanto a su familia, su padre los abandonó cuando ella era apenas una niña y no recuerda demasiado de él. Tiene una hermana mayor. Ella junto con su madre son sus modelos a seguir y siempre tiene en cuenta las opiniones que le dan sobre cualquier tema. Uno de sus mayores sueños es poder visitar todos los lugares interesantes del mundo. No obstante ha decidido empezar visitando las ciudades mas interesantes de España. Entre ellas se encuentra Granada, una ciudad que siempre le ha llamado la atención.

![Gabriella](https://github.com/GFernando97/DIU21/blob/master/P1/Gabriella%20Persona%20Template.png)

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

Para cada usuario ficticio, se ha desarrollado un Journey Map relacionado con su contexto y personalidad para poner a prueba la página web escogida como caso de estudio. A continuación se describen los dos escenarios propuestos para cada uno de ellos:

1. Juan:
- Juan ha seguido seis etapas durante todos el proceso. Tomamos como inspiración de la idea dar una sorpresa a sus hijos e ir a visitarlos durante sus vacaciones(las de Juan). A partir de este momento, intentará escoger aquellos dias en los que el precio de las reservas sea económico respetando su calendario de vacaciones.
Debido a su consciencia del avance de las tecnologías, Juan decide buscar información por su propia cuenta y a través de su ordenador personal, a pesar de que no es un experto en la materia y muestra ciertas dificultades con su uso. Un obstáculo encontrado es que hay demasiada información en internet y no sabe exactamente que información es la fiable. Finalmente se decide por una página algo conocida y llamada [granadadirect](http://www.granadadirect.com/).

    Una vez dentro de la página, decide buscar alojamiento económico y cerca de la ubicación de sus hijos. Si bien el objetivo principal del viaje es visitar a sus hijos, también quiere aprovechar para visitar Granada y, puesto que no va a conducir, le preocupa la eficacia del transporte público y el tiempo que se encontrará una vez esté allí. Como es costumbre, le cuenta la idea del viaje sorpresa a sus amigos, y estos al enterarse, le recomiendan lugares imprescindibles que visitar y, también le aconsejan sobre lugares en los que comer bien. Juan, una vez ha oído sobre estos lugares, decide buscar información sobre ellos en la web nombrada anteriormente y contrasta la información con la de sus amigos.

    Después de toda su búsqueda, encuentra 3 opciones que a su parecer son óptimas para él. Sólo le queda por tanto, reservar el hotel y empezar a preparar sus maletas. No obstante Juan es también un hombre previsor y ha decidido reservar ciertos días con posibilidad de cancelación, por si se presentase algún imprevisto y tuviese que volver antes de tiempo.
    
![Juan](https://github.com/GFernando97/DIU21/blob/master/P1/Journey%20Map%20Juan.png)

2. Gabriella:
- Al igual que con Juan, las etapas del proceso de reserva para Gabriella han sido 6:
Gabriella quiere viajar por España con el objetivo de poder conocer mejor las principales ciudades de su país, vivir nuevas experiencias y hacer nuevos amigos. Ha decidido comenzar su viaje visitando la hermosa ciudad de Granada. Sin embargo, es minusválida y por tanto tiene que encontrar lugares que estén adaptados a su situación. Para ello comnienza buscando en Internet páginas web dónde poder encontrar información acerca de qué hacer y dónde puede alojarse en Granada, hay muchas webs en las que poder informarse. Cuando lleva un rato navegando por diferentes webs acerca de turismo en Granada, se da cuenta de que muy pocas de ellas proporciona información acerca de si los alojamientos y las distintas zonas que puede visitar están o no adaptadas para personas minusválidas. Además las pocas opciones que encuentra no se ajustan a su economía, que es un poco limitada. Debido a que la página web no le ha sido útil, decide consultar a su hermana, cuya opinión siempre tiene en cuenta.

    Gabriella está muy emocionada con la recomendación que le ha hecho su hermana, un hotel adaptado para minuválidos y además económico. Sin embargo, en la web página de información turística que más le había gustado no encuentra información referente a este hotel y no puede ver ninguna de reseña de clientes del mismo en esta página. Decido buscar en otras páginas web información acerca de este alojamiento y de nuevo encuentra demasiada información. Finalmente, tras haber encontrado información del hotel decide realizar la reserva y está deseando comenzar la aventura.
    
![Gabriella](https://github.com/GFernando97/DIU21/blob/master/P1/Journey%20Map%20Gabriella.png)


![Método UX](img/usabilityReview.png) 1.d Usability Review
----

Valoración final: 69 (Moderada).

En cuanto a las características y la funcionalidad de la página web escogida, en general son bastante buenas y ofrece información relevante (dónde comer, dónde alojarse, qué sitios vistar...) y fácil de encontrar para todo tipo de usuarios. Si hablamos de la navegación a través de la página, esta es simple e informa en cada momento de en qué apartado te encuentras dentro de la misma. Además, los posibles errores que puedan aparecer a la hora de usar la página (por ejemplo no rellenar el mínimo de palabras en el campo de comentario para hacer una reseña) son claros y permiten solucionar fácilmente el problema. El principal elemento diferencial de esta página web es que proporciona información muy útil y práctica sobre todo tipo de actividades turísticas que se pueden hacer en Granada, acompañadas de imágenes descriptivas.

Algunos aspectos en los que podría mejorar podrían ser la incorporación de un menú desplegable dónde aparezcan los difentes apartados en lugar de que aparezcan todos directamente en la pantalla de inicio, añadir una barra de búsqueda para poder encontrar información más concreta, opción de registro y almecenamiento de información que el usuario considere relevante en su propio perfil, incorporación de más idiomas (sólo está disponible en español e inglés) y mejores opciones de ayuda al usuario como chat on-line.

La revisión de usabilidad completa puede encontrarse en el siguiente [documento](https://github.com/GFernando97/DIU21/blob/master/P1/Usability-review.pdf).


## Paso 2. UX Design  

![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid
----

Como método de ideación se ha empleado una malla receptora de información, con la que se han extraído puntos fuertes acerca del anterior caso de estudio, elementos a mejorar, posibles dudas o inquietudes por parte de los usuarios y propuesta de mejora para aplicar a la aplicación que vamos a desarrollar.

![MallaReceptoradeInformacion](https://github.com/GFernando97/DIU21/blob/master/P2/Malla%20Receptora%20de%20Informaci%C3%B3n.png)


![Método UX](img/ScopeCanvas.png) 2.b ScopeCanvas
----

Como propuesta de valor para utilizar nuestra aplicación hemos destacado los siguientes aspectos:

- Poner a disposición de los usuarios información efectiva, útil y directa acerca de Granada.
- Proporcionar información relevante acerca de las condiciones de adaptación para personas que sufran algún tipo de discapacidad o minusvalía en loslugares que presentamos en la aplicación.
- Una interfaz de usuario que sea intuitiva y sencilla de utilizar para todo tipo de personas (especialmente aquellas pertenecientes al sector de la tercera edad).
- Ofrecer soporte técnico y asistencia a los usuarios en todo momento.

![PDFCanvas](https://github.com/GFernando97/DIU21/blob/master/P2/Canvas.png)

![Método UX](img/Sitemap.png) 2.b Tasks analysis 
-----

Siguiendo con el caso de estudio, a continuación se define el conjunto de tareas que los usuarios podrán realizar en la aplicación:

![UserTaskMatrix](https://github.com/GFernando97/DIU21/blob/master/P2/Tabla.png)


![Método UX](img/labelling.png) 2.c IA: Sitemap + Labelling 
----

Una vez definidas las tareas que se pueden realizar en la aplicación, se ha desarrollado un Sitemap con el que se especifica cuál es la arquitectura de información que sigue la aplicación y cómo navegar a través de la misma para realizarlas.

![SiteMap](https://github.com/GFernando97/DIU21/blob/master/P2/Sitemap.png)

Además se ha desarrollado un labelling o etiquedo de cada uno de los elementos que aparecerán en la interfaz de la aplicación para indicar su significado y propósito con exactitud. Se puede acceder al documento pulsando [aquí](https://github.com/GFernando97/DIU21/blob/master/P2/Labelling%20description.pdf).


![Método UX](img/Wireframes.png) 2.d Wireframes
-----

Para finalizar este apartado del estudio, se han propuesto una serie de bocetos de las diferentes pantallas que presenta la aplicación de turismo.

* Pantalla de registro:

![Registro](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/register.png)

* Pantalla de inicio de sesión:

![InicioSesion](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/login.png)

* Pantalla de inicio de la app (usuario registrado):

![Homepage](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/homepage-registered.png)

* Pantalla de inicio de la app (usuario no registrado/iniciada sesión). El icono de perfil se muestra diferente para indicar al usuario al iniciar la aplicación que aún no ha iniciado sesión o que no está registrado:

![Homepage](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/homepage-nonregistered.png)

* Pantalla de menú lateral de opciones:

![Menú](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/panel-lateral.png)

* Pantalla de búsqueda:

![Buscar](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/search.png)

* Pantalla de un artículo de la app:

![Articulo](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/article.png)

* Pantalla de ajuestes generales de la aplicación:

![Ajustes](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/settings.png)

* Pantalla About us:

![About](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/about-us.png)

* Pantalla perfil de usuario:

![Perfil](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/profile.png)

* Pantalla de ajustes de perfil:

![AjustesPerfil](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/profile-settings.png)

* Pantalla para editar información de perfil:

![EditarPerfil](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/edit-profile.png)

* Pantalla de rutas:

![Rutas](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/routes.png)

* Pantalla de gestión para empresas que se anuncian en la app:

![Empresas](https://github.com/GFernando97/DIU21/blob/master/P2/Bocetos%20finales/bussines-setting.png)


## Paso 3. Mi UX-Case Study (diseño)

![Método UX](img/moodboard.png) 3.a Moodboard
-----
 
 Para plantear el diseño visual de la aplicación se ha utilizado un Moodboard, en el que se incluyen los siguientes aspectos:
 
- Logo de la aplicación.
- Fuentes elegidas.
- Paleta de colores empleada.
- Estilo de iconos empleados.
- 3 imágenes inspiradoras.

![MoodBoard](https://github.com/GFernando97/DIU21/blob/master/P3/MoodBoard.png)


![Método UX](img/landing-page.png)  3.b Landing Page
----

También se ha diseñado una Landing Page para promocionar la aplicación en la que se anima a las personas que la visualizen a descargarla, enumerando los principales beneficios de hacer uso de la misma.

![Landing Page](https://github.com/GFernando97/DIU21/blob/master/P3/Landing%20Page.png)


![Método UX](img/guidelines.png) 3.c Guidelines
----

A la hora de diseñar los prototipos finales de la aplicación hemos seguidos los siguientes patrones de diseño para dispositivos móviles:

- Onboarding: A la hora de acceder a la aplicación se han empleado patrones de diseño para registro e inicio de sesión. En ambos casos se proporciona la posibilidad al usuario de hacerlo con su cuenta de Google, Apple ó Facebook.
- Content: En cuanto a los patrones de diseño para el contenido de la aplicación, se han empleado patrones de diseño para realizar una página de inicio con una galería de imágenes, para mostrar artículos dentro de la aplicación, para ajustes generales etc, etc
- Data: Para el procesamiento de los datos que gestiona la aplicación hemos empleado un patrón de búsqueda con el que los usuarios puedan buscar de entre todos los artículos disponibles el que deseen. También se emplean patrones de filtros y ordenación de resultados obtenidos en las búsquedas.
- Communication: Se han empleado patrones About para informar acerca del propósito de la aplicación, así como patrones de privacidad y términos legales.
- Social: A nivel social se emplean patrones de diseño de bots que puedan proporcionar ayuda a los usuarios, posibilidad de realizar comentarios en los artículos, disponer de un perfil de usuario, enlaces a las redes sociales de la aplicación...
- Layout: Por último, en cuanto al layout hemos empleado un patrón de modo oscuro para aquellos usuarios que lo prefieran.

Como herramienta de apoyo para poder determinar los patrones de diseño se ha usado la página web [Mobbin](https://mobbin.design/patterns).

![Método UX](img/mockup.png)  3.d Mockup
----

A continuación se muestran los protipos finales del aspecto que tendrán cada una de las pantallas de la aplicación:

A continuación se muestran los protipos finales del aspecto que tendrán cada una de las pantallas de la aplicación:

- Registrar

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/register.png" width=35% height=35%>

- Iniciar sesión

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/login.png" width=35% height=35%>

- Página principal

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/home-registered.png" width=35% height=35%>

- Artículo

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/article.png" width=35% height=35%>

- Panel lateral

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/lateral-panel.png" width=35% height=35%>

- Sobre nosotros

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/about-us.png" width=35% height=35%>

- Perfil de usuario

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/profile.png" width=35% height=35%>

- Ajustes de perfil

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/profile-settings.png" width=35% height=35%>

- Editar perfil

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/edit-profile.png" width=35% height=35%>

- Ajustes de negocio

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/business-settings.png" width=35% height=35%>

- Rutas

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/routes.png" width=35% height=35%>

- Búsqueda

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/search.png" width=35% height=35%>

- Ajustes generales

<img src="https://github.com/GFernando97/DIU21/blob/master/P3/Imagenes%20Layout/settings.png" width=35% height=35%>

![Método UX](img/caseStudy.png) 3.e ¿My UX-Case Study?
-----


>>> Publicar my Case Study en Github..
>>> Documente y resuma el diseño de su producto en forma de video de 90 segundos aprox


## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Caso asignado
----

- Caso: Cherry Trip
- Github: https://github.com/Asmilex/DIU21

El caso asignado consiste en una página web para poder realizar viajes en la provincia de Granada, poniendo especial atención en adaptar sus servicios de acuerdo a la situación de pandemia vivida actualmente y en ser accesible para todo tipo de usuarios.

La aplicación web permite crear rutas turísticas personalizadas (restaurantes, hoteles, eventos...) en torno a una localización concreta indicada en un mapa. o bien buscando los puntos de las rutas directamente a través de un motor de búsqueda. Una vez establecida una ruta, la aplicación permite pagar a través de diferentes plataformas de pago. Los usuarios también tienen la posibilidad de personalizar su perfil y cambiar el tema de la web, sus datos etc etc.


![Método UX](img/usability-testing.png) 4.b User Testing
----

Los perfiles de los cuatro usuarios que han realizado el test son los siguientes:
- María: Joven estudiante de 18 años. Es muy sociable y extrovertida. Uno de sus hobbys es viajar y por eso se dispone a usar la aplicación. Su estado anímico actual es feliz y optimista.
- Esperanza: Mujer de 67 años jubilada. A pesar de su edad es muy activa y jovial y alegre. Desea viajar para poder relajarse en una ciudad más tranquila que en la que reside. Actualmente se encuentra frustada ya que le cuesta mucho relajarse en su zona de residencia.
- Jose: Un chico joven de 23 años de edad que actualmente está estudiando. Es una persona tranquila y relajada. Actualmente se encuentra un poco deprimido y ha decidido viajar para animarse un poco.
- Sonia: Una mujer de 45 años, cuya profesión es empresario en el sector de la hostelería. Es una persona seria y exigente. Actualmente se encuentra agobiada por su trabajo, y ha decidido aprovechar sus viajes de negocios para relajarse.

| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | TestA/B
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| María         | M / 18   | Estudiante  | Media       | Extrovertida | App        | A 
| Esperanza     | M / 67   | Jubilada    | Baja        | Jovial       | App        | A 
| Jose          | H / 23   | Estudiante  | Alta        | Tranquila    | Web        | B 
| Sonia         | M / 45   | Empresaria  | Media       | Racional     | Web        | B 


![Método UX](img/Survey.png). 4.c Cuestionario SUS
----

Se ha realizado un cuestionario SUS para evaluar tanto la usabilidad de la Web del equipo que se nos ha asignado (Test B), como la de nuestra propia aplicación (Test A). Para rellenar el cuestionario se han utilizado los cuatro tipos diferentes de usurios con distintas profesiones y edad mencionados en el apartado anterior. Los resultados obtenidos son los siguientes

**Test A:**
- María: 85 --> Aceptable Tipo B
- Esperanza: 65 --> Marginal D

**Test B:**
- Jose: 85 --> Aceptable Tipo B
- Sonia: 70 --> Aceptable Tipo B

Los resultados del cuestionario SUS se pueden ver con más detalle [aquí](https://github.com/GFernando97/DIU21/blob/master/P4/Cuestionario%20SUS%20DIU.pdf)


![Método UX](img/usability-report.png) 4.d Usability Report
----

El documento con el informe de usabilidad para la web del grupo CherryPink se puede visualizar en este [enlace](https://github.com/GFernando97/DIU21/blob/master/P4/P4_UsaReport_CherryPink_doneby_DIU2_roadToAndorra.pdf)

**Conclusión**

A primera vista la aplicación web resulta atractiva puesto que el diseño es minimalista y la paleta de colores resulta agradable a la vista.  Otro punto que corre a su favor es la simplicidad en cuanto a profundidad de la página ya que lo que ves es lo que hay, no existen puntos de acceso difícil y toda la funcionalidad se puede encontrar a primera vista. También resulta notorio la opcionalidad de cambiar la apariencia de la web. Por último, destacar la variedad existente de métodos de pago, ya que están bastante adaptados a las formas de pago actualmente existentes.

 No obstante, se encuentran ciertas dificultades de comprensión de uso cuando se accede a la página por primera vez. Un aspecto que puede confundir a los usuarios es la existencia de dos motores de búsqueda diferentes, uno en la sección “Búsqueda”, y otro dentro de la sección de “Mapa”. Es posible que el usuario no sepa cuál es la diferencia entre ellos. Debido a la posible complejidad que podemos encontrar en el ámbito de comprensión la primera vez que accedemos a la página, se echa en falta una sección de ayuda al usuario que le indique como proceder a hacer uso de la aplicación. Además, no se ha encontrado una sección ni método de contacto para asistencia técnica.
Por último, debido a la diversidad de lenguaje de los posibles usuarios de esta página web, sería necesaria la existencia de de una sección u opción de cambio de, al menos, un idioma alternativo al original de la aplicación. 

En resumen, la idea de la aplicación es realmente innovadora e interesante. Esto junto con la interfaz que se ha presentado hacen que, a primera vista, la aplicación incentive a su uso. Como hemos dicho anteriormente, la paleta de colores nos parece un total acierto para esta aplicación. 
Sin embargo, al indagar más en profundidad en la aplicación y realizar un estudio más exhaustivo, se ha podido comprobar que existen puntos en los que se puede mejorar.

## Conclusión final / Valoración de las prácticas

Como conlusión final podemos decir que a lo largo de estas prácticas hemos ido aprendiendo la importancia que hay que darle al usuario a la hora de diseñar la interfaz de una aplicación. Las diferentes técnicas y procesos que se nos han enseñado para llevar a cabo el diseño nos han parecido verdaderamente útiles tanto para el desarrollo de las prácticas como para futuros proyectos que podamos abordar a nivel laboral. Así mismo, hemos aprendido a valorar el trabajo en equipo y a tener en cuenta la opinión que pueda tener nuestro compañero ya que esta nos puede servir de contraste y ayuda. También hemos visto la importancia de disponer de usuarios con diferentes características para poder tener una visión más amplia y realista de cómo debe comportarse el producto software que se está desarrollando.

Por último hemos encontrado las versiones de prácticas ya terminadas de cursos anteriores que se han proporcionado ya que hemos podido contrastar las diferentes ideas que han surgido así como poder comprobar que debemos realizar en ciertos puntos en los que nos encontrábamos perdidos.
















