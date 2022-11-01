// CAPTURO EL CONTENEDOR PRINCIPAL EN UNA VARIABLE
var contenedorPrincipal = document.getElementById('contenedorPrincipal');
// CREACION DEL FORMULARIO
var formulario = document.createElement('form');

// CREACION DE LOS DISTINTOS INPUTS (5)
var divNombre = document.createElement('div');
var labelNombre = document.createElement('label');
labelNombre.setAttribute('for','nombre')
labelNombre.textContent = 'Nombre: ';
var inputNombre = document.createElement('input');
inputNombre.setAttribute('id','nombre');
inputNombre.setAttribute('type','text');
inputNombre.setAttribute('placeholder','Ingrese su nombre');
divNombre.append(labelNombre,inputNombre);



var divApellidos = document.createElement('div');
var labelApellidos = document.createElement('label');
labelApellidos.setAttribute('for','apellidos')
labelApellidos.textContent = 'Apellidos: ';
var inputApellidos = document.createElement('input');
inputApellidos.setAttribute('id','apellido');
inputApellidos.setAttribute('type','text');
inputApellidos.setAttribute('placeholder','Ingrese sus apellidos');
divApellidos.append(labelApellidos,inputApellidos);

var divDni = document.createElement('div');
var labelDni = document.createElement('label');
labelDni.setAttribute('for','dni')
labelDni.textContent = 'DNI: ';
var inputDni = document.createElement('input');
inputDni.setAttribute('id','dni');
inputDni.setAttribute('type','text');
inputDni.setAttribute('placeholder','Ingrese su DNI');
divDni.append(labelDni,inputDni);



var divDireccion = document.createElement('div');
var labelDireccion = document.createElement('label');
labelDireccion.setAttribute('for','direccion')
labelDireccion.textContent = 'Dirección: ';
var inputDireccion = document.createElement('input');
inputDireccion.setAttribute('id','direccion');
inputDireccion.setAttribute('type','text');
inputDireccion.setAttribute('placeholder','Ingrese su dirección');
divDireccion.append(labelDireccion,inputDireccion);

var divTelefono = document.createElement('div');
var labelTelefono = document.createElement('label');
labelTelefono.setAttribute('for','telefono')
labelTelefono.textContent = 'Teléfono: ';
var inputTelefono = document.createElement('input');
inputTelefono.setAttribute('id','telefono');
inputTelefono.setAttribute('type','text');
inputTelefono.setAttribute('placeholder','Ingrese su teléfono');
divTelefono.append(labelTelefono,inputTelefono);

// AGREGANDO RADIO BUTTONS

var divGenero = document.createElement('div');
var parrafoGenero = document.createElement('p');
parrafoGenero.textContent = 'Genero: '

var radioMasculino = document.createElement('input');
radioMasculino.setAttribute('id','masculino');
radioMasculino.setAttribute('type','radio');
radioMasculino.setAttribute('name','genero');
var labelMasculino = document.createElement('label');
labelMasculino.setAttribute('for','masculino')
labelMasculino.textContent = 'Masculino';
divGenero.append(parrafoGenero,radioMasculino,labelMasculino);

var radioFemenino = document.createElement('input');
radioFemenino.setAttribute('id','femenino');
radioFemenino.setAttribute('type','radio');
radioFemenino.setAttribute('name','genero');
var labelFemenino = document.createElement('label');
labelFemenino.setAttribute('for','femenino')
labelFemenino.textContent = 'Femenino';
divGenero.append(radioFemenino,labelFemenino);


var divAnimales = document.createElement('div');
var parrafoAnimales = document.createElement('p');
parrafoAnimales.textContent = 'Animales: ';

var radioGatos = document.createElement('input');
radioGatos.setAttribute('id','gatos');
radioGatos.setAttribute('type','radio');
radioGatos.setAttribute('name','animales');
var labelGatos = document.createElement('label');
labelGatos.setAttribute('for','gatos')
labelGatos.textContent = 'Gatos';
divAnimales.append(parrafoAnimales,radioGatos,labelGatos);

