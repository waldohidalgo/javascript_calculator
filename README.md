# Project JavaScript Calculator

Repositorio con el código con el cual he creado mi calculadora para aprobar el **cuarto proyecto** que es requisito obligatorio para obtener la **Front End Development Libraries Certification** de [freecodecamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator). En mi proyecto he incluido la test suite de freecodecamp para verificar la aprobación de mi proyecto.

Nota: en algunos navegadores y dispositivos ocurre que al realizar los test se genera un desfase entre el valor almacenado en el elemento con id='display' lo que puede generar en ocasiones que mi proyecto falle en algunos test debido al re-rendereo del componente.

## Tabla de Contenidos

- [Project JavaScript Calculator](#project-javascript-calculator)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Librerias Utilizadas](#librerias-utilizadas)
  - [Requisitos del Proyecto](#requisitos-del-proyecto)
  - [Proyecto Aprobado al superar todos los test](#proyecto-aprobado-al-superar-todos-los-test)
  - [Screenshot Devices](#screenshot-devices)
    - [Pantallas Grandes](#pantallas-grandes)
    - [Pantallas Small](#pantallas-small)
  - [Operaciones](#operaciones)
    - [1: 0.1+0.2](#1-0102)
      - [1.1: 0.1+0.2 en Javascript Puro](#11-0102-en-javascript-puro)
      - [1.2: 0.1+0.2 en mi calculadora](#12-0102-en-mi-calculadora)
    - [2: 0.3-0.1](#2-03-01)
      - [2.1: 0.3-0.1 en Javascript Puro](#21-03-01-en-javascript-puro)
      - [2.2: 0.3-0.1 en mi calculadora](#22-03-01-en-mi-calculadora)
    - [3: 0.7 \* 0.1](#3-07--01)
      - [3.1: 0.7 \* 0.1 en Javascript Puro](#31-07--01-en-javascript-puro)
      - [3.2: 0.7 \* 0.1 en mi calculadora](#32-07--01-en-mi-calculadora)
    - [4: 0.2+0.1-0.3](#4-0201-03)
      - [4.1: 0.2+0.1-0.3 en Javascript Puro](#41-0201-03-en-javascript-puro)
      - [4.2: 0.2+0.1-0.3 en mi calculadora](#42-0201-03-en-mi-calculadora)
    - [5: 0.1\*0.1](#5-0101)
      - [5.1: 0.1\*0.1 en Javascript Puro](#51-0101-en-javascript-puro)
      - [5.2: 0.1\*0.1 en mi calculadora](#52-0101-en-mi-calculadora)
    - [6: 0.3+0.6](#6-0306)
      - [6.1: 0.3+0.6 en Javascript Puro](#61-0306-en-javascript-puro)
      - [6.2: 0.3+0.6 en mi calculadora](#62-0306-en-mi-calculadora)
    - [7: 0.3 \* 0.3 / 0.1](#7-03--03--01)
      - [7.1: 0.3 \* 0.3 / 0.1 en Javascript Puro](#71-03--03--01-en-javascript-puro)
      - [7.2: 0.3 \* 0.3 / 0.1 en mi calculadora](#72-03--03--01-en-mi-calculadora)
  - [Resultados Incoherentes](#resultados-incoherentes)

## Descripción

He creado una calculadora que realiza las operaciones aritméticas **suma**, **resta**, **multiplicación** y **división** con una precisión de 10 digitos. La calculadora posee botones para el ingreso de digitos del 0 al 9, botón para agregar un punto, botón para volver al estado inicial (borra todo), botones de las 4 operaciones matemáticas y botón para realizar los cálculos. Además, como auto desafío, he creado los botones: agregar dos ceros (**00**), obtener porcentaje (**%**) y borrar el último caracter ingresado **<-**. Estos tres botones adicionales estan fuera de los requisitos obligatorios que debía cumplir el proyecto.

## Librerias Utilizadas

| Tecnologías Utilizadas |
| ---------------------- |
| Nextjs 12              |
| React 17               |
| ReactDom 17            |
| Mathjs                 |
| React-icons            |
| Typewriter-effect      |

## Requisitos del Proyecto

![Requisitos del Proyecto](./screenshots/requisitos.webp)

## Proyecto Aprobado al superar todos los test

![Proyecto Aprobado](./screenshots/approved_project.webp)

## Screenshot Devices

### Pantallas Grandes

![Pantallas Grandes](./screenshots/project_big_screen.webp)

### Pantallas Small

![Pantallas Small](./screenshots/project_small_screen.jpg)

## Operaciones

A continuación muestro una serie de operaciones matemáticas que usando JavaScript puro darían error debido al uso de números de punto flotante pero que mi calculadora realiza correctamente al manejar los números como BigNumber de la librería **Mathjs**:

### 1: 0.1+0.2

#### 1.1: 0.1+0.2 en Javascript Puro

![0.1+0.2 JS Puro](./screenshots/0.1+0.2_js_puro.jpg)

#### 1.2: 0.1+0.2 en mi calculadora

![0.1+0.2 en mi calculadora](./screenshots/0.1+0.2_calculadora.webp)

### 2: 0.3-0.1

#### 2.1: 0.3-0.1 en Javascript Puro

![0.3-0.1 JS Puro](./screenshots/0.3-0.1_js_puro.jpg)

#### 2.2: 0.3-0.1 en mi calculadora

![0.3-0.1 en mi calculadora](./screenshots/0.3-0.1_calculadora.webp)

### 3: 0.7 \* 0.1

#### 3.1: 0.7 \* 0.1 en Javascript Puro

![0.7 * 0.1 JS Puro](./screenshots/0.7por0.1_js_puro.jpg)

#### 3.2: 0.7 \* 0.1 en mi calculadora

![0.7 * 0.1 en mi calculadora](./screenshots/0.7por0.1_calculadora.webp)

### 4: 0.2+0.1-0.3

#### 4.1: 0.2+0.1-0.3 en Javascript Puro

![0.7 * 0.1 JS Puro](./screenshots/0.2+0.1-0.3_js_puro.jpg)

#### 4.2: 0.2+0.1-0.3 en mi calculadora

![0.2+0.1-0.3 en mi calculadora](./screenshots/0.2+0.1-0.3_calculadora.webp)

### 5: 0.1\*0.1

#### 5.1: 0.1\*0.1 en Javascript Puro

![0.7 * 0.1 JS Puro](./screenshots/0.1por0.1_js_puro.jpg)

#### 5.2: 0.1\*0.1 en mi calculadora

![0.1*0.1 en mi calculadora](./screenshots/0.1por0.1_calculadora.webp)

### 6: 0.3+0.6

#### 6.1: 0.3+0.6 en Javascript Puro

![0.3+0.6 JS Puro](./screenshots/0.3+0.6_js_puro.jpg)

#### 6.2: 0.3+0.6 en mi calculadora

![0.3+0.6 en mi calculadora](./screenshots/0.3+0.6_calculadora.webp)

### 7: 0.3 \* 0.3 / 0.1

#### 7.1: 0.3 \* 0.3 / 0.1 en Javascript Puro

![0.3 * 0.3 / 0.1 JS Puro](./screenshots/0.3por0.3div0.1_js_puro.jpg)

#### 7.2: 0.3 \* 0.3 / 0.1 en mi calculadora

![0.3 * 0.3 / 0.1 en mi calculadora](./screenshots/0.3por0.3div0.1_calculadora.webp)

## Resultados Incoherentes

Cuando se intenta calcular alguna operación matemática que este mal escrita se muestra lo siguiente:

![Resultado Incoherente](./screenshots/nan_resultado.webp)
