window.onload = iniciar();

//matriz que contendra cada empleado agregado
var empleados = [];

//Evento del boton AgregarEmpleado
function iniciar() {
    var botonAgrear = document.getElementById("btnAgregarEmpleado");
    botonAgrear.addEventListener('click', btnAgregar)
}

function btnAgregar() {
    //Obtencion de valores de cada variable recibida
    var nombreEmpleado = document.getElementById("txtNombre").value;
    var cargoEmpleado = document.getElementById("txtCargo").value;
    var contactoEmpleado = document.getElementById("txtContacto").value;
    var correoEmpleado = document.getElementById("txtCorreo").value;
    var fechaIngresoEmpleado = document.getElementById("txtFechaIngreso").value;
    var credencialEmpleado = document.getElementById("txtCredencial").value;

    //Agrega las variables al objeto empleado para identar la informacion del empleado
    var empleado = {
        "empleado_nombre": nombreEmpleado,
        "empleado_cargo": cargoEmpleado,
        "empleado_contacto": contactoEmpleado,
        "empleado_correo": correoEmpleado,
        "empleado_fecha_Ingreso": fechaIngresoEmpleado,
        "empleado_credencial": credencialEmpleado
    }
    //guarda cada empleado dentro del array 
    empleados.push(empleado);
    mostrarDatos()
}


function mostrarDatos() {
    var mostrarEmpleados = document.getElementById("mostrarConsultas");
    var html = "";
   for(var empleado of empleados){
    html += 
    "Nombres:  " + empleado.empleado_nombre + "<br>" +
    "Cargo: " + empleado.empleado_cargo + "<br>" +
    "Telefono: " + empleado.empleado_contacto + "<br>" +
    "Correo Electronico:  " + empleado.empleado_correo + "<br>" +
    "Fecha ingreso empresa: " + empleado.empleado_fecha_Ingreso + "<br>" +
    "Credencial: " + empleado.empleado_credencial +  "<hr>"
   }
    mostrarEmpleados.innerHTML = html
}
