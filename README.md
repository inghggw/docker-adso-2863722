# Docker Adso 2863722

Dockerizar una app con node js

## Prerrequisitos

Asegúrate de tener Docker instalado en tu sistema. Puedes descargarlo e instalarlo desde [el sitio web oficial de Docker](https://www.docker.com/get-started).

## Construcción de la Imagen Docker (Build)

Para construir la imagen Docker, navega hasta el directorio raíz de este proyecto (donde se encuentra el `Dockerfile`) y ejecuta el siguiente comando en tu terminal:

```bash
docker build -t nombre-de-tu-imagen .
```

Explicación del comando:

docker build: Es el comando base para construir una imagen Docker a partir de un Dockerfile.
-t nombre-de-tu-imagen: La opción -t (o --tag) te permite etiquetar la imagen. Reemplaza nombre-de-tu-imagen con un nombre descriptivo para tu imagen (por ejemplo, mi-aplicacion-web:latest o usuario/mi-repo:v1.0).
.: Este punto indica que el contexto de construcción (los archivos necesarios para construir la imagen, incluyendo el Dockerfile) se encuentra en el directorio actual.
Ejecución del Contenedor Docker (Run)
Una vez que la imagen ha sido construida exitosamente, puedes ejecutar un contenedor a partir de ella usando el siguiente comando:

```bash
docker run -p puerto-host:puerto-contenedor nombre-de-tu-imagen
```

Explicación del comando:

docker run: Es el comando base para crear y ejecutar un nuevo contenedor a partir de una imagen.
-p puerto-host:puerto-contenedor: (Opcional pero común) La opción -p (o --publish) mapea un puerto de tu máquina host al puerto expuesto por el contenedor.
Reemplaza puerto-host con el puerto que quieres usar en tu máquina para acceder a la aplicación (ej. 8080).
Reemplaza puerto-contenedor con el puerto que la aplicación dentro del contenedor está escuchando (ej. 3000 si es una app Node.js, 80 para un servidor web, etc.). Este puerto debe coincidir con el que se expone en el Dockerfile (usando la instrucción EXPOSE).
nombre-de-tu-imagen: Es el nombre (y opcionalmente la etiqueta) de la imagen que construiste en el paso anterior.
Ejemplo:

Si tu aplicación dentro del contenedor escucha en el puerto 3000 y quieres acceder a ella desde tu navegador en http://localhost:8080, el comando sería:

```bash
docker run -p 8080:3000 nombre-de-tu-imagen
```

Opciones Adicionales Comunes para docker run
Ejecutar en segundo plano (detached mode):

```bash
docker run -d -p puerto-host:puerto-contenedor nombre-de-tu-imagen
```
La opción -d ejecuta el contenedor en segundo plano y muestra el ID del contenedor.

Asignar un nombre al contenedor:

```bash
docker run --name mi-contenedor-app -p puerto-host:puerto-contenedor nombre-de-tu-imagen
```bash

La opción --name te permite darle un nombre fácil de recordar a tu contenedor.

Montar volúmenes: Para persistir datos o compartir archivos entre el host y el contenedor.

```bash
docker run -v /ruta/en/host:/ruta/en/contenedor -p puerto-host:puerto-contenedor nombre-de-tu-imagen
```

Pasar variables de entorno:

```bash
docker run -e MI_VARIABLE=valor -p puerto-host:puerto-contenedor nombre-de-tu-imagen
```

Parar un Contenedor
Para listar los contenedores en ejecución:

```bash
docker ps
```

Para parar un contenedor específico (usa el ID del contenedor o su nombre):

```bash
docker stop <ID_DEL_CONTENEDOR_O_NOMBRE>
```

Eliminar un Contenedor
Para eliminar un contenedor (debe estar parado primero):

```bash
docker rm <ID_DEL_CONTENEDOR_O_NOMBRE>
```

Eliminar una Imagen
Para eliminar una imagen Docker de tu sistema local:

```bash
docker rmi nombre-de-tu-imagen
```
