// Solicitar un número entero
var numero = parseInt(prompt("Introducir un número entero para calcular su factorial: "));
var factorial = 1;

// Comprobar si el número es un entero positivo
if (numero >= 0) {
  // Calcular el factorial utilizando un bucle for
  for (var i = 1; i <= numero; i++) {
    factorial *= i;
  }

  console.log("El factorial de " + numero + " es " + factorial);
} else {
  console.log("El número no es un entero positivo. Por favor, ingresa un número válido.");
}