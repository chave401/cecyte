/**


const boton2=document.getElementById("btn2");
boton2.addEventListener("click",obtenerValores);

function obtenerValores(){
	let valor=document.getElementById("texto").value;
	
	//obtener radio
	let radio1="";
	let radio=document.getElementsByName("especialidad");
	for(let i=0; i<=radio.length-1; i++){
		if(radio[i].checked){
			radio1=radio[i].value;
		}
	}
	//obtener el checkbox
	let materia="";
	let casilla=document.getElementById("pensamiento matematico");
	if(casilla.checked){
		materia+=casilla.value;

	}
	let casilla1=document.getElementById("ingles");
	if(casilla1.checked){
		materia+=casilla1.value+ ",";
	}
	let casilla2=document.getElementById("humanidades");
	if(casilla2.checked){
		materia+=casilla2.value;
	}
	let casilla3=document.getElementById("quimica");
	if(casilla3.checked){
		materia+=casilla3.value;
	}
	let casilla4=document.getElementById("lengua y comunicacion");
	if(casilla4.checked){
		materia+=casilla4.value;
	}
	let casilla5=document.getElementById("programacion");
	if(casilla5.checked){
		materia+=casilla5.value;
	}
	let casilla6=document.getElementById("hoteleria");
	if(casilla6.checked){
		materia+=casilla6.value;
	}
	


let valor2=document.getElementById("text").value;
	

document.getElementById("primero").innerHTML="Tu nombre es:"+valor;
document.getElementById("segundo").innerHTML="TU especialidad es:"+radio1;
document.getElementById("tercero").innerHTML="Tus materias favoritas son:"+materia;
document.getElementById("cuarto").innerHTML="Tu profe favorito es:"+valor2;

}
*/
const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", obtenerValores);


function obtenerValores() {
  // Obtener nombre
  let valor = document.getElementById("nom").value;

  // Obtener especialidad
  let radio1 = "";
  let radios = document.getElementsByName("especialidad");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radio1 = radios[i].value;
      break;
    }
  }

  // Obtener materias favoritas
  let materia = "";
  let materiasIds = [
    "matematicas", "ingles", "sociales", "humanidades",
    "quimica", "lengua", "programacion", "hoteleria"
  ];

  materiasIds.forEach(id => {
    let casilla = document.getElementById(id);
    if (casilla.checked) {
      materia += casilla.value + ", ";
    }
  });

  // Obtener profe favorito
  let valor2 = document.getElementById("text").value;

  // Mostrar resultados
  document.getElementById("primero").innerHTML = "Tu nombre es: " + valor;
  document.getElementById("segundo").innerHTML = "Tu especialidad es: " + radio1;
  document.getElementById("tercero").innerHTML = "Tus materias favoritas son: " + materia;
  document.getElementById("cuarto").innerHTML = "Tu profe favorito es: " + valor2;
}



boton2.addEventListener("mouseenter",rotacion);
boton2.addEventListener("mouseleave",rotacion);

function rotacion(boton) {
  boton2.addEventListener("mouseenter", () => {
    boton2.style.transform = "rotate(4deg)";
    boton2.style.transition = "transform 0.3s ease"; // animación suave
  });

  boton2.addEventListener("mouseleave", () => {
    boton2.style.transform = "rotate(0deg)";
  });
}