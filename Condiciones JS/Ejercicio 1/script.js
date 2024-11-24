// Obtiene la hora actual
let ahora = new Date();
let hora = ahora.getHours();

// Función para determinar el saludo basado en la hora del día
function obtenerSaludo(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

// Muestra el saludo en la consola
console.log(obtenerSaludo(hora));
