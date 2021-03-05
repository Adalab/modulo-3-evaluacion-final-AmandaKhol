# <img src="./public/favicon.jpg" width="50"/> **Módulo 3 - Evaluación final - REACT**

## **Descripción:**

La página web presenta un listado de 20 personajes de _Rick and Morty_, obtenidos mediante la llamada a la API [Rick and Morty Api](https://rickandmortyapi.com/documentation/#get-all-characters). Los personajes se pueden filtrar por su nombre.

La página tendrá que estar desarrollada principalmente en React

## **Estructura y funcionamiento:**

La promero que se visualiza al entrar en esta SPA (_Single Page Application_) es la cabecera junto con los campos de búsqueda y la lista de los 20 personajes devueltos por la API de _Rick and Morty_. Desde esta página podemos filtrar por nombre o por especie, alterando la visualización de los personajes por aquellos que cumplan con las condiciones establecidas.

Al clickar sobre un personaje,se desplegará una segunda página dónde podremos ver más detalles del personaje seleccionado así como un botón de _Volver_ que nos llevará a la página inicial manteniéndose el estado de los filtros anteriormente seleccionados.

## **Herramientas utilizadas**:

- **Maquetación:** HTML, SASS.
- **Interactividad:** JavaScript (ES6) y React.
- **Gestión de enlaces:** React Router.
- **Comprobación de tipos**: PropTypes

## **Bonus**

Bonus propuestos implementados:

- Mostrar especie y si un personaje está muerto con un icono.
- Sistema de GRID para el maquetado del listado de personajes.
- Página responsive tanto para pantallas pequeñas como grandes.
- Al refrescar el navegador en la visualización detallada del personaje, debe volver a mostrar el detalle del personaje.
- El listado de personajes está ordenado alfabéticamente.
- Además del filtro por nombre, se ha incluído el filtro por especie.

## **Páginas de Error**

En la página se han incluído las siguientes páginas de error:

- La página solicitada no existe.
- El personaje buscado no existe (url de detalle no válida).
- No hay ningún personaje que coincida con la búsqueda (no se han encontrado personajes que cumplan con los filtros marcados por el usuario).

## **Pasos a seguir para arrancar la web en local**

1. Clona este repositorio
2. Realizar la instalación de las dependencias.
3. Por último, ejecuta el siguiente comando para proceder a la visualización:

```bash
npm start
```

Se abrirá una ventana del explorador y ya podrás usar la aplicación.
