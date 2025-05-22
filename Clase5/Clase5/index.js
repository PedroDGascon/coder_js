/* class Persona{
    constructor(nombre, apellido, ciudad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
    }
    //metodo para los objetos Persona
    hablar(){
        alert('Buenas noches, soy '+this.nombre+' '+this.apellido);
    }
}

const persona1 = new Persona('Juliana', 'Perez', 'Monterrey');
console.log(persona1);
persona1.hablar();

const persona2 = new Persona('Oscar', 'Martinez', 'Buenos Aires');
persona2.hablar();

//funcion constructora
function Automovil(marca, modelo, color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    //metodos para los objetos Automovil
    this.acelerar = function(){
        alert('Estoy acelerando ...');
    }
}

const automovil1 = new Automovil('VW', 'Fox', 'gris');
console.log(automovil1);
automovil1.acelerar(); */

let listaColores = ['rojo', 'azul', 'verde'];
listaColores.push('gris');

//localStorage - setItem
//localStorage.setItem('usuario','Neo2034');
//localStorage.setItem('edad', 30);
//localStorage.setItem('quiereEnvioADomicilio', true);

//sessionStorage - setItem
//sessionStorage.setItem('mode', 'dark');

//obtener los datos que estan guardados en el storage - getItem
let usuarioActivo = localStorage.getItem('usuario');
if(usuarioActivo != null){
    alert('Bienvenid@ de nuevo, '+usuarioActivo);
}else{
    alert('Bienvenido');
}

let edadUsuario = parseInt(localStorage.getItem('edad'));
console.log(edadUsuario);

let preferenciaEnvio = Boolean(localStorage.getItem('quiereEnvioADomicilio'));
console.log(preferenciaEnvio);

//de que tipo es un dato - typeof
console.log(typeof(preferenciaEnvio));

//guardar datos mas complejos en el storage
localStorage.setItem('colores', listaColores);

let coloresGuardados = (localStorage.getItem('colores')).split(',');
console.log(coloresGuardados);

//guardar un array de objetos en el storage
let listaAlumnos = [
    {
        dni:'45678987',
        nombre:'Juancito'
    },
    {
        dni:'47111987',
        nombre:'Marianita'
    },
    {
        dni:'49008009',
        nombre:'Pepito'
    }
];

//localStorage.setItem('alumnos', JSON.stringify(listaAlumnos));

let alumnosGuardados = JSON.parse(localStorage.getItem('alumnos'));
console.log(alumnosGuardados);

//eliminar claves del storage
localStorage.removeItem('colores');