// Función para mostrar la zona de la pantalla donde se ha pulsado el ratón
function mostrarZonaPulsada(evento) {
    // Obtiene el tamaño de la ventana del navegador
    var tamano = tamanoVentanaNavegador();

    // Obtiene las coordenadas de la pulsación
    var x = evento.clientX;
    var y = evento.clientY;

    // Determina la zona de la pulsación
    var zona = '';
    if (x < tamano[0] / 2) {
        zona += 'izquierda ';
    } else {
        zona += 'derecha ';
    }
    if (y < tamano[1] / 2) {
        zona += 'arriba';
    } else {
        zona += 'abajo';
    }

    // Informa al usuario
    document.querySelector('.posicion').textContent = 'Has pulsado en la zona ' + zona;
}

// Añade el controlador del evento 'click' a la ventana
window.addEventListener('click', mostrarZonaPulsada);

// Ejercicio 20
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

mensaje.addEventListener("input", actualizarContador);

function actualizarContador() {
    const caracteresMax = parseInt(mensaje.getAttribute("maxlength"));
    const caracteresRestantes = caracteresMax - mensaje.value.length;
    contador.textContent = `Caracteres restantes: ${caracteresRestantes}`;
}

mensaje.addEventListener("keydown", function (e) {
    const teclasPermitidas = [8, 46, 37, 39]; // codigos de las teclas: "Backspace, Supr, flecha izquierda, flecha derecha"
    if (teclasPermitidas.indexOf(e.keyCode) === -1 && mensaje.value.length >= mensaje.maxLength) {
        e.preventDefault();
    }
});