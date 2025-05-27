let boton = document.getElementById('boton');

boton.addEventListener("click", function(){
    alert('El boton fue disparado');
})

let input = document.getElementById('input');
input.addEventListener("input",function(){

    console.log('El usuario escribio: '+ this.value);
});

let usuario = document.getElementById('select');
usuario.addEventListener("change",function(){
    console.log('El usuario selecciono la opcion: '+this.value);
})


/*
Uso de Plantillas Literales
Las plantillas literales, introducidas en ES6, son una característica poderosa en JavaScript que permite la creación de cadenas de 
texto más dinámicas y flexibles. Utilizando plantillas literales, es posible inyectar variables, 
expresiones complejas e incluso estructuras HTML directamente en el DOM, 
simplificando así la manipulación del contenido dinámico en una página web.

¿Qué son las plantillas literales?
Las plantillas literales se definen utilizando comillas invertidas (`) en lugar de las comillas simples o dobles tradicionales.
 Esto permite incluir variables y expresiones dentro de la cadena utilizando 
 la sintaxis ${expresion}. Además, las plantillas literales permiten la creación de cadenas de múltiples líneas 
 sin necesidad de concatenación o caracteres especiales.

Inyección de Variables y Expresiones en el DOM
Uno de los usos más comunes de las plantillas literales es la generación dinámica de contenido HTML que se puede inyectar en el DOM.
 A través del método innerHTML, es posible utilizar plantillas literales para construir y actualizar 
 la estructura HTML de un elemento directamente desde JavaScript.
*/

/*const nombre = "Juan";
const edad = 30;

const contenedor = document.getElementById('info');

contenedor.innerHTML = `
  <h2>Información del Usuario</h2>
  <p>Nombre: ${nombre}</p>
  <p>Edad: ${edad}</p>
`;*/

/*En este ejemplo, se utiliza una plantilla literal para crear un bloque de HTML que incluye variables JavaScript (nombre y edad). 
Este bloque de HTML se inyecta en un contenedor del DOM con el id info. 
La ventaja de esta técnica es que permite combinar fácilmente texto estático con valores dinámicos. */

/*
Incluir Expresiones Complejas
Además de inyectar simples variables, las plantillas literales permiten incluir expresiones más complejas directamente en la cadena. 
Esto es útil cuando se necesita realizar cálculos o lógica antes de mostrar el contenido en el DOM.
*/

/*const productos = [
  { nombre: "Arroz", precio: 125 },
  { nombre: "Fideos", precio: 70 },
  { nombre: "Pan", precio: 50 }
];

const contenedor = document.getElementById('productos');

contenedor.innerHTML = `
  <h2>Lista de Productos</h2>
  <ul>
    ${productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('')}
  </ul>
`;*/


/*
En este caso, se utiliza una plantilla literal para construir una lista HTML (<ul>) que muestra cada producto en un <li>. 
La expresión ${productos.map(...).join('')} recorre el array productos y genera un string HTML para cada elemento, 
que luego se inyecta en el DOM.
*/