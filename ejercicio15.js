function muestra() {
    // Obtén el elemento del contenido y el enlace
    var contenido = document.querySelector('.adicional');
    var enlace = document.querySelector('.enlace');
  
    // Muestra el contenido y oculta el enlace
    contenido.classList.remove('oculto');
    enlace.style.display = 'none';
}