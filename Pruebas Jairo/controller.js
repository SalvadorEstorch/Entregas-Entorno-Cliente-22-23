const URL_DESTINO = "http://localhost:5500/Pruebas Jairo/";
const RECURSO = "pizzas.json";

//función de petición asincrona al servidor
function enviarPeticionAsincrona() {
  let xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        procesarRespuesta(this.responseText); //Obtenemos el valor en texto
      } else {
        alert("ZASCA!");
      }
    }
  };

  xmlHttp.open("GET", URL_DESTINO + RECURSO, true);
  xmlHttp.send(null);
}
//función de procesar respuesta
function procesarRespuesta(jsonDoc) {
  //Convertimos un texto a un objeto JSON
  var objetoJson = JSON.parse(jsonDoc);

  let formulario = document.createElement("form");

  //Vamos primero con el array TAMAÑOS
  var arrayTam = objetoJson.PIZZAS.TAMAÑOS;
  //Podemos hacer lo contrario con "JSON.stringify(obj)"
  console.log(objetoJson);
  console.log(arrayTam);

  let h1 = document.createElement("h1"); //<h1></h1>
  let titTam = document.createTextNode("Tamaños de pizzas: ");
  let titulo1 = h1.appendChild(titTam); //no me lo pone como título y no sé por qué

  formulario.appendChild(titulo1);
  formulario.appendChild(document.createElement("br"));

  //Iteramos el array de tamaños y formamos los input radio de cada elemento
  for (let tam of arrayTam) {
    let input = document.createElement("input");
    input.setAttribute("type", "radio"); //Asignar el atributo type
    input.setAttribute("name", "tamaño"); //Asignar el atributo name para que sólo se pueda elegir una opción
    input.setAttribute("id", tam);
    input.setAttribute("value", tam);

    let label = document.createElement("label");
    label.setAttribute("for", tam); //<label htmlFor="peq"></label>
    label.appendChild(document.createTextNode(tam)); //<label for="tam">tam</label>
    formulario.appendChild(input);
    formulario.appendChild(label);
  }
  formulario.appendChild(document.createElement("br"));

  //Vamos con el array INGREDIENTES
  var arrayIng = objetoJson.PIZZAS.INGREDIENTES;
  let titIng = document.createTextNode("Ingredientes: ");

  formulario.appendChild(titIng);
  formulario.appendChild(document.createElement("br"));

  //Iteramos el array de ingredientes y formamos los input radio de cada elemento
  for (let ing of arrayIng) {
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox"); //Asignar el atributo type
    input.setAttribute("id", ing);
    input.setAttribute("value", ing);

    let label = document.createElement("label");
    label.setAttribute("for", ing); //<label htmlFor="peq"></label>
    label.appendChild(document.createTextNode(ing)); //<label for="ing">ing</label>
    formulario.appendChild(input);
    formulario.appendChild(label);
  }

  resultadoBusqueda.appendChild(formulario);
}

function refrescarDatos() {
  console.log("dentro de refrescar");
  //Vaciamos los div
  //contenidoTamaño.innerHTML = "";
  //contenidoIngredientes.innerHTML = "";
  resultadoBusqueda.innerHTML = "";
  //Volvemos a cargar los datos
  enviarPeticionAsincrona();
}

//Es lo primero que se ejecuta
window.onload = function () {
  enviarPeticionAsincrona();
  console.log("antes de refrescar");
  refrescar.onclick = function () {
    refrescarDatos();
  };
  /*procesar.onclick = function () {
      enviarPeticionCalculaPrecio();
    };*/
};
