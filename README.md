# travelTo

Proyecto de integración continua.

Politecnico grancolombiano 2019.

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Link de la página

Esta página esta desplegada en github :computer: . Has [CLIC](https://yesidmarin.github.io/travelTo/) para visualizarla

## Construcción en Docker

El proyecto se construyo por medio de docker-compose. En la línea de comandos ejecutar `docker-compose up --build -d` si se desea bajar o eliminar el contenedor ejecutar `docker-compose down`

## Jenkins CI

### For Mac
Antes de ejecutar el comando `docker-compose up --build -d` se debe cambiar la ruta del volumen `/su_ruta/Jenkins_home:/var/jenkins_home ` en el archivo `docker-compose.yml` para poder desplegar efectivamente.

### For Windows
Antes de ejecutar el comando `docker-compose up --build -d` se debe cambiar la ruta del volumen `c:/Users/UserName/su_ruta/Jenkins_home:/var/jenkins_home ` en el archivo `docker-compose.yml` para poder desplegar efectivamente.

## Development server

Antes de ejecutar el comando `ng serve` se debe instalar o actualizar los paquetes con el comando `npm install` o `npm update`. 

Correr el comando `ng serve` para el servidor de dev. Navegar a `http://localhost:4200/`. La app se recargará automaticamente si tu hiciste algun cambio en los archivos de código.

## Build

Correr el comando `ng build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist /`. Use la bandera `--prod` para una compilación de producción.

## Tecnologias

Angular 7, scss, webpack, nodejs, rxjs, API REST

## Gitflow

Se aplica el concepto de gitflow.

![alt text](https://user-images.githubusercontent.com/7549765/36916977-429c7dd0-1e34-11e8-8635-1b569453d0f5.png)

## Equipo de desarrollo

* Yesid Arley Marin Rivera
* John Fredy Orjuela Herrera
* Manuel Leonardo Castro Santana
* Reynaldo Vargas Gaitan

