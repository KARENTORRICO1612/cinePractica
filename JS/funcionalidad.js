

// CODIGO PARA QUE AL HACER CLICK EN LA IMAGEN SE DESPLIEGUE EL MODAL

// Obtener el modal y la imagen
var modal = document.getElementById("miModal");
// var img = document.getElementById("miImagen");
var imgs = document.querySelectorAll('#miImagen') // Nodelist similar (Array)
var modalImg = document.getElementById("img-modal");

imgs.forEach((img) => {
  img.onclick = function() {
    modal.style.display = "block";
    // Actualizar los valores del modal
    modalImg.src = img.src;
  }
})


// Cuando se haga clic en el botón de cerrar, cerrar el modal
function cerrarModal() {
  modal.style.display = "none";
}

// Cuando se haga clic fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// CODIGO MOSTRAR MAS ELEMENTOS AL DAR CLICK EN EL BOTON CARGAR MAS
let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];

    for(var i=currentItem1; i < currentItem1 +4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 +=4;
    if(currentItem1 >= boxes.length){
        loadMoreBtn1.style.display = 'none'
    }
}



//CODIGO PARA MOSTRAR MODAL DE ACEPTAR Y CANCELAR AL HACER CLICK EN EL BOTON COMPRAR
function mostrarMensaje() {
  // Mostrar un mensaje de confirmación
  var resultado = confirm("¿Estás seguro que desea comprar?");

  // Verificar el resultado
  if (resultado) {
      alert("Has seleccionado 'Aceptar'."); // Se muestra si se hace clic en "Aceptar"
  } else {
      alert("Has seleccionado 'Cancelar'."); // Se muestra si se hace clic en "Cancelar"
  }
}

// Asociar la función mostrarMensaje al evento click del botón
document.getElementById("mostrarBtn").addEventListener("click", mostrarMensaje);
