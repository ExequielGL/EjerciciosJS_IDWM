function esPalindromo(cadena) {
    var cadenaMinus = cadena.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var cadenaInversa = cadenaMinus.split('').reverse().join('');
    return limpiarCadena === cadenaInversa;
}
  
var texto = "Anilina";
if (esPalindromo(texto)) {
console.log(texto + " es un palíndromo.");
} else {
console.log(texto + " no es un palíndromo.");
}