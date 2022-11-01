var btnProcesar = document.getElementById('btnProcesar');
var inputNombre = document.getElementById('nombre');
var inputDireccion = document.getElementById('direccion');
var inputTelefono = document.getElementById('telefono');
var inputCorreo = document.getElementById('email');
var inputChica = document.getElementById('chica');
var inputMediana = document.getElementById('mediana');
var inputGrande = document.getElementById('grande');
var precioBase = 0;
var inputAnana = document.getElementById('anana');
var inputHuevo = document.getElementById('huevo');
var inputLechuga = document.getElementById('lechuga');
var inputJamon = document.getElementById('jamon');
var precioIngrediente = 0;
var precioTotal = 0;
var banderaValidaciones = true;

btnProcesar.addEventListener('click', function (event){
    event.preventDefault();

    console.log(inputNombre.value);

    if(inputNombre.value == ""){
        alert('Error: el campo nombre está vacío.');
        banderaValidaciones = false;
    }

    if(inputDireccion.value == ""){
        alert('Error: El campo Direccion está vacío');
        banderaValidaciones = false;
    }

    if(inputTelefono.value == ""){
        alert('Error: El campo Teléfono está vacío');
        banderaValidaciones = false;
    }

    if(inputCorreo.value == ""){
        alert('Error: El campo Correo está vacío');
        banderaValidaciones = false;
    }

    if(inputChica.checked == true){
        precioBase = 5;
    }else if(inputMediana.checked == true){
        precioBase = 10;
    } else if(inputGrande.checked == true){
        precioBase = 15;
    } else{
        alert('Error: Debe seleccionar un tamaño de pizza');
        banderaValidaciones = false;
    }

    if(inputAnana.checked == true){
        precioIngrediente++ ;
    }

    if(inputHuevo.checked == true){
        precioIngrediente++ ;
    }
    if(inputLechuga.checked == true){
        precioIngrediente++ ;
    }
    if(inputJamon.checked == true){
        precioIngrediente++ ;
    }

    if(precioIngrediente == 0){
        alert('Error: Debe seleccionar un ingrediente como minimo');
        banderaValidaciones = false;
    }

    precioTotal = precioBase + precioIngrediente;
    
    if(banderaValidaciones == true){
    alert('El precio total de su compra es: ' + precioTotal + ' Euros');
    }

   precioIngrediente = 0;
   banderaValidaciones = true;
});