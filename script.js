console.log("Hola Cladio");
alert("Hola desde scipt.js");
window.onload = function() {
    document.getElementById("miModal").style.display = "block";
};

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}