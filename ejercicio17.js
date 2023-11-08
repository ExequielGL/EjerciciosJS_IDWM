// Obtén todos los enlaces
var enlaces = document.querySelectorAll('a');

// Añade un controlador de eventos de clic a cada enlace
enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Obtén la sección relacionada (el elemento <p> anterior al enlace)
    var seccion = this.previousElementSibling;
    
    // Comprueba si la sección está oculta
    if (seccion.style.display === 'none') {
      // Si la sección está oculta, muéstrala
      seccion.style.display = 'block';
    } else {
      // Si la sección está visible, ocúltala
      seccion.style.display = 'none';
    }
  });
});