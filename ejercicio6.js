var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = parseInt(prompt("Introducir los numeros del DNI sin la letra: "));
var letraDNI = prompt("Introducir la letra del DNI: ");

// Comprobar si el número es válido
if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("El número proporcionado no es válido");
} else {
    // Calcular la letra del DNI
    var letraCalc = letras[numeroDNI % 23];

    // Comparar la letra calculada con la letra proporcionada por el usuario
    if (letraCalc !== letraDNI) {
        alert("La letra que se ha indicado no es correcta. Debería ser " + letraCalc);
    } else {
        alert("El número y la letra de DNI son correctos");
    }
}