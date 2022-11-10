const URL_DESTINO = "http://localhost:5500/AE-2. AJAX/";
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

/*function procesarRespuesta(jsonDoc) {
  //Convertimos un texto a un objeto JSON
  var objetoJson = JSON.parse(jsonDoc);

  //Lo suyo seria crear objetos con el DOM, esto esta regulín
  //pero como ejemplo sencillo vale
  var table = "<tr><th>Title</th><th>Artist</th></tr>";
  var arrayCDs = objetoJson.CATALOG.CD; //Ojo mayusculas y minusculas, es como este en el json original

  //Iteramos el array de CDs y formamos las filas y columnas
  for (let cd of arrayCDs) {
    table +=
      "<tr><td>" + cd.TITLE + "</td>" + "<td>" + cd.ARTIST + "</td></tr>";
  }

  resultadoBusqueda.innerHTML = table;
}*/
/*Tambien podemos hacerlo así, con un for clasico
        for (let i = 0; i < arrayCDs.length; i++) {
            table += "<tr><td>" + arrayCDs[i].TITLE + "</td>" + 
                "<td>" + arrayCDs[i].ARTIST + "</td></tr>";
        }
        resultadoBusqueda.innerHTML = table;
        */

function procesarRespuesta(jsonDoc) {
  //Convertimos el texto en objeto JSON
  var objetoJson = JSON.parse(jsonDoc);

  //var contenido = "<h3>Tamaño de la pizza:</h3>";

  var contenido = "";
  //Creo el h3 de cabecera
  let h3 = document.createElement("h3");
  let txt = document.createTextNode("Tamaño de la pizza:");
  h3.appendChild(txt);
  contenidoTamaño.appendChild(h3);

  //Creo el imput
  var arrayTamaños = objetoJson.DATA.TAMAÑOS; //Ojo mayusculas y minusculas, es como este en el json original

  //Iteramos el array de CDs y formamos las filas y columnas
  for (let tamaño of arrayTamaños) {
    /*contenido +=
      '<input type="radio" id="' +
      tamaño.TAMAÑO +
      '" name="tamaño">' +
      '<label for="' +
      tamaño.TAMAÑO +
      '">' +
      tamaño.TAMAÑO +
      "</label>";*/

    let imput = document.createElement("imput");
    imput.setAttribute("type", "radio");
    imput.setAttribute("id", tamaño.TAMAÑO);
    imput.setAttribute("name", tamaño.TAMAÑO);

    let label = document.createElement("label");
    let txt1 = document.createTextNode(tamaño.TAMAÑO);
    imput.appendChild(txt1);
    contenidoTamaño.appendChild(imput);
    label.appendChild(txt1);
    contenidoTamaño.appendChild(label);
  }
  //contenidoTamaño.innerHTML = contenido;
}

window.onload = function () {
  enviarPeticionAsincrona();
};
