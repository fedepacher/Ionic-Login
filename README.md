
Ionic Frontend
==============


Este proyecto es una aplicación frontend realizada en Ionic. Se trata de un sistea que obtiene del backend una lista de dispositivos a controlar. La aplicación backend es la encargada de obtener datos almacenados en la base de datos con el fin de cumplir las pautas de trabajo de fin de curso de la materia Desarrollo de Aplicaciones Multiplataforma.

## Comenzando 🚀

Esta sección es una guía con los pasos escenciales para que puedas poner en marcha la aplicación.

<details><summary><b>Mira los pasos necesarios</b></summary><br>


### Descargar el código

Para descargar el código, lo más conveniente es que realices un `fork` de este proyecto a tu cuenta personal haciendo click en [este link](https://github.com/fedepacher/Ionic-Login/tree/develop_daw/fork). Una vez que ya tengas el fork a tu cuenta, descargalo con este comando (acordate de poner tu usuario en el link):

```
git clone https://github.com/USER/APIRest-DAM.git
```

> En caso que no tengas una cuenta en Github podes clonar directamente este repo.


### Instalar las dependencias

Para correr este proyecto es necesario que instales los modulos de `Ionic`.

Debes correr el siguiente comando dentro de la carpeta Ionic-Login.

$ ng add @ionic/angular 

Se instalaran todos los modulos que se utilizaron para realizar este trabajo.

### Ejecutar la aplicación

Para ejecutar la aplicación tenes que correr el comando `ionic serve` desde la raíz del proyecto para verlo es su version web. De lo contrario podes correr el comando `ionic serve --lab` para poder verlo como un dispositivo movil y web.

En el caso de que no se abra automaticamente el servicio web, lo podes accededer desde [localhost:8100/](http://localhost:8100/).
En el caso que se este ejecutando como una aplicacion para dispositivos moviles lo podes accededer desde [localhost:8200/](http://localhost:8200/).


</details>


## Detalles principales 🔍

En esta sección vas a encontrar las características más relevantes del proyecto.

<details><summary><b>Mira los detalles más importantes de la aplicación</b></summary><br>
<br>

### Arquitectura de la aplicación

La aplicacion consiste en tomar de una base de datos una lista de sensores y mostrarlo en pantalla con su respectivo nombre y ubicacion.

![architecture](src/assets/images/main_page.png)

Cada dispositivo al ser presionado abre una pantalla con informacion propia a cada sensor. 

![architecture](src/assets/images/device_page.png)

En esta pantalla se mustra el valor que posee el sensor, un boton que permite apertura y cierre de una valvula, un boton que muestra toda la informacion de mediciones que lleva registrado el sensor seleccionado y por ultimo un boton que muestra todos los logs de riego que se han ido cargando en la base de datos de cada sensor.

![architecture](src/assets/images/messure_page.png)


</details>


## Autor 👥

* **[Federico Pacher](https://github.com/fedepacher)**: Creación, puesta en marcha y mantenimiento del proyecto.

## Licencia 📄

Este proyecto está bajo Licencia ([MIT](https://choosealicense.com/licenses/mit/)). Podés ver el archivo [LICENSE.md](LICENSE.md) para más detalles sobre el uso de este material.
