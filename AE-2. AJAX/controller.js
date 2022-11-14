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

  //Creamos todos los datos usando nodos. No con innerHTML
  let tiTam = document.createElement("h3"); //<h3></h3>
  let txtTam = document.createTextNode("Tamaño de la pizza:"); //Tamaño de la pizza:
  tiTam.appendChild(txtTam); //<h3>Tamaño de la pizza:</h3>
  contenidoTamaño.appendChild(tiTam); //Lo metemos dentro del div del index

  //Iteramos el array de TAMAÑOS y formamos label e input para cada valor
  for (let tamaño of arrayTamaños) {
    //Voy mostrando en comentarios cómo se crearía el html en la primera iteración
    let label = document.createElement("label"); //<label></label>
    label.setAttribute("for", tamaño.TAMAÑO); //<label for="pequeña"></label>
    label.appendChild(
      document.createTextNode(
        tamaño.TAMAÑO[0].toUpperCase() + tamaño.TAMAÑO.substring(1)
      )
    ); //<label for="pequeña">Pequeña</label>

    let input = document.createElement("input"); //<imput></imput>
    input.setAttribute("type", "radio"); //<imput type="radio"></imput>
    //Asignar el atributo name para que sólo se pueda elegir una opción
    input.setAttribute("name", "tamaño"); //<imput type="radio" name="tamaño"></imput>
    input.setAttribute("id", tamaño.TAMAÑO); //<imput type="radio" name="tamaño" id="pequeña"></imput>

    contenidoTamaño.appendChild(label); //Añadimos el label al div del index
    contenidoTamaño.appendChild(input); //Añadimos el imput al div del index
  }

  //Hacemos ahora lo mismo con los ingredientes
  var arrayIngredientes = objetoJson.DATA.INGREDIENTES;

  let titIng = document.createElement("h3");
  let txtI = document.createTextNode("Ingredientes: ");
  titIng.appendChild(txtI);
  contenidoIngredientes.appendChild(titIng);

  for (let ingrediente of arrayIngredientes) {
    let label = document.createElement("label");
    label.setAttribute("for", ingrediente.INGREDIENTE);
    label.appendChild(
      document.createTextNode(
        ingrediente.INGREDIENTE[0].toUpperCase() +
          ingrediente.INGREDIENTE.substring(1)
      )
    );

    let input = document.createElement("input");
    input.setAttribute("type", "checkbox"); //El tipo en lugar de radio es checkbox
    input.setAttribute("id", ingrediente.INGREDIENTE);

    contenidoIngredientes.appendChild(label);
    contenidoIngredientes.appendChild(input);
    contenidoIngredientes.appendChild(document.createElement("br")); //Con esta linea insertamos <br> para
    //realizar un salto de linea y conseguir que los ingredintes se situen en columna
  }
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

  //Esta variable guarda el valor del tamaño de la pizza
  var precio1 = 0;

  for (let tamaño of arrayPrecioTamaños) {
    //Obtenemos el input usando getElementById y el valor de tamaño.TAMAÑO que en la primera iteración será "pequeña"
    //Luego comprobamos si es igual a true y si es cierto se añade su precio a la variable precio1
    if (document.getElementById(tamaño.TAMAÑO).checked == true) {
      precio1 += tamaño.PRECIO;
    }
  }

  //Realizamos lo mismo con los ingredientes
  var arrayPrecioIngredintes = objetoJson.PRECIOS.INGREDIENTES;

  var precio2 = 0;

  for (let ingrediente of arrayPrecioIngredintes) {
    if (document.getElementById(ingrediente.INGREDIENTE).checked == true) {
      precio2 += ingrediente.PRECIO;
    }
  }

  //El value del imput "total" será precio tamaño + precio ingredientes
  total.value = precio1 + precio2;
}

function refrescarDatos() {
  console.log("dentro de refrescar");
  //Para evitar duplicar los datos hay que vaciar los div antes de nada. Se podría hacer así, con innerHTML:
  //contenidoTamaño.innerHTML = "";
  //contenidoIngredientes.innerHTML = "";
  //Pero es mejor hacerlo de esta manera, con los nodos
  //firstChild trae el primer hijo que se encuentra en un nodo, de esta manera podemos borrarlos uno a uno
  while (contenidoTamaño.firstChild) {
    contenidoTamaño.removeChild(contenidoTamaño.firstChild);
  }
  while (contenidoIngredientes.firstChild) {
    contenidoIngredientes.removeChild(contenidoIngredientes.firstChild);
  }
  //Volvemos a cargar los datos
  enviarPeticionCargaDatos();
}

//Es lo primero que se ejecuta
window.onload = function () {
  //Cuando se carga toda la página se ejecuta directamente esta función para actualizar la página con
  //los datos más recintes del JSON
  enviarPeticionCargaDatos();

  //Cuando se hace clic sobre el botón con id "refrescar" se vuelve a refescar los datos
  refrescar.onclick = function () {
    refrescarDatos();
  };

  //Por último esta función se ejecuta cuando se hace clic en el botón con id "procesar"
  procesar.onclick = function () {
    enviarPeticionCalculaPrecio();
  };
};
