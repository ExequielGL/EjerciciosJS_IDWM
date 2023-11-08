function lanzarDados() {
    return Math.floor(Math.random() * 6) + 1;
}
  
var resultados = Array(13).fill(0);

for (var i = 0; i < 36000; i++) {
    var dado1 = lanzarDados();
    var dado2 = lanzarDados();
    var totalDados = dado1 + dado2;
    resultados[totalDados]++;
}

for (var i = 2; i <= 12; i++) {
    console.log("El número " + i + " apareció " + resultados[i] + " veces.");
}