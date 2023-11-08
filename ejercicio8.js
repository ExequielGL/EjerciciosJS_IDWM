function parOImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
}
  
var numero = parseInt(prompt("Introduzca un numero entero: "));
var resultado = parOImpar(numero);
console.log("El número " + numero + " es " + resultado);