var radioPerros = document.createElement('input');
radioPerros.setAttribute('id','perros');
radioPerros.setAttribute('type','radio');
radioPerros.setAttribute('name','animales');
var labelPerros = document.createElement('label');
labelPerros.setAttribute('for','perros')
labelPerros.textContent = 'Perros';
divAnimales.append(radioPerros,labelPerros);

// CHECK BOX

var divIntereses = document.createElement('div');
var parrafoIntereses = document.createElement('p');
parrafoIntereses.textContent = 'Intereses: ';

divIntereses.append(parrafoIntereses);

var chkArte = document.createElement('input');
chkArte.setAttribute('type', 'checkbox');
chkArte.setAttribute('id','arte');
var labelArte = document.createElement('label');
labelArte.setAttribute('for','arte');
labelArte.textContent = 'Arte';


divIntereses.append(chkArte,labelArte);

var chkLiteratura = document.createElement('input');
chkLiteratura.setAttribute('type', 'checkbox');
chkLiteratura.setAttribute('id','literatura');
var labelLiteratura = document.createElement('label');
labelLiteratura.setAttribute('for','literatura');
labelLiteratura.textContent = 'Literatura';


divIntereses.append(chkLiteratura, labelLiteratura);

var chkCine = document.createElement('input');
chkCine.setAttribute('type', 'checkbox');
chkCine.setAttribute('id','cine');
var labelCine = document.createElement('label');
labelCine.setAttribute('for','cine');
labelCine.textContent = 'Cine';

divIntereses.append(chkCine, labelCine);

var chkFotografia = document.createElement('input');
chkFotografia.setAttribute('type', 'checkbox');
chkFotografia.setAttribute('id','fotografia');
var labelFotografia = document.createElement('label');
labelFotografia.setAttribute('for','fotografia');
labelFotografia.textContent = 'Fotografía';

divIntereses.append(chkFotografia, labelFotografia);

var chkMusica = document.createElement('input');
chkMusica.setAttribute('type', 'checkbox');
chkMusica.setAttribute('id','musica');
var labelMusica = document.createElement('label');
labelMusica.setAttribute('for','musica');
labelMusica.textContent = 'Música';

divIntereses.append(chkMusica, labelMusica);

// SELECT

var divSelect = document.createElement('div');
divSelect.style.margin = '16px 0';
var labelAlimentos = document.createElement('label');
labelAlimentos.setAttribute('for', 'alimentos');
labelAlimentos.textContent = 'Alimentos favoritos: ';
var selectAlimentos = document.createElement('select');
selectAlimentos.setAttribute('id','alimentos');

var opcionFrutas = document.createElement('option');
opcionFrutas.textContent = 'Frutas';
var opcionCarnes = document.createElement('option');
opcionCarnes.textContent = 'Carnes';
var opcionVerduras = document.createElement('option');
opcionVerduras.textContent = 'Verduras';

selectAlimentos.append(opcionFrutas,opcionCarnes,opcionVerduras);

divSelect.append(labelAlimentos,selectAlimentos);

// TEXTAREA
var divTextarea = document.createElement('div');
var labelConsulta = document.createElement('label');
labelConsulta.textContent = 'Consulta: ';
labelConsulta.setAttribute('for','consulta');
var consulta = document.createElement('textarea');
consulta.setAttribute('id','consulta');

divTextarea.append(labelConsulta,consulta);

// AGREGANDO LOS INPUTS DENTRO DEL FORMULARIO
formulario.append(divNombre);
formulario.append(divApellidos);
formulario.append(divDni);
formulario.append(divDireccion);
formulario.append(divTelefono);
formulario.append(divGenero);
formulario.append(divAnimales);
formulario.append(divIntereses);
formulario.append(divSelect);
formulario.append(divTextarea);

// AÑADO EL FORMULARIO DENTRO DEL CONTENEDOR PRINCIPAL
contenedorPrincipal.append(formulario);


console.log(formulario);




