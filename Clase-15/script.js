function validarEmail() {
    let email = prompt("ingrese un email: ");
    
    // Expresión regular para validar el formato de un email  
    
    // Validar el email ingresado cumple con el formato correcto
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail(email)) {
      alert("El email ingresado es válido.");
      return true;
    } else {
      alert("El email ingresado no es válido. Por favor,ntalo nuevamente.");
      return false;
    }
  }