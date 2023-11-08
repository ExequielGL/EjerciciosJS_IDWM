// 1. Número de enlaces de la página
var enlaces = document.getElementsByTagName("a");
console.log("Número de enlaces de la página: " + enlaces.length);

// 2. Dirección a la que enlaza el penúltimo enlace
console.log("Dirección a la que enlaza el penúltimo enlace: " + enlaces[enlaces.length - 2].href);

// 3. Número de enlaces que enlazan a http://prueba/
var enlacesAHttpPrueba = document.querySelectorAll('a[href="http://prueba"]');
console.log("Número de enlaces que enlazan a http://prueba: " + enlacesAHttpPrueba.length);

// 4. Número de enlaces del tercer párrafo
var parrafos = document.getElementsByTagName("p");
if (parrafos.length >= 3) {
    var enlacesTercerParrafo = parrafos[2].getElementsByTagName('a');
    console.log("Número de enlaces del tercer párrafo: " + enlacesTercerParrafo.length);
}