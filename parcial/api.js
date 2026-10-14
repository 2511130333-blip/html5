// 1. Inicializar EmailJS con tu Public Key
(function () {
  emailjs.init("otmLCg129kPNfLuz-");
})();

// Referencias a los elementos del DOM
const contactForm = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");
const btnSubmit = document.getElementById("btn-submit");

// 2. Event listener para el envío del formulario
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar la recarga de la página

  // Deshabilitar botón durante el envío
  btnSubmit.disabled = true;
  btnSubmit.innerText = "Enviando...";

  // Limpiar mensajes de estado anteriores
  statusMessage.className = "status-message";
  statusMessage.innerText = "";

  // 3. Credenciales de EmailJS
  const serviceID = "service_990hwpo";
  const templateID = "template_sri5cgl";

  // 4. Enviar datos del formulario a EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      statusMessage.classList.add("success");
      statusMessage.innerText = "¡Correo enviado con éxito! Revisa tu bandeja de entrada.";
      contactForm.reset(); // Limpiar campos del formulario
    })
    .catch((error) => {
      statusMessage.classList.add("error");
      statusMessage.innerText = "Error al enviar el correo. Revisa tu conexión o datos.";
      console.error("Error al enviar el correo:", error);
    })
    .finally(() => {
      // Habilitar nuevamente el botón
      btnSubmit.disabled = false;
      btnSubmit.innerText = "Enviar mensaje";
    });
});