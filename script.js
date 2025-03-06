// script.js
// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Expresión regular para validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById('email');
    if (!emailPattern.test(emailInput.value)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }
    // Mostrar modal de confirmación si la validación es correcta
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
    // Reiniciar el formulario
    document.getElementById('contactForm').reset();
  });
  