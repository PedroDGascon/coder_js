let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");

console.log(div.innerHTML);
console.log(parrafo.innerHTML);

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);

/* El método querySelector() es una herramienta poderosa 
en JavaScript que permite seleccionar el primer elemento del DOM que coincida con uno o más selectores CSS especificados. 
.*/ 

//let elemento = document.querySelector('selector-css');

let encabezado = document.querySelector('h1');
//let parrafo = document.querySelector('.texto-destacado');
let elementoEnlace = document.querySelector('a[href="#seccion"]');

/*
querySelector('h1') selecciona el primer elemento <h1> en el DOM.
querySelector('.texto-destacado') selecciona el primer elemento con la clase texto-destacado.
querySelector('a[href="#seccion"]') selecciona el primer enlace con el atributo href que apunta a #seccion.
*/ 

// querySelectorAll()

//let elementos = document.querySelectorAll('selector-css');

let parrafos = document.querySelectorAll('p');
let itemsMenu = document.querySelectorAll('ul.menu li');

//innerHTML permite leer o modificar el contenido HTML interno de un elemento

let contenedor = document.getElementById('contenedor');
contenedor.innerHTML = '<h2> Nuevo Titulo</h2> <p> Nuevo parrafo</p>';

//innerText/textContent permite modificar el texto dentro de un nodo, considera el estilo y el renderizado actual.

let titulo = document.getElementById('titulo');
titulo.innerText = 'Texto Actualizado';

//setAttribute() Se usa para modificar o establecer un nuevo atributo en un elemento.

let enlace = document.querySelector('a');
enlace.setAttribute('href', 'https://www.google.com');

//createElement() Este método permite crear un nuevo elemento en el DOM.

let nuevoDiv = document.createElement('div');
nuevoDiv.innerHTML = '<p> Este es un nuevo div </p>';
document.body.appendChild(nuevoDiv);

// appendChild(): Añade un nodo como el último hijo de un nodo padre.

let lista = document.getElementById('lista');
let nuevoItem = document.createElement('li');
nuevoItem.textContent = 'Nuevo item';
lista.appendChild(nuevoItem);


//insertBefore()Inserta un nodo antes de un nodo hijo específico.

let primerItem = lista.firstChild;
lista.insertBefore(nuevoItem, primerItem);

// removeChild() Este método elimina un nodo hijo de un elemento.

let itemAEliminar = document.getElementById('item');
lista.removeChild(itemAEliminar);

//remove() Elimina directamente el nodo seleccionado

let elemento = document.getElementById('elemento');
elemento.remove();


/*
Conclusión
Dominar la manipulación del DOM es esencial para desarrollar aplicaciones web dinámicas y responsivas. 
Con métodos como innerHTML, createElement(), appendChild(), y remove(), se puede modificar la estructura y el contenido del DOM, 
lo que permite a los desarrolladores crear y modificar contenido en tiempo real, mejorar la interactividad y proporcionar una mejor experiencia de usuario.*/ 

