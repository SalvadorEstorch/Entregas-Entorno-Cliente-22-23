const URL_DESTINO = "http://localhost:5500/AE-2. AJAX_facil/";
const RECURSO1 = "tamaños_e_ingredientes.json";
const RECURSO2 = "precios.json";

function enviarPeticionCargaDatos() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      //Comprobamos que haya llegado al estado cuatro
      if (this.status == 200) {
        //Comprobamos que los datos se hayan encontrado
        procesarRespuestaCargaDatos(this.responseText); //Obtenemos el valor en texto
      } else {
        alert("¡ZASCA!"); //Si hay algún problema con la petición ¡ZASCA!
      }
    }
  };
  xmlHttp.open("GET", URL_DESTINO + RECURSO1, true);
  xmlHttp.send(null);
}

function procesarRespuestaCargaDatos(jsonDoc) {
  //Convertimos el texto en objeto JSON
  var objetoJson = JSON.parse(jsonDoc);
  //Accedemos a la parte que necesitamos del JSON, esto lo vamos a usar más abajo en el bucle for
  var arrayTamaños = objetoJson.DATA.TAMAÑOS; //Ojo mayusculas y minusculas, es como este en el json original

  //Creamos variable contenido y la inicializamos con el h3 de título
  var contenido = "<h3>Tamaño de la pizza:</h3>";
  //Iteramos el array de TAMAÑOS y formamos input y label para cada valor, vamos añadiendo todo a la variable
  //contenido con el "contenido +="
  for (let tamaño of arrayTamaños) {
    contenido +=
      '<label for="' +
      tamaño.TAMAÑO +
      '">' +
      tamaño.TAMAÑO[0].toUpperCase() +
      tamaño.TAMAÑO.substring(1) +
      "</label>" +
      '<input type="radio" id="' +
      tamaño.TAMAÑO +
      '" name="tamaño">';
  }
  //Insertamos el contenido en el div cuyo id="contenidoTamaño". Usamos innerHTML porque añadimos porque la
  //variable "contenido" contiene una cadena de HTML
  contenidoTamaño.innerHTML = contenido;

  //Accedemos a la parte que necesitamos del JSON, esto lo vamos a usar más abajo en el bucle for
  var arrayIngredientes = objetoJson.DATA.INGREDIENTES; //Ojo mayusculas y minusculas, es como este en el json original

  //Creamos variable contenido y la inicializamos con el h3 de título
  var contenido1 = "<h3>Ingredientes:</h3>";
  //Iteramos el array de TAMAÑOS y formamos input y label para cada valor, vamos añadiendo todo a la variable
  //contenido con el "contenido1 +="
  for (let ingrediente of arrayIngredientes) {
    contenido1 +=
      '<label for="' +
      ingrediente.INGREDIENTE +
      '">' +
      ingrediente.INGREDIENTE[0].toUpperCase() +
      ingrediente.INGREDIENTE.substring(1) +
      "</label>" +
      '<input type="checkbox" id="' +
      ingrediente.INGREDIENTE +
      '" name="' +
      ingrediente.INGREDIENTE +
      '"></input> <br>';
  }
  //Insertamos el contenido en el div cuyo id="contenidoTamaño". Usamos innerHTML porque añadimos porque la
  //variable "contenido1" contiene una cadena de HTML
  contenidoIngredientes.innerHTML = contenido1;
}

function enviarPeticionCalculaPrecio() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      //Comprobamos que haya llegado al estado cuatro
      if (this.status == 200) {
        //Comprobamos que los datos se hayan encontrado
        procesarRespuestaCalculaPrecio(this.responseText); //Obtenemos el valor en texto
      } else {
        alert("¡ZASCA!"); //Si hay algún problema con la petición ¡ZASCA!
      }
    }
  };

  xmlHttp.open("GET", URL_DESTINO + RECURSO2, true); //true muestra que es una petición asincrona
  xmlHttp.send(null); //null porque no necesita body
}

function procesarRespuestaCalculaPrecio(jsonDoc) {
  //Convertimos el texto en objeto JSON
  var objetoJson = JSON.parse(jsonDoc);
  //Accedemos a la parte que necesitamos del JSON, esto lo vamos a usar más abajo en el bucle for
  var arrayPrecioTamaños = objetoJson.PRECIOS.TAMAÑOS; //Ojo mayusculas y minusculas, es como este en el json original

  var precio1 = 0;

  for (let tamaño of arrayPrecioTamaños) {
    if (document.getElementById(tamaño.TAMAÑO).checked == true) {
      precio1 += tamaño.PRECIO;
    }
  }

  var arrayPrecioIngredintes = objetoJson.PRECIOS.INGREDIENTES;

  var precio2 = 0;

  for (let ingrediente of arrayPrecioIngredintes) {
    if (document.getElementById(ingrediente.INGREDIENTE).checked == true) {
      precio2 += ingrediente.PRECIO;
    }
  }

  total.value = precio1 + precio2;
}

function refrescarDatos() {
  console.log("dentro de refrescar");
  //Vaciamos los div
  contenidoTamaño.innerHTML = "";
  contenidoIngredientes.innerHTML = "";
  //Volvemos a cargar los datos
  enviarPeticionCargaDatos();
}

//Es lo primero que se ejecuta
window.onload = function () {
  enviarPeticionCargaDatos();
  console.log("antes de refrescar");
  refrescar.onclick = function () {
    refrescarDatos();
  };
  procesar.onclick = function () {
    enviarPeticionCalculaPrecio();
  };
};
