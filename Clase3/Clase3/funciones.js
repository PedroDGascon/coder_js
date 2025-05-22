/* function mostrarBienvenida(){
    console.log('Bienvenido usuario');
    }
    
    mostrarBienvenida();
    
    if(true){
        mostrarBienvenida();
        }
        
        for(let i=1; i<4; i++){
            mostrarBienvenida();
            } */
function sumar(num1, num2) {
    //variable local
    let suma = num1 + num2;
    console.log(suma);
    return suma;
}
//variable global
/* let resultadoSuma; */
/* resultadoSuma=sumar(3,1);
resultadoSuma=sumar(67,9);
resultadoSuma=sumar(-8,4);
resultadoSuma=sumar(1,1); */

/* let primerPrecio = parseFloat(prompt("Ingresa el primer precio para sumar"));// 1000
let segundoPrecio = parseFloat(prompt("Ingresa el segundo precio para sumar"));// 2000

resultadoSuma = sumar(primerPrecio, segundoPrecio); *///sumar(1000, 2000);

/* ------------------------------------------------------- */

/* function calcularIva(precio, iva){
    let resultado = precio * (iva/100);
    console.log('El IVA por $'+precio+' es de $'+resultado);
}

calcularIva(resultadoSuma,21); */

//funcion anonima
let multiplica = function (primerNum, segundoNum) { return primerNum * segundoNum };
console.log(multiplica(3, 2));

let mensaje = function (frase) { return 'El mensaje es: ' + frase };

/* function mostrarMensaje(frase){
    return 'EL mensaje: '+frase;
}

let mensajeCompleto = mostrarMensaje('Hola a todos');
console.log(mensajeCompleto); */

console.log(mensaje('Hola JavaScript 😜'));
console.log(mensaje('Son las 10 de la noche 🤗'));

//funciones flecha (arrow functions)
let resta = (num1, num2) => num1 - num2;
console.log(resta(10, 7));

//ejercicio utilizando una arrow function, calcula un descuento sobre un precio dado.
let valorDescuento = (precio, descuento) => precio * (descuento / 100);
console.log(valorDescuento(2000, 10));

//hoisting
