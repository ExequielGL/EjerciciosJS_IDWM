document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("registro");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío del formulario por defecto

        // Validar el formulario completo
        var nombre = document.getElementById("registro_nombre");
        var apellido = document.getElementById("registro_apellido");
        var email = document.getElementById("registro_email");
        var password = document.getElementById("registro_password");
        var comentarios = document.getElementById("registro_comentarios");
        var condiciones = document.getElementById("registro_condiciones");

        if (nombre.value === "") {
            alert("El campo Nombre es obligatorio");
            return;
        }

        if (apellido.value === "") {
            alert("El campo apellido es obligatorio");
            return;
        }

        if (email.value === "") {
            alert("El campo email es obligatorio");
            return;
        } else {
            // Validar dirección de correo electrónico
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email.value)) {
                alert("El campo email debe ser una dirección de correo válida");
                return;
            }
        }

        if (password.value.length < 8 || !/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value) || !/\d/.test(password.value)) {
            alert("El campo Password debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un dígito");
            return;
        }

        if (comentarios.value.length > 100) {
            alert("El campo comentarios no debe exceder los 100 caracteres");
            return;
        }

        if (!condiciones.checked) {
            alert("Debes aceptar las condiciones del servicio");
            return;
        }

        // Si pasa todas las validaciones, puedes enviar el formulario
        form.submit();
    });
});