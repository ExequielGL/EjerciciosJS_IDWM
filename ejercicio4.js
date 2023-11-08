//Array proporcionado
var valores = [true, 5, false, "hola", "adios", 2];

// ---Primer apartado---

//Buscamos los elementos de texto
var elementosTexto = valores.filter(function (element) {
    return typeof element === 'string';
});

//Los comparamos
if (elementosTexto[0].length > elementosTexto[1].length) {
    console.log(elementosTexto[0] + " es mayor que " + elementosTexto[1] + ".");
} else if (elementosTexto[1].length > elementosTexto[0].length) {
    console.log(elementosTexto[1] + " es mayor que " + elementosTexto[0] + ".");
} else {
    console.log("Ambos textos tienen la misma longitud.");
}

// ---Segundo apartado---

//Buscamos los elementos booleanos
var elementosBooleanos = valores.filter(function (element) {
    return typeof element === 'boolean';
});

// Obtenemos un resultado false
var resultado = elementosBooleanos[0] && elementosBooleanos[1]; // true && false = false
console.log(resultado)

// Obtenemos un resultado true
resultado = elementosBooleanos[0] || elementosBooleanos[1]; // true || false = true
console.log(resultado)

// ---Tercer apartado---

//Buscamos los elementos numericos
var elementosNumericos = valores.filter(function (element) {
    return typeof element === 'number';
});

//Calculamos
var suma = elementosNumericos[0] + elementosNumericos[1];
var resta = elementosNumericos[0] - elementosNumericos[1];
var division = elementosNumericos[0] / elementosNumericos[1];
var multiplicacion = elementosNumericos[0] * elementosNumericos[1];
var modulo = elementosNumericos[0] % elementosNumericos[1];

//Mostramos por consola
console.log("El resultado de la suma es: " + suma);
console.log("El resultado de la resta es: " + resta);
console.log("El resultado de la division es: " + division);
console.log("El resultado de la multiplicación es: " + multiplicacion);
console.log("El resultado del módulo es: " + modulo);