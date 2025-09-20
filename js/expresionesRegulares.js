// Función para mostrar mensajes de validación con ✔ o ❌
function setValidationMessage(elementId, isValid, successMsg, errorMsg) {
  let el = document.getElementById(elementId);
  if (isValid) {
    el.textContent = "✔ " + successMsg;
    el.classList.add("valid");
    el.classList.remove("invalid");
  } else {
    el.textContent = "❌ " + errorMsg;
    el.classList.add("invalid");
    el.classList.remove("valid");
  }
}

// Evento al enviar el formulario
document.getElementById("regexForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita recargar la página

  // Captura de valores de los inputs
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  // Expresiones regulares
  let emailRegex = /^\S+@\S+\.\S+$/; 
  // Correo: cualquier texto seguido de @, dominio y extensión

  let phoneRegex = /^\d{4}-\d{4}$/; 
  // Teléfono: formato salvadoreño 2222-2222

  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  // Contraseña: al menos 8 caracteres, con letra, número y símbolo

  // Validaciones de cada campo
  setValidationMessage("emailError", emailRegex.test(email), "Válido", "Formato incorrecto");
  setValidationMessage("phoneError", phoneRegex.test(phone), "Válido", "Usa el formato 2222-2222");
  setValidationMessage("passwordError", passwordRegex.test(password), "Válida", "Debe tener 8+ caracteres, número y símbolo");
});



