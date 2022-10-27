//Voy a hacerlo todo modulado en lugar de usar un sólo método que calcule el resultado.
//Por lo tanto tendre un calPrcioTamaño() y un calPrecioIngredientes() que al final sumanremos
//con un suma().
//Las validaciones irán dentro de un métido validar().

function validar() {
  //Empezamos validando que los campos de texto no estén vacios.
  //validar Nombre
  if (nombre.value.trim() == "") {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo "Nombre" debe de estar relleno');
    return false;
  }
  //validar Dirección
  if (direccion.value.trim() == "") {
    alert('[ERROR] El campo "Dirección" debe de estar relleno');
    return false;
  }
  //validar Teléfono
  if (telefono.value.trim() == "") {
    alert('[ERROR] El campo "Teléfono" debe de estar relleno');
    return false;
  }
  //validar Email
  if (email.value.trim() == "") {
    alert('[ERROR] El campo "Email" debe de estar relleno');
    return false;
  }

  //Validamos que escogan al menos una opción para el tamaño de la pizza.
  var elementos = document.getElementsByName("tamaño");
  var tamañoValido = false;
  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].checked == true) {
      tamañoValido = true;
      break;
    }
  }
  if (tamañoValido == false) {
    alert("[ERROR] Debes escoger un tamaño de pizza");
    return false;
  }

  //validamos que escojan al menos un ingrediente.
  var ingredienteValido = false;
  var ele1 = document.getElementById("bacon");
  var ele2 = document.getElementById("queso");
  var ele3 = document.getElementById("piña");
  var ele4 = document.getElementById("champis");
  if (ele1.checked == true) {
    ingredienteValido = true;
  } else if (ele2.checked == true) {
    ingredienteValido = true;
  } else if (ele3.checked == true) {
    ingredienteValido = true;
  } else if (ele4.checked == true) {
    ingredienteValido = true;
  }
  if (ingredienteValido == false) {
    alert("[ERROR] Debes escoger al menos un ingrediente");
    return false;
  }
  //Si ha llegado hasta aquí es que todas las otras condiciones se han cumplido,
  //así que devolvemos true.
  return true;
}

function calPrecioTamaño() {
  var precio;
  var elementos = document.getElementsByName("tamaño");
  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].checked == true && elementos[i].id == "pequeña") {
      precio = 5;
      break;
    } else if (elementos[i].checked == true && elementos[i].id == "mediana") {
      precio = 10;
      break;
    } else if (elementos[i].checked == true && elementos[i].id == "grande") {
      precio = 15;
    }
  }
  return precio;
}

function calPrecioIngredientes() {
  var precio = 0;
  var ele1 = document.getElementById("bacon");
  var ele2 = document.getElementById("queso");
  var ele3 = document.getElementById("piña");
  var ele4 = document.getElementById("champis");
  if (ele1.checked == true) {
    precio++;
  }
  if (ele2.checked == true) {
    precio++;
  }
  if (ele3.checked == true) {
    precio++;
  }
  if (ele4.checked == true) {
    precio++;
  }
  return precio;
}

function sumar(valor1, valor2) {
  var resultado = valor1 + valor2;
  console.log(resultado);
  return resultado;
}

window.onload = function () {
  procesar.onclick = function () {
    let valido = validar();
    console.log(valido);
    if (valido == true) {
      let precio1 = calPrecioTamaño();
      let precio2 = calPrecioIngredientes();
      console.log(precio1);
      console.log(precio2);
      let precioTotal = sumar(precio1, precio2);
      total.value = precioTotal;
    }
  };
};
