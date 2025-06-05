 /*  var arreglo = [];
    arreglo[0] = new Image();
    arreglo[0].src = "/imagenes/FOTO2.jpg";
    arreglo[1] = new Image();
    arreglo[1].src = "/imagenes/FOTO3.jpg";
    arreglo[2] = new Image();
    arreglo[2].src = "/imagenes/FOTO4.jpg";
    arreglo[3] = new Image();
    arreglo[3].src = "/imagenes/FOTO5.jpg";
    arreglo[4] = new Image();
    arreglo[4].src = "/imagenes/FOTO6.jpg";
    arreglo[5] = new Image();
    arreglo[5].src = "/imagenes/FOTO7.jpg";
  */
// Arreglo de objetos tipo Image
var arreglo = new Array();
arreglo[0] = new Image();
arreglo[0].src = "imagenes/FOTO7.jpg";
arreglo[1] = new Image();
arreglo[1].src = "imagenes/FOTO2.jpg";
arreglo[2] = new Image();
arreglo[2].src = "imagenes/FOTO3.jpg";
arreglo[3] = new Image();
arreglo[3].src = "imagenes/FOTO5.jpg";
arreglo[4] = new Image();
arreglo[4].src = "imagenes/FOTO4.jpg";
arreglo[5] = new Image();
arreglo[5].src = "imagenes/FOTO6.jpg";
arreglo[6] = new Image();
arreglo[6].src = "imagenes/FOTO1.jpg";

arreglo[7] = new Image();
arreglo[7].src = "imagenes/FOTO8.jpg";





var indiceActual = 0;
function obtenerIndiceActual() {
  let imgSrc = document.getElementById('imagen').src;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].src === imgSrc || decodeURIComponent(arreglo[i].src) === imgSrc) {
      return i;
    }
  }
  return 0; 
}

function nextImagen() {
  indiceActual = obtenerIndiceActual();
  indiceActual = (indiceActual + 1) % arreglo.length;
  document.getElementById('imagen').src = arreglo[indiceActual].src;
}

function previoImagen() {
  indiceActual = obtenerIndiceActual();
  indiceActual = (indiceActual - 1 + arreglo.length) % arreglo.length;
  document.getElementById('imagen').src = arreglo[indiceActual].src;
}


//aumentar texto

// Obtener todos los elementos que deben activar el efecto
document.addEventListener("DOMContentLoaded", function () {
  const ids = ["tex", "t", "e", "x", "o"];

  ids.forEach(id => {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.addEventListener("mouseover", () => cambiarTamaño(id));
      elemento.addEventListener("mouseout", () => reducirTamaño(id));
    }
  });

  function cambiarTamaño(id) {
    const elemento = document.getElementById(id);
    elemento.style.fontSize = "20px";
  }

  function reducirTamaño(id) {
    const elemento = document.getElementById(id);
    elemento.style.fontSize = "17px";
  }
});





//hacer mas grande la imagen 

const imagen = document.getElementById("calendario");
let zoom = false;

imagen.addEventListener("dblclick", activarZoom);

function activarZoom() {
  if (!zoom) {
    imagen.style.transform = "scale(1.5)";
  } else {
    imagen.style.transform = "scale(1)";
  }
  zoom = !zoom;
}
