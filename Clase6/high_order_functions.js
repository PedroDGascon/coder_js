const courses = [
    
  {
    "id": 1,
    "name": "JavaScript Básico",
    "instructor": "Carlos Rivera",
    "duration": 10,
    "level": "Beginner"
  },
  {
    "id": 2,
    "name": "Frontend Avanzado con React",
    "instructor": "María López",
    "duration": 20,
    "level": "Advanced"
  },
  {
    "id": 3,
    "name": "Fundamentos de Node.js",
    "instructor": "Luis Fernández",
    "duration": 15,
    "level": "Intermediate"
  },
  {
    "id": 4,
    "name": "Diseño de APIs REST",
    "instructor": "Ana Castillo",
    "duration": 12,
    "level": "Intermediate"
  },
  {
    "id": 5,
    "name": "Testing en JavaScript",
    "instructor": "Javier Morales",
    "duration": 8,
    "level": "Advanced"
  }
];

// forEach - Itera sobre el array y hace algo por cada curso
courses.forEach(course => console.log(course.name));
courses.forEach(course => console.log(course.instructor.toUpperCase()));

// find - buscar el primer elemento que cumpla con una condicion dada

let found = courses.find(course => course.name =='Testing en JavaScript');
if (found != undefined){
    console.log(found);
}else{
    console.log('Curso no encontrado');
}

// filter - crea un nuevo array con todos los elementos que cumplen con una condicion dada
const filteredList = courses.filter(course => course.duration > 12);
if(filteredList.length > 0){
    console.log(filteredList);
}else{
    console.log('No encontramos cursos con esa duracion')
}


// some - busca un elemento que cumpla con una condicion dada y si existe retorna true, sino false

const if_exist = courses.some(course => course.id == 3);
console.log(if_exist);


//map - crea un nuevo array con todos los elementos del array original pero con alguna transformacion

let mapping = courses.map(course => {
    return{
        name: course.name.toUpperCase(),
        instructor: course.instructor,
    }
});

console.log(mapping);

// reduce - obtiene un unico valor tras iterar sobre el array

//ejemplo: quiero sumar la duracion en semana de todos mis cursos

let duration_total = courses.reduce((acumulator, course) => acumulator + course.duration, 0);
console.log('Duracion de todos mis cursos: ' +duration_total+ ' semanas ');

// sort - ordenar arrays de objetos con numeros o strings
// ejemplo: numeros, quiero ordenar mis cursos por duracion ascendente.

console.log('ascendente')
courses.sort((a,b)=> a.duration - b.duration);
console.log(courses);

// ejemplo: numeros, quiero ordenar mis cursos por duracion descendente.
courses.sort((a,b)=> b.duration - a.duration);
console.log(courses);

// strings - alfabeticamente asc
courses.sort((a,b) => a.name.localCompare(b.name));
console.log(courses);