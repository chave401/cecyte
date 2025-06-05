
document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.getElementById("tit");

  if (titulo) {
    titulo.addEventListener("mousedown", aplicarEstilo);
  }
});

function aplicarEstilo() {
  const titulo = document.getElementById("tit");
  titulo.style.color = "darkred";
  titulo.style.fontSize = "36px";
  titulo.style.backgroundColor = "#f0f0f0";
  titulo.style.fontStyle = "italic";
  titulo.style.border = "2px dashed darkgreen";
  titulo.style.padding = "10px";
}



const correo = document.getElementById("tenerf");

if (correo) {
  correo.addEventListener("contextmenu", mostrarCorreo);
}

function mostrarCorreo(event) {
  event.preventDefault();
  alert("plantel16@cecyteo.edu.mx");
}


//  change 
const nombreInput = document.querySelector('input[name="nombre"]');

if (nombreInput) {
  nombreInput.addEventListener('change', mostrarNombre);
}

function mostrarNombre() {
  alert('¡Has agregado tu nombre!');
}




// Aplicar focus y blur a todos los inputs
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('focus', resaltarInput);
  input.addEventListener('blur', restaurarInput);
});

function resaltarInput(event) {
  event.target.style.backgroundColor = '#FFFACD';
}

function restaurarInput(event) {
  event.target.style.backgroundColor = '';
}



