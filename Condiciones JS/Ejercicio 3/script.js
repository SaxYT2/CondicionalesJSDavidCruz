// Generar un número secreto entre 1 y 100
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;

  // Función para jugar a adivinar el número
  function adivinarNumero(suposicion) {
    if (suposicion < numeroSecreto) {
      return "El número secreto es mayor.";
    } else if (suposicion > numeroSecreto) {
      return "El número secreto es menor.";
    } else {
      return "¡Felicidades! Has adivinado el número.";
    }
  }
  
  // Variables de ejemplo
  let suposicion = 50; // Cambia este valor para probar
  
  // Mostrar la pista en la consola
  console.log(adivinarNumero(suposicion));