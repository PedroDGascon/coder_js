/* let edad = 14; */

//CONDICIONAL IF - ELSE
/* if (edad > 17) {
    console.log("Puedes ingresar al bar");
} else {
    console.log("No puede ingresar por ser menor de edad");
}

let equipo = prompt("Ingresa el nombre de tu equipo de futbol favorito"); */
//CONDICIONAL IF-ELSE IF - ELSE
/* if((equipo == 'river') || (equipo == 'River') || (equipo == 'RIVER')){
    console.log('Grande River! ');
}else if(equipo == 'boca'){
    console.log('Grande Boca! ');
}else if(equipo == 'racing'){
    console.log('Grande Racing! ');
}else if(equipo == 'independiente'){
    console.log('Grande Independiente! ');
}else{
    console.log('El equipo ingresado no se encuentra en el sistema ');
} */

//CONDICIONAL SWITCH
/* switch (equipo) {
    case 'river':
        console.log('Grande River! ');
        break;
    case 'boca':
        console.log('Grande Boca! ');
        break;
    case 'racing':
        console.log('Grande Racing! ');
        break;
    case 'independiente':
        console.log('Grande Independiente! ');
        break;
    default:
        console.log('El equipo ingresado no se encuentra en el sistema ');
        break;
} */

//OPERADORES LOGICOS
//diferencia entre == y ===
// == compara por valor 
// === compara por valor y tambien por tipo de dato

// operador de distinto != compara por valor
// operador de estrictamente distinto !== compara por valor y por tipo

// < menor que  > mayor que <= menor o igual que >=mayor o igual que

//OPERADORES RELACIONALES
// && AND - significa y
// || OR - significa o


/* let usuario = prompt('Ingresa tu nombre de usuario');
let contrasenia = prompt("ingresa tu contraseña"); */

//usuario valido : 'pepe' y contraseña valida : '1234'

/* if((usuario == 'pepe') && (contrasenia=='1234')){
    console.log('Bienvenido al sistema, Pepito!');
}else{
    console.log('Usuario y/o contraseña erroneos');
} */

//operador NOT ! - cambia el valor de una booleana por su opuesto

//Ciclos de repeticion o bucles
//FOR - ciclo por conteo - sabemos de antemano cuantas veces necesitamos que se repita un bloque de codigo

/* let numTabla = parseInt(prompt('Ingrese un numero y te dire la tabla de multiplicar del mismo'));
let resultado; */

/* if(isNaN(numTabla)){
    console.log("Numero incorrecto o invalido");
}else{
    for(let i=1; i<=10; i++){
        resultado = numTabla * i;
        console.log(numTabla + ' X '+ i + ' = ' + resultado);
    }
} */
/* for (let i = 1; i <= 10; i++) {
    resultado = numTabla * i;
    console.log(numTabla + ' X ' + i + ' = ' + resultado);
} */


//ciclo WHILE - mientras - ciclo por condicion

/* let opcion = prompt('Selecciona una opcion:\n1-Recibir un saludo\n2-Saber la temperatura\n3-Salir del programa')

while(opcion != '3'){
    if(opcion == '1'){
        alert('Te damos la bienvenida!');
    }
    if(opcion == '2'){
        alert('La temperatura actual es de 20 grados');
    }

    opcion = prompt('Selecciona una opcion:\n1-Recibir un saludo\n2-Saber la temperatura\n3-Salir del programa')
} */


//crear una calculadora sencilla utilizando ciclos y condicionales

let primerNumero;
let segundoNumero;
let resultado;


let operacion = prompt('Ingrese la operacion + - * / (s-salir)');


while (operacion != 's') {
    primerNumero = parseFloat(prompt('Ingrese el primer numero'));
    segundoNumero = parseFloat(prompt('Ingrese el segundo numero'));
    switch (operacion) {
        case '+':
            resultado = primerNumero + segundoNumero;
            console.log('El resultado es: ' + resultado);
            break;
        case '-':
            resultado = primerNumero - segundoNumero;
            console.log('El resultado es: ' + resultado);
            break;
        case '*':
            resultado = primerNumero * segundoNumero;
            console.log('El resultado es: ' + resultado);
            break;
        case '/':
            resultado = primerNumero / segundoNumero;
            console.log('El resultado es: ' + resultado);
            break;
        default:
            console.log('Operador invalido');
    }

    operacion = prompt('Ingrese la operacion + - * / (s-salir)');
}