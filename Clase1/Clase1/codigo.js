console.log('Hola mundo!');

//VARIABLES
//Declaro una variable llamada nombre
let nombre;
//Asignacion o inicializacion de la variable nombre
nombre = 'Pepe';

//declaro e inicializo la variable apellido
let apellido = 'Gomez';

let direccion = 'Avenida 9 de Julio 1234';

let edad = 56;

//concatenacion de strings + 
console.log('El usuario se llama '+nombre+' y su apellido es '+apellido);

//operadores aritmeticos
let suma = edad + 10;
let resta = edad - 10;
let multiplicacion = edad * 10;
let division = edad / 2;

console.log(suma, resta, multiplicacion, division);

//Entrada de datos a traves de prompt
let pais = prompt("Ingresa tu país");
console.log('El país ingresado es: '+pais);

let anio = parseInt(prompt('Ingresa tu año de nacimiento'));
console.log(anio);
console.log('Su año de nacimiento es '+anio);

//calcula la edad de el usuario en base al año de su nacimiento
const anioActual = 2025;//valor que quedara fijo a lo largo de toda la ejecucion
let edadUsuario = anioActual - anio;
alert('Tu tienes o vas a cumplir '+edadUsuario+ ' años');