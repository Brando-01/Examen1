
const botonMenu = document.getElementById("botonMenu");
const menu = document.getElementById("menu");
const botonAgregar = document.getElementById("botonAgregar");
const nuevaOpcion = document.getElementById("nuevaOpcion");


botonMenu.onclick = function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};


botonAgregar.onclick = function() {
    const texto = nuevaOpcion.value;
    if (texto.trim() !== "") {
        var nuevaLista = document.createElement("li");
        nuevaLista.textContent = texto;
        menu.appendChild(nuevaLista);
        nuevaOpcion.value = ""; 
    }
};


