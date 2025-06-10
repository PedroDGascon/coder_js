const DateTime = luxon.DateTime;
const right_now = DateTime.now();
console.log(right_now.toLocaleString(DateTime.DATETIME_MED)); 

const nodoBotonPrueba = document.getElementById('Prueba')
nodoBotonPrueba.addEventListener('click', ()=> {
    Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
    });
});



/*Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});*/
/* Read more about isConfirmed, isDenied below */
