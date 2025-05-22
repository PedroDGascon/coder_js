//objetos literales
const misAuriculares = {
    marca: 'Sony',
    modelo: 'XR11',
    color: 'rojo',
    precio: 1000,
    disponibilidad: true,
}

console.log(misAuriculares);
//modificar una propiedad o atributo
misAuriculares.precio = 30000;
/* misAuriculares['precio'] = 30000; */

console.log(misAuriculares);

//estudiar funcion constructora y class

class Bicicleta{
    constructor(marca, color, tipo){
        this.marca=marca;
        this.color=color;
        this.tipo=tipo;
    }
}

const bici1=new Bicicleta('Raleigh','azul','mountain');
console.log(bici1);
const bici2=new Bicicleta('Raleigh','rosa','mountain');
const bici3=new Bicicleta('Raleigh','celeste','mountain');
const bici4=new Bicicleta('Raleigh','verde','mountain');
const bici5=new Bicicleta('Raleigh','blanca','mountain');
console.log(bici5);
console.log(bici5.color);

/* -------------------------------------------------------------------- */
//Arrays o listas

const listaDeCompras = ['pollo', 'pan', 'agua', 'esponja', 'shampoo', 'jabon'];
console.log(listaDeCompras);
console.log('La lista de compras tiene: '+listaDeCompras.length+' productos');

console.log('El elemento en la posicion 0 es: '+ listaDeCompras[0]);
listaDeCompras[0]='lechuga';
console.log('El elemento en la posicion 0 es: '+ listaDeCompras[0]);

const listaEdades = [21,34,19,49,30,27];
listaEdades[1]=36;
console.log(listaEdades);

const listaBooleanos = [false, true, true, true, false];

const listaMixta = [1, false, 'hola'];

//recorrer las listas con for
for(let i=0; i<listaDeCompras.length;i++){
    console.log('El prod en la posicion '+i+' es:'+listaDeCompras[i]);
}

//agregar elementos al final del array - push
/* let nuevoProducto = prompt('Ingresa un nuevo producto para las compras'); */
/* listaDeCompras.push(nuevoProducto); */
listaDeCompras.push('yogurt');
console.log(listaDeCompras);

//eliminar elementos al final del array - pop
listaDeCompras.pop();
console.log(listaDeCompras);

//agregar elementos al ppio de la lista - unshift
listaDeCompras.unshift('detergente');
console.log(listaDeCompras);

//eliminar elementos al ppio de la lista - shift
listaDeCompras.shift();
console.log(listaDeCompras);

//eliminar el elemento 'agua' - splice
listaDeCompras.splice(2, 1);
console.log(listaDeCompras);

//generar un string con los elementos del array con un separador - join
let todos = listaDeCompras.join(' - ');
console.log(todos);

//obtener el indice de un elemento en el array - indexOf
let posicionEsponja = listaDeCompras.indexOf('esponja');
console.log(posicionEsponja);

let posicionHarina = listaDeCompras.indexOf('harina');
if(posicionHarina != -1){
    console.log('La harina se encuentra en la pos: '+posicionHarina);
}else{
    console.log('El producto harina no se encuentra en la lista');
}

//saber si un elemento existe dentro del array - includes
let hayJabon = listaDeCompras.includes('jabon');
console.log(hayJabon);

//ordenar un array de strings en forma ascendente - sort()
listaDeCompras.sort();
console.log(listaDeCompras);

//invertir el orden del los elementos - reverse
listaDeCompras.reverse();
console.log(listaDeCompras);

//arrays de objetos
const listaProductos = [
    {
        id:1,
        nombre:'Puzzle',
        cantidadStock: 10
    },
    {
        id:2,
        nombre:'TEG',
        cantidadStock: 5
    },
    {
        id:3,
        nombre:'Lego',
        cantidadStock: 8
    },
    {
        id:4,
        nombre:'Yoyo',
        cantidadStock: 23
    }
];

listaProductos.push({
    id:5,
    nombre:'Carrera de mente',
    cantidadStock: 2
})
console.log(listaProductos);

const listaBicis = [bici1, bici2, bici3, bici4, bici5];
console.log(listaBicis);

//for...of
for(let bici of listaBicis){
    console.log(bici)
}
