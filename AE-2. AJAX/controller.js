const URL_DESTINO = "http://localhost:5500/AE-2. AJAX/";
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
  //var contenido = "<h3>Tamaño de la pizza:</h3>";

  //var contenido = "";
  //Creo el h3 de cabecera
  let tiTam = document.createElement("h3");
  let txtTam = document.createTextNode("Tamaño de la pizza:");
  tiTam.appendChild(txtTam);
  contenidoTamaño.appendChild(tiTam);
  //Iteramos el array de TAMAÑOS y formamos input y label para cada valor, vamos añadiendo todo a la variable
  //contenido con el "contenido +="
  for (let tamaño of arrayTamaños) {
    let label = document.createElement("label");
    label.setAttribute("for", tamaño.TAMAÑO); //<label htmlFor="peq"></label>
    label.appendChild(
      document.createTextNode(
        tamaño.TAMAÑO[0].toUpperCase() + tamaño.TAMAÑO.substring(1)
      )
    ); //<label for="tam">tam</label>

    let input = document.createElement("input");
    input.setAttribute("type", "radio"); //Asignar el atributo type
    input.setAttribute("name", "tamaño"); //Asignar el atributo name para que sólo se pueda elegir una opción
    input.setAttribute("id", tamaño.TAMAÑO);
    input.setAttribute("value", tamaño.TAMAÑO);

    contenidoTamaño.appendChild(label);
    contenidoTamaño.appendChild(input);
  }
  contenidoTamaño.appendChild(document.createElement("br"));
  //Insertamos el contenido en el div cuyo id="contenidoTamaño". Usamos innerHTML porque añadimos porque la
  //variable "contenido" contiene una cadena de HTML
  //contenidoTamaño.innerHTML = contenido;

  //Accedemos a la parte que necesitamos del JSON, esto lo vamos a usar más abajo en el bucle for
  var arrayIngredientes = objetoJson.DATA.INGREDIENTES; //Ojo mayusculas y minusculas, es como este en el json original

  //Creamos variable contenido y la inicializamos con el h3 de título
  //var contenido1 = "<h3>Ingredientes:</h3>";
  let titIng = document.createElement("h3");
  let txtI = document.createTextNode("Ingredientes: ");
  titIng.appendChild(txtI);
  contenidoIngredientes.appendChild(titIng);
  //Iteramos el array de TAMAÑOS y formamos input y label para cada valor, vamos añadiendo todo a la variable
  //contenido con el "contenido1 +="
  for (let ingrediente of arrayIngredientes) {
    let label = document.createElement("label");
    label.setAttribute("for", ingrediente.INGREDIENTE); //<label htmlFor="peq"></label>
    label.appendChild(
      document.createTextNode(
        ingrediente.INGREDIENTE[0].toUpperCase() +
          ingrediente.INGREDIENTE.substring(1)
      )
    ); //<label for="ing">ing</label>

    let input = document.createElement("input");
    input.setAttribute("type", "checkbox"); //Asignar el atributo type
    input.setAttribute("id", ingrediente.INGREDIENTE);
    input.setAttribute("value", ingrediente.INGREDIENTE);

    contenidoIngredientes.appendChild(label);
    contenidoIngredientes.appendChild(input);
    contenidoIngredientes.appendChild(document.createElement("br"));
  }
  //Insertamos el contenido en el div cuyo id="contenidoTamaño". Usamos innerHTML porque añadimos porque la
  //variable "contenido1" contiene una cadena de HTML
  //contenidoIngredientes.innerHTML = contenido1;
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
  //Vaciamos los div mediante innerHTML, no sabemos si es la mejor
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
