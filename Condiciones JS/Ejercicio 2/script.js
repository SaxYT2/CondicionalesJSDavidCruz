// Función para calcular el IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  // Función para clasificar el IMC
  function clasificarIMC(imc) {
    if (imc < 18.5) {
      return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidad";
    }
  }
  
  // Variables de ejemplo
  let peso = 70; // en kilogramos
  let altura = 1.75; // en metros
  
  // Cálculo y clasificación del IMC
  let imc = calcularIMC(peso, altura);
  let clasificacion = clasificarIMC(imc);
  
  // Muestra el resultado en la consola
  console.log("IMC: " + imc.toFixed(2));
  console.log("Clasificación: " + clasificacion);
