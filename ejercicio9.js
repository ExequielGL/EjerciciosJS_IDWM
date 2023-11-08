function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena solo contiene mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena solo contiene minúsculas.";
    } else {
      return "La cadena contiene tanto mayúsculas como minúsculas.";
    }
}
  
var texto = prompt("Ingrese una cadena de texto: ")
var resultado = analizarCadena(texto);
console.log(resultado);