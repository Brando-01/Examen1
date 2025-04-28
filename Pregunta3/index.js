document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (nombre !== "" && edad !== "") {
        mensaje.textContent = "Se guardó con éxito.";
        mensaje.className = "mensaje exito";
    } else {
        mensaje.textContent = "Error, debe llenar todos los campos.";
        mensaje.className = "mensaje error";
    }
});
