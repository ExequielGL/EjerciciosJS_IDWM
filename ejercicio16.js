function anade() {
    // Crear nuevo elemento de lista
    var nuevoElemento = document.createElement("li");

    // Crear nuevo nodo de texto
    var nuevoTexto = document.createTextNode("Nuevo elemento");

    // Añadir el nodo de texto al elemento de lista
    nuevoElemento.appendChild(nuevoTexto);

    // Obtener la lista
    var lista = document.getElementById("lista");

    // Añadir el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);
}