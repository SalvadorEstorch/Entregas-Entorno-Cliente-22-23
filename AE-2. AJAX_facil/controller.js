const URL_DESTINO = "http://localhost:5500/AE-2. AJAX_facil/";
const RECURSO1 = "tamaños_e_ingredientes.json";

function enviarPeticionAsincrona() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        procesarRespuesta(this.responseText); //Obtenemos el valor en texto
      } else {
        alert("¡ZASCA!");
      }
    }
  };

  xmlHttp.open("GET", URL_DESTINO + RECURSO1, true);
  xmlHttp.send(null);
}

function procesarRespuesta(jsonDoc) {
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
      '<input type="radio" id="' +
      tamaño.TAMAÑO +
      '" name="tamaño">' +
      '<label for="' +
      tamaño.TAMAÑO +
      '">' +
      tamaño.TAMAÑO +
      "</label>";
  }
  //Insertamos el contenido en el div cuyo id="contenidoTamaño". Usamos innerHTML porque añadimos porque la
  //variable "contenido" contiene una cadena de HTML
  contenidoTamaño.innerHTML = contenido;

  //Accedemos a la parte que necesitamos del JSON, esto lo vamos a usar más abajo en el bucle for
  var arrayIngredientes = objetoJson.DATA.INGREDIENTES; //Ojo mayusculas y minusculas, es como este en el json original

  //Creamos variable contenido y la inicializamos con el h3 de título
  var contenido1 = "<h3>Ingredientes:</h3>";
  //Iteramos el array de TAMAÑOS y formamos input y label para cada valor, vamos añadiendo todo a la variable
  //contenido con el "contenido +="
  for (let ingrediente of arrayIngredientes) {
    contenido1 +=
      '<label for="' +
      ingrediente.INGREDIENTE +
      '">' +
      ingrediente.INGREDIENTE +
      "</label>" +
      '<input type="checkbox" id="' +
      ingrediente.INGREDIENTE +
      '" name="' +
      ingrediente.INGREDIENTE +
      '"></input>';
  }
  //Insertamos el contenido en el div cuyo id="contenidoTamaño". Usamos innerHTML porque añadimos porque la
  //variable "contenido" contiene una cadena de HTML
  contenidoIngredientes.innerHTML = contenido1;
}

function refrescarDatos() {
  console.log("dentro de refrescar");
  contenidoTamaño.innerHTML = "";
  contenidoIngredientes.innerHTML = "";
  enviarPeticionAsincrona();
}

//Es lo primero que se ejecuta
window.onload = function () {
  enviarPeticionAsincrona();
  console.log("antes de refrescar");
  refrescar.onclick = function () {
    refrescarDatos();
  };
};
