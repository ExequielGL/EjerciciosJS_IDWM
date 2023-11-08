// --Mouse
function mostrarPosicion(evento) {
    // Posición del ratón respecto del navegador
    var posX = evento.clientX;
    var posY = evento.clientY;
  
    // Posición del ratón respecto de la página
    var docX = evento.pageX;
    var docY = evento.pageY;
  
    // Obtiene el elemento <div> con el id 'raton'
    var divRaton = document.querySelector('#raton div');
  
    // Actualiza el contenido del <div>
    divRaton.innerHTML = '<br>Navegador [' + posX + ', ' + posY + '] <br><br>Página [' + docX + ', ' + docY + ']';

    // Cambia el color de fondo a blanco
    document.getElementById('raton').style.backgroundColor = '#FFFFFF';
    
}

// --Mouse Click
function cambiarColorFondo(evento) {
    // Cambia el color de fondo a amarillo
    document.getElementById('raton').style.backgroundColor = '#FFFFCC';
}

// --Teclado
function mostrarInformacion(evento) {
    // Caracter de la tecla pulsada
    var caracter = evento.key;

    // Código de la tecla pulsada
    var codigo = evento.keyCode;

    // Obtiene el elemento <div> con el id 'teclado'
    var divTeclado = document.querySelector('#teclado div');

    // Actualiza el contenido del <div>
    divTeclado.innerHTML = '<br>Caracter [' + caracter + '] <br><br> Código [' + codigo + ']';

    // Cambia el color de fondo a azul
    document.getElementById('teclado').style.backgroundColor = '#CCE6FF';
}

// Añade el controlador del evento 'keydown' a la ventana
window.addEventListener('keydown', mostrarInformacion);
// Añade el controlador del evento 'mousemove' a la ventana
window.addEventListener('mousemove', mostrarPosicion);
// Añade el controlador del evento 'click' a la ventana
window.addEventListener('click', cambiarColorFondo);
  