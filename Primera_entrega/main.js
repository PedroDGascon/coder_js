console.log('Prueba Conex');

alert('Bienvenido al primer simulador, te solicitare algunos datos para comenzar');

/* ask_for_ticket es una funcion que permite que el usuario ingrese la cantidad de entradas que desea, la misma valida que el valor ingresado 
sea un numero y que sea mayor a 0 */

let ask_for_tickets = function(){

    let ticket = parseInt(prompt("Ingrese la cantidad de entradas"));
    
    while (isNaN(ticket) || ticket <= 0){
    console.log('Error, un numero valido mayor que 0.');
    ticket = parseInt(prompt("Ingrese la cantidad de entradas nuevamente"));
    }

    return ticket;
}

/* data_request Es una funcion creada para obtener datos basicos del usuario que podemos usar luego, por ahora la unica variable comentada es la de  "password" ya que actualmente
no tendria uso con los conocimientos que tenemos ahora*/

data_request = function(){

    let username = prompt('Ingresa tu nombre');
    let email = prompt('Ingresa tu correo');
    //let password = prompt('Ingresa tu password');
    let age = parseInt(prompt('Ingresa tu edad'));

    if(age < 18){
        alert('No se puede vender entradas a un menor de edad');
    }else{
        let ticket = ask_for_tickets();

        alert("Gracias, "+ username +". Tus entradas han sido registradas. Revisa tu correo "+ email)

        let checkout_confirmation = confirm("Deseas ver el resumen de tu compra en consola?");
    
        if(checkout_confirmation){
            console.log("Compraste " +ticket+ " entradas, a nombre de "+ username +" y llegaron a tu correo " + email);
            }
    }
}

//data_request();

/* user_wallet cumple la funcion de una billetera virtual que se debe cargar primero antes de utilizar y ademas cuando antes de realizar la compra valida dicho dinero en billetera
antes contra los ticket con su precio.*/

let user_wallet = function(){

    let ticket =ask_for_tickets()
    const precioTicket = 5000;

    let money_in_wallet = parseFloat(prompt("Por favor agregue la cantidad de dinero necesaria para la compra de sus entradas recuerde que el valor es de $5000"));
    let purchase = money_in_wallet >= ticket * precioTicket;

    if(purchase){
        let saldo_restante = money_in_wallet - (ticket * precioTicket);
        alert("Compra realizada con éxito. Tu saldo restante es: $" + saldo_restante);
        return ticket
    }else{
        alert("No tienes suficiente dinero para comprar " + ticket + " entradas.");
    }
}

//user_wallet();



