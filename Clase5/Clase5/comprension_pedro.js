class Ticket{
    constructor(actividad,lugar,precio){
        this.actividad = actividad;
        this.lugar = lugar;
        this.precio = precio;
    }
}

// 1 Forma de de crear objetos

const ticket_karol = new Ticket('Concierto Karol G', 'Estadio Nacional', 10000);
console.log(ticket_karol);