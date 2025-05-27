const nodoTitulo = document.getElementById('titulo');
const nodoPie = document.getElementById('pie');
console.log(nodoTitulo);
//let nombreUsuario = prompt('Ingresa tu nombre');
nodoTitulo.innerText = 'Bienvenid@s a DOM ';//modificar el texto interno

console.dir(nodoTitulo);

//modificar el css del nodo
nodoTitulo.style.color = 'red';
nodoTitulo.style.backgroundColor = 'grey';
nodoTitulo.style.fontFamily = 'monospace';

//modificamos el contenedor footer
// Si agregan un "+" al "=" concatenan el texto existente con el nuevo que se agrega por javascript
console.log(nodoPie.innerHTML);
nodoPie.innerHTML += '<button class="btn">Eliminar cards de automoviles</button>';

//querySelector similar al getElement
//const nodoTitulo = document.querySelector('#titulo');

const listaPaises = document.getElementsByTagName('li');
console.log(listaPaises);

listaPaises[2].innerText = 'Bolivia';
listaPaises[2].style.color = 'green';

for (const pais of listaPaises) {
    console.log(pais.innerText);
}

//forEach no me deja iterar sobre HTMLCollection

for (let i = 0; i < listaPaises.length; i++) {
    console.log(listaPaises[i].innerText);
}

//tomar nodos por nombre de class
const nodosBotones = document.getElementsByClassName('btn');

for (const boton of nodosBotones) {
    boton.style.width = '120px';
    boton.style.backgroundColor = 'yellow';
    boton.style.fontFamily = 'Verdana';
}

//segunda parte
const listaAutos = [
    {
        marca: 'Audi',
        modelo: 'A3'
    },
    {
        marca: 'Mercedes',
        modelo: 'C63'
    },
    {
        marca: 'BMW',
        modelo: 'X5'
    },
    {
        marca: 'VW',
        modelo: 'Amarok'
    },
];

const seccionAutomoviles = document.getElementById('automoviles');

function renderizarAutos(){
    listaAutos.forEach(auto => seccionAutomoviles.innerHTML += `
        <div class='card'>
            <h3>${auto.marca}</h3>
            <p>${auto.modelo}</p>
        </div>
        `);
}

//renderizarAutos();

//eventos de tipo click
//3 maneras de trabajar con eventos

// 1) utilizando el metodo .addEventListener()

nodosBotones[0].addEventListener('click', ()=>{
    renderizarAutos();
});

nodosBotones[1].addEventListener('click', ()=>{
    seccionAutomoviles.innerHTML = '';
});

// 2) utilizando la propiedad .onclick
nodosBotones[2].onclick = () => {
    alert('Mostrando un alert!');
}

// 3) directamente agregar el evento en el html
function activarDesdeHtml(){
    alert('Activando desde HTML 🎉');
}


