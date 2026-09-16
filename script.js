console.log("Hola Cladio");
alert("Hola desde scipt.js");
// Muestra el modal al cargar la página web
window.onload = function() {
    document.getElementById("miModal").style.display = "block";
};

// Oculta el modal con la X o el botón Entendido
function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}