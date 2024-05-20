document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener valores de los campos
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Variables para los mensajes de error
    let usernameError = '';
    let emailError = '';
    let passwordError = '';
  
    // Validación de campos vacíos
    if (!username) {
      usernameError = 'El nombre de usuario es requerido.';
    }
    if (!email) {
      emailError = 'El correo electrónico es requerido.';
    }
    if (!password) {
      passwordError = 'La contraseña es requerida.';
    }
  
    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      emailError = 'El correo electrónico no es válido.';
    }
  
    // Validación de contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{7,})/;
    if (password && !passwordRegex.test(password)) {
      passwordError = 'La contraseña debe tener al menos 7 caracteres, una mayúscula y un caracter especial.';
    }
  
    // Mostrar errores o enviar formulario
    if (usernameError || emailError || passwordError) {
      document.getElementById('usernameError').textContent = usernameError;
      document.getElementById('emailError').textContent = emailError;
      document.getElementById('passwordError').textContent = passwordError;
  
      document.getElementById('username').classList.add('is-invalid');
      document.getElementById('email').classList.add('is-invalid');
      document.getElementById('password').classList.add('is-invalid');
    } else {
      document.getElementById('usernameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('passwordError').textContent = '';
  
      document.getElementById('username').classList.remove('is-invalid');
      document.getElementById('email').classList.remove('is-invalid');
      document.getElementById('password').classList.remove('is-invalid');
  
      alert('Tu registro se completó correctamente');
      // Aquí puedes enviar el formulario al servidor o realizar otras acciones necesarias
    }
  });
  