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
* [9. DEPLOY](#9-deploy)
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


Comencé mi proceso de diseño con un boceto rápido a mano para la interfaz de usuario. En esta fase mi enfoque se centra en la disposición general de los elementos en la página. Identifique los elementos esenciales que quería incorporar en mi interfaz, como las
tarjetas, filtros e información. Este enfoque manual me permite experimentar con varias ideas y conceptos antes de avanzar a etapas más detalladas del diseño.

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


* La aplicación permite al usuario visualizar los elementos de la información mediante una presentación en forma de tarjetas. Cada tarjeta se encuentra encapsulada en un elemento `<li>`, y estos elementos `<li>` están agrupados dentro de un elemento `<ul>`.

* El elemento `<ul>` está vinculado como descendiente de otro elemento que posee un atributo id específico.

* Las tarjetas resaltan los valores asociados a las propiedades de los videojuegos. Estos valores son susceptibles de ser filtrados y ordenados mediante los siguientes criterios en mi programa:

   * Género: Si se elige un género específico.
   * Punto de Vista (POV): Si se selecciona un POV particular.
   * Orden ascendente: Para organizar alfabéticamente de forma ascendente.
   * Orden descendente: Para organizar alfabéticamente de forma descendente.
   * La información resultante, después de aplicar los filtros y la ordenación, se devuelve para su uso.

* La interfaz estructura de manera semántica la información mediante el estándar de microdatos, haciendo uso de atributos como `itemscope`, `itemtype` e `itemprop`.

* La aplicación realiza el cálculo y presenta estadísticas sobre la cantidad de videojuegos disponibles en línea y los que no lo están.

* Para simplificar la experiencia del usuario al filtrar información, se han incorporado elementos `<select>` que emplean atributos de datos y nombres. Cada `<option>` dentro de estos elementos `<select>` tiene un atributo value que corresponde al filtro deseado.
Además, se ha creado un `<select>` adicional que ofrece opciones para ordenar la información, permitiendo al usuario elegir entre ordenar alfabéticamente de forma ascendente o por género (Mujer-Hombre y viceversa).

* Es esencial señalar que las funciones de ordenar y filtrar operan de manera acumulativa. Esto significa que, si se aplica un filtro específico y luego se decide ordenar alfabéticamente, la plataforma mantiene el filtro original y organiza las tarjetas según el
criterio seleccionado.

* La aplicación proporciona la opción de reiniciar la información filtrada mediante un botón, eliminando cualquier filtro aplicado y restableciendo el orden original.

* Cabe destacar que las operaciones de filtrar, ordenar, limpiar, entre otras, se realizan de forma dinámica a través de JavaScript, es decir, interactúa sin necesidad de recargar la página.

* Adicionalmente, la aplicación es completamente adaptable, brindando una experiencia óptima en dispositivos móviles, tablets y desktops.


