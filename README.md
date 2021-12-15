# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del Producto](#2-definición-del-producto)
* [3. Diseño de la Interfaz de Usuario](#3-diseño-de-la-interfaz-de-usuario)
* [4. Implementación de la Interfaz de Usuario en Responsive](#4-implementación-de-la-interfaz-de-usuario-en-responsive)
* [5. Pruebas Unitarias](#5-pruebas-unitarias)
* [6. Organización del Trabajo ](#6-organización-del-trabajo)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Autoras](#8-autoras)

***

## 1. Preámbulo

El objetivo principal de este proyecto es el diseño y constuccion de una
interfaz web donde se puede visualizar y manipular data con relación a los Juegos Olimpicos que se desarrollaron en Rio de Janeiro en el año 2016. 

## 2. Definición del producto

La página web esta diseñada con la finalidad de brindarle a los usuarios información sobre los juegos olimpicos que se desarrollaron en la Ciudad de Rio de Janeiro en el año 2016, los usuarios podrán obtener detalles de los atletas que participaron por equipos, las disciplinas que desarrollaron, ordenar la información de manera ascendente y descendente o por la edad de los atletas, adicional podrán navegar por un carrusel de fotos alusivas a los mejores momentos vividos en los juegos olimpicos. En la sección principal destaca un ranking de los 10 equipos con más medallas ganadas y los atletas que destacaron en su participación. Con el buscador podrán localizar de una manera más rapida y efectiva a los atletas de su preferencia.  

* _¿Quiénes son los principales usuarios de producto?_

Aficionados al deporte, Medios de Comunicación, Deportistas 

* _¿Cuáles son los objetivos de estos usuarios en relación con el producto?_

-Presentar datos acerca de la participación de los deportistas masculinos y femeninos en los  diferentes deportes.

-Conseguir deportistas de alto nivel mundial.

* _¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?_

-Medallas Ganadas por Equipos 

-Mujeres que participaron y medallas ganadas

-Ficha Técnica de los atletas

-Deportes y disciplinas que se desarrollaron

-Atletas con más medallas ganadas 

### Historias de usuario

Esta dirijido a aquellos usuarios aficionados al deporte, reporteros, periodistas y todo público interesado en la información de las olimpiadas que se desarrollan en el mundo, cada usuario podrá filtrar, buscar, ordenar y obtener una relación de los equipos clasificados más altos y más bajos según las medallas ganadas. 

▶ Hitoria de usuario #1: Yo como usuario quiero una interfaz amigable y fácil de manipular donde pueda hacer búsqueda rápidas, ordenar  en forma ascendente y descendente y conseguir información sobre los JJOO Rio 2016.

▶ Hitoria de usuario #2: Yo como entrenador quiero, ver los ganadores de medallas por pais.

▶ Hitoria de usuario #3: Yo como investigador (noticieros) quiero saber cuales paises participaron , conocer el ranking de los 10 paises que mas medallas ganaron.

▶ Hitoria de usuario #4: Yo como deportista, quiero conocer los deportes y sus disciplinas, la cantidad de ganadores de medallas por disciplinas y ordenar  la información de los atletas que participaron.

▶ Hitoria de usuario #5: Yo como usuario quiero tenener un boton donde le pueda dar click para regresar a la pagina principal.

▶ Hitoria de usuario #6: Yo como usuario, quiero un boton donde pueda buscar a todos los atletas

## 3. Diseño de la Interfaz de Usuario
Se emplearon las tecnologías HTML, CSS y JS para el desarrollo de la aplicación siguiendo los prototipos diseñados. 

### Prototipo de baja fidelidad
![PROTOTIPO BF](https://user-images.githubusercontent.com/89501132/145660039-ded08637-fca0-4397-a38b-5e0ff0bfa5cf.jpeg)

### Prototipo de alta fidelidad
![Proyecto 2](https://user-images.githubusercontent.com/89501132/145660199-de6f61ce-cbe3-47b4-a63d-056aceed3d82.png)

## 4. Implementación de la Interfaz de Usuario en Responsive 
![responsive](https://user-images.githubusercontent.com/89501132/145660544-7862c7dc-0c0a-4b5d-9f3c-653f1dd88c0b.jpeg)

## 5. Pruebas unitarias

Las Pruebas Unitarias (_tests_), permiten que las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas funcionen correctamente. 

Estas deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga las funciones. 

![pruebas unitarias](https://user-images.githubusercontent.com/89501132/145660594-1ead1d62-0d61-4621-9a6a-020883305094.jpeg)

## 6. Organización del Trabajo

* [Trello] (https://trello.com/b/ie6yBVJQ/rio-2016)

#### Herramientas 

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

## 7. Objetivos de aprendizaje

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**
- [x] **Modelo de caja (box model): borde, margen, padding**
- [x] **Uso de flexbox en CSS**

### Web APIs

- [x] **Uso de selectores del DOM**
- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [x] **Manipulación dinámica del DOM**

### JavaScript

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [x] **Arrays (arreglos)**
- [x] **Objetos (key, value)**
- [x] **Variables (declaración, asignación, ámbito)**
- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [x] **Uso de bucles/ciclos (while, for, for..of)**
- [x] **Funciones (params, args, return)**
- [x] **Pruebas unitarias (unit tests)**
- [x] **Módulos de ECMAScript (ES Modules)**
- [x] **Uso de linter (ESLINT)**
- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**
- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset)**
- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [x] **GitHub: Despliegue con GitHub Pages**
- [x] **GitHub: Colaboración en Github (branches | forks | pull requests)**

### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**
- [x] **Crear prototipos para obtener feedback e iterar**
- [x] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**
- [x] **Planear y ejecutar tests de usabilidad**

## 8. Autoras ❣

✎ Ana Karina Gonzalez

✎ Karen Berrio Rufino

✎ Naimerith Magdaleno

