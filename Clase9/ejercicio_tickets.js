const DateTime = luxon.DateTime;
const fechaCreacion = DateTime.now()


const Boton = document.getElementById('enviar')
Boton.addEventListener('click',()=>{
    Swal.fire({
  title: "Ticket Generado",
  text: "Su ticket se ha enviado correctamente con fecha: " + "\n" +fechaCreacion.toLocaleString(DateTime.DATETIME_MED)+"\n",
  icon: "success"
});
});