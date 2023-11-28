# Dataverse

## Índice

* [1. INTRODUCCIÓN](#1-introducción)
* [2. RESUMEN](#2-resumen)
* [3. PROMPT UTILIZADO](#3-prompt-utilizado)
* [4. PROTOTIPO DE BAJA Y ALTA FIDELIDAD](#4-prototipo-de-baja-y-alta-fidelidad)
* [5. HISTORIAS DE USUARIO](#5-historias-de-usuario)
* [6. FUNCIONALIDADES](#6-funcionalidades)
* [7. CONSIDERACIONES TÉCNICAS](#7-consideraciones-técnicas)
* [8. PRUEBAS UNITARIAS](#8-pruebas-unitarias)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Consideraciones para pedir tu Project Feedback](#10-consideraciones-para-pedir-tu-project-feedback)

***

## 1. INTRODUCCIÓN 

En este proyecto, nos sumergimos en el mundo de la inteligencia artificial para generar un conjunto de datos único. La magia se revela a través de una renderización en HTML mediante JavaScript, creando una experiencia visual cautivadora. Este conjunto de datos,
presentado de manera accesible, adopta la forma de tarjetas de información y se presta a una exploración profunda gracias a filtros interactivos y acumulativos.

La interacción del usuario se potencia con herramientas estadísticas que brindan una comprensión más profunda de la información disponible. Cada tarjeta es una ventana a datos precisos, mientras que los filtros, diseñados para ser intuitivos, permiten una
personalización dinámica de la visualización. En este viaje, fusionamos la potencia de la inteligencia artificial con la flexibilidad de la renderización web, ofreciendo una plataforma que no solo informa, sino que también invita a la exploración y
descubrimiento. 

## 2. RESUMEN

![image](https://github.com/Benb0x/DEV012-dataverse/assets/144946997/f0dfce1d-294f-44bd-9006-c5f3cece85a4)
Vista del proyecto desde el navegador.

En este proyecto, desarrollamos una página web para explorar un conjunto de datos creado mediante la inteligencia artificial a través de instrucciones específicas. La estructura de la página se ajustó considerando las necesidades de los usuarios, utilizando
historias de usuario para su adaptación.

La interfaz consta de diversos filtros que permiten refinar, agrupar y organizar el conjunto de datos, presentando un conjunto de tarjetas con información detallada sobre el tema. Además, se incorporó un botón que posibilita "limpiar" cada campo y regresar a la
visualización predeterminada de datos (inicio).

Dado que utilizamos distintos dispositivos en la actualidad, implementamos consultas de medios mediante CSS en la aplicación para asegurar una visualización óptima tanto en dispositivos móviles como en computadoras, facilitando el acceso a la información.



## 3. PROMPT UTILIZADO

![image](https://github.com/Benb0x/DEV012-dataverse/assets/144946997/6cf337a7-f94c-4828-9395-024dcf9c75cd)


En esta ocasión, nos hemos apoyado en la inteligencia artificial para generar nuestra propia base de datos. Decidimos crear una página dedicada a los videojuegos más populares desde los años 80 hasta el año 2023. Los datos que solicitamos para construir nuestro
conjunto de datos son los siguientes:

ID:
Nombre:
Género:
Descripción Corta:
Descripción Completa:
Imagen URL:
Datos:
Año de Lanzamiento:
Género del Juego:
Estilos de Juego:
Punto de Vista:
Multijugador:

El total de juegos en nuestro dataset es de 29.

## 4. PROTOTIPO DE BAJA Y ALTA FIDELIDAD

Esta aplicación web ha sido construida a partir de dos tipos de prototipos: uno de baja fidelidad y otro de alta fidelidad. Ambos prototipos han sido cuidadosamente diseñados para incorporar requisitos esenciales, garantizando así una plataforma fácil de utilizar
para cualquier usuario.

### Prototipo de baja fidelidad


Comencé mi proceso de diseño con un boceto rápido a mano para la interfaz de usuario. En esta fase mi enfoque se centra en la disposición general de los elementos en la página. Identifique los elementos esenciales que quería incorporar en mi interfaz, como las tarjetas, filtros e información. Este enfoque manual me permite experimentar con varias ideas y conceptos antes de avanzar a etapas más detalladas del diseño.

![image](https://github.com/Benb0x/DEV012-dataverse/assets/144946997/03bbb805-9bc9-415c-ba06-6da357ce5586)


### Prototipo de alta fidelidad


El prototipo de alta fidelidad fue diseñado utilizando la aplicación Figma. En este proceso, se establecieron elementos clave, como la paleta de colores, el estilo visual y el funcionamiento inicial. Este prototipo de alta fidelidad sirve como una representación avanzada y detallada de la visión conceptual.
![image](https://github.com/Benb0x/DEV012-dataverse/assets/144946997/a65ad088-1bb8-422c-b7d4-ea0e371ac514)


## 5. HISTORIAS DE USUARIO

En el desarrollo de las historias de usuario, se ha seguido un enfoque centrado en el visitante, incorporando una serie de preguntas que consideran las necesidades y expectativas del navegante final. Estas preguntas han sido fundamentales para estructurar un
proceso lógico e intuitivo dentro de la aplicación web.

A partir de las respuestas recopiladas, se ha implementado un plan de trabajo que ha permitido establecer objetivos claros. Este enfoque ha sido esencial para diseñar una serie de prototipos que aborden de manera específica las necesidades planteadas en las
historias de usuario. Este proceso orientado al usuario ha sido clave para asegurar que la aplicación no solo cumpla con los requisitos técnicos, sino que también ofrezca una experiencia satisfactoria y efectiva para el visitante final.

Primera historia de usuaria:

![image](https://github.com/Benb0x/DEV012-dataverse/assets/144946997/c311f37e-f499-43a3-b875-5d7c8053f55f)


Para consultar las siguientes historias de usuario, puedes entrar a este enlace: https://docs.google.com/document/d/1sRjVjkS7Ji8zslaAwuDoWsNrKQ_ScfQuvMUBoCOeZ1U/edit

## 6. FUNCIONALIDADES

Aquí detallamos las funciones esenciales de la aplicación:

La aplicación permite al usuario visualizar los elementos de la información mediante una presentación en forma de tarjetas. Cada tarjeta se encuentra encapsulada en un elemento <li>, y estos elementos <li> están agrupados dentro de un elemento <ul>.

El elemento <ul> está vinculado como descendiente de otro elemento que posee un atributo id específico.

Las tarjetas resaltan los valores asociados a las propiedades de los videojuegos. Estos valores son susceptibles de ser filtrados y ordenados mediante los siguientes criterios en mi programa:

Género: Si se elige un género específico.
Punto de Vista (POV): Si se selecciona un POV particular.
Orden ascendente: Para organizar alfabéticamente de forma ascendente.
Orden descendente: Para organizar alfabéticamente de forma descendente.
La información resultante, después de aplicar los filtros y la ordenación, se devuelve para su uso.

La interfaz estructura de manera semántica la información mediante el estándar de microdatos, haciendo uso de atributos como itemscope, itemtype e itemprop.

La aplicación realiza el cálculo y presenta estadísticas sobre la cantidad de videojuegos disponibles en línea y los que no lo están.

Para simplificar la experiencia del usuario al filtrar información, se han incorporado elementos <select> que emplean atributos de datos y nombres. Cada <option> dentro de estos elementos <select> tiene un atributo value que corresponde al filtro deseado. Además, se ha creado un <select> adicional que ofrece opciones para ordenar la información, permitiendo al usuario elegir entre ordenar alfabéticamente de forma ascendente o por género (Mujer-Hombre y viceversa).

Es esencial señalar que las funciones de ordenar y filtrar operan de manera acumulativa. Esto significa que si se aplica un filtro específico y luego se decide ordenar alfabéticamente, la plataforma mantiene el filtro original y organiza las tarjetas según el criterio seleccionado.

La aplicación proporciona la opción de reiniciar la información filtrada mediante un botón, eliminando cualquier filtro aplicado y restableciendo el orden original.

Cabe destacar que las operaciones de filtrar, ordenar, limpiar, entre otras, se realizan de forma dinámica a través de JavaScript, es decir, interactúa sin necesidad de recargar la página.

Adicionalmente, la aplicación es completamente adaptable, brindando una experiencia óptima en dispositivos móviles, tablets y desktops.


## 7. CONSIDERACIONES TÉCNICAS

La aplicación web está compuesta por varios tipos de archivos, incluyendo aquellos escritos en los lenguajes HTML, JavaScript (JS) y CSS:

*src/index.html
*src/main.js
*dataset.js
*src/dataFunctions.js (incluye la función computeStats(data))
*src/data
*test/dataFunctions.spec.js
*test/data.js
*src/view.js (incluye la función renderItems(data))

## 8. PRUEBAS UNITARIAS

A lo largo del proyecto, hemos implementado un total de 10 pruebas unitarias que evalúan el funcionamiento de los filtros de Género, Punto de Vista (POV) y los ordenamientos ascendente y descendente. Estas pruebas unitarias han sido diseñadas para garantizar la
integridad y precisión de estas funcionalidades dentro de la aplicación. Estas pruebas se ejecutan utilizando el comando npm run test.

![image](https://github.com/Benb0x/DEV012-dataverse/assets/144946997/b62d078e-5b63-4898-bf59-4fb29cf48697)


## 9. Pistas, tips y lecturas complementarias

### Primeros pasos

Súmate al canal de Slack
[#project-dataverse](https://claseslaboratoria.slack.com/archives/C03MV35EP5M)
para conversar y pedir ayuda del proyecto.

Antes de empezar a escribir código, debes definir qué deberá hacer el
producto con base en el conocimiento que puedas obtener de tu usuaria.
Estas preguntas te pueden ayudar:

* ¿Quiénes son las principales usuarias del producto?
* ¿Cuáles son los objetivos de estas usuarias en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuaria de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Desarrollo Front-end

* [Tópicos en la currícula de Laboratoria](https://curriculum.laboratoria.la/es/web-dev/topics)
  testing, arreglos, objetos, funciones, DOM en Browser Javascript.
* [Buscando elementos con querySelector*](https://es.javascript.info/searching-elements-dom)
* [Objeto del evento](https://es.javascript.info/introduction-browser-events#objeto-del-evento)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.toSorted en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Atributos de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [Datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Módulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Módulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diferencia entre array y objetos](https://youtu.be/mJJloQY7A8Y)
* [¿Cómo puedo recorrer un objeto?](https://youtube.com/01RHn23Bn_0)
* [`map`, `filter`, `sort` y `reduce` también son métodos para objetos](https://youtu.be/bUl1R2lQvKo)
* [Diferencia entre expression y statements](https://youtu.be/wlukoWco2zk)
* [Diferencia entre createElement e innerHTML](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/)
* [¿Qué es el Scope?](https://youtu.be/s-7C09ymzK8)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Para preguntas sobre Git recomendamos ver este playlist](https://www.youtube.com/watch?v=F1EoBbvhaqU&list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)

## 10. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [ ] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
* [ ] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
* [ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test` y
  que tienen una cobertura del 70% de _statements_ (_sentencias_),
  _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
* [ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run pretest`
* [ ] Está subido a GitHub y desplegado en GitHub Pages
* [ ] Captura de pantalla del prompt utilizado para generar los datos.
* Tiene un `README.md` con la siguente:
  - [ ] _Definición del producto_ clara e informativa
  - [ ] Historias de usuario
  - [ ] Un _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
  - [ ] El listado de problemas que detectaste a través de tests
    de usabilidad en el `README.md`
* Tiene un UI que cumple las funcionalidades:
  - [ ] Muestra lista con datos y/o indicadores
  - [ ] Permite ordenar data por uno o más campos (asc y desc)
  - [ ] Permite filtrar data con base en una condición
  - [ ] Permite limpiar los filtros con un botón
  - [ ] Es _responsive_

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.
