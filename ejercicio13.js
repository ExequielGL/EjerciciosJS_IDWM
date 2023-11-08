// --Primer apartado--
var cadena = "Nací el 05/04/1982 en Donostia.";
var regexFecha = /\b\d{2}\/\d{2}\/\d{4}\b/;
var resultado = regexFecha.test(cadena);
console.log(resultado);

// --Segundo apartado--
var email = "ejemplo.de.correo@ejemplo.com";
var regexEmail = /\b[A-Za-z0-9.-]+@[A-Za-z0-9]+\.[A-Za-z]{2,3}\b/;
var resultado = regexEmail.test(email);
console.log(resultado);

// --Tercer apartado--
function escapeHTML(text) {
    var replacements = { "&": "&amp;", "\"": "&quot;", "<": "&lt;", ">": "&gt;" };
    return text.replace(/[&"<>]/g, function(character) {
        return replacements[character];
    });
}

// --Cuarto apartado--
var nombreCompleto = "John Smith";
var regexNombre = /(\w+)\s(\w+)/;
console.log(nombreCompleto.replace(regexNombre, "$2, $1"));

// --Quinto apartado--
var html = "<p>Hola</p><script>console.log('Este es un script.');</script><p>Adiós</p>";
var regexScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
console.log(html.replace(regexScript, ""));