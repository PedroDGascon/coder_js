class Hamburguesa{
    constructor(nombre,precio,ingredientes,numero_combo){
        this.nombre=nombre;
        this.precio=precio;
        this.ingredientes=ingredientes;
        this.numero_combo=numero_combo
    }
}

const hamburguesas = [];

const hamburguesa_1 =new Hamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1);
const hamburguesa_2 =new Hamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2);
const hamburguesa_3 =new Hamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3);
const hamburguesa_4 =new Hamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso','Aderezo'], 4);
const hamburguesa_5 =new Hamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5);
const hamburguesa_6 =new Hamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6);
const hamburguesa_7 =new Hamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7);
const hamburguesa_8 =new Hamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8);

hamburguesas.push(hamburguesa_1,hamburguesa_2,hamburguesa_3,hamburguesa_4,hamburguesa_5,hamburguesa_6,hamburguesa_7,hamburguesa_8);

console.log(hamburguesas);

const filteredList= hamburguesas.filter(hamburguesas => hamburguesas.precio > 130 )

console.log(filteredList);

/*const hamburguesas_json[
  {
    "id": 1,
    "name": "Krusty Burger",
    "price": 150.00,
    "ingredients": ["Carne", "Queso"]
  },
  {
    "id": 2,
    "name": "Krusty Burger Doble",
    "price": 225.00,
    "ingredients": ["Carne", "Queso", "Panceta"]
  },
  {
    "id": 3,
    "name": "Krusty Pollo",
    "price": 150.00,
    "ingredients": ["Pollo", "Queso"]
  },
  {
    "id": 4,
    "name": "Krusty Mega balde de Pollo",
    "price": 140.00,
    "ingredients": ["Pollo", "Queso", "Aderezo"]
  },
  {
    "id": 5,
    "name": "Super Krusty",
    "price": 150.00,
    "ingredients": ["Carne", "Queso", "huevo"]
  },
  {
    "id": 6,
    "name": "Super Krusty Doble",
    "price": 180.00,
    "ingredients": ["Carne", "Queso", "huevo"]
  },
  {
    "id": 7,
    "name": "Super Krusty Triple",
    "price": 205.00,
    "ingredients": ["Carne", "Queso", "huevo"]
  },
  {
    "id": 8,
    "name": "Krusty Vegan",
    "price": 125.00,
    "ingredients": ["Espinaca", "Soja"]
  }
];

const filteredList= hamburguesas_json.filter(hamburguesa => hamburguesas_json.price)
*/

