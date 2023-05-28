function calcularTotal() {
    var cantidadEntradas = parseInt(
        document.getElementById("cantidadEntradas").value
    );
    var categoria = document.getElementById("categoria").value;
    var precioEntrada = 0;

    // Calcular el precio de la entrada según la categoría seleccionada
    if (categoria === "particular") {
        precioEntrada = 1000;
    } else if (categoria === "estudiante") {
        precioEntrada = 500;
    } else if (categoria === "orador") {
        precioEntrada = 300;
    }

    var totalPagar = cantidadEntradas * precioEntrada;

    // Mostrar el total a pagar
    document.getElementById("totalPagar").innerHTML =
        "Total a pagar: $" + totalPagar;
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("totalPagar").innerHTML = "";
}


function calcularTotal() {
    var cantidadEntradas = parseInt(
        document.getElementById("cantidadEntradas").value
    );
    var categoria = document.getElementById("categoria").value;
    var precioEntrada = 0;

    // Calcular el precio de la entrada según la categoría seleccionada
    if (categoria === "particular") {
        precioEntrada = 1000;
    } else if (categoria === "estudiante") {
        precioEntrada = 1000 - 1000*0.10;
    } else if (categoria === "orador") {
        precioEntrada = 1000 - 1000*0.30;
    }

    var totalPagar = cantidadEntradas * precioEntrada;

    // Mostrar el total a pagar
    document.getElementById("totalPagar").innerHTML =
        "Total a pagar: $" + totalPagar;

    // Actualizar el resumen con los datos ingresados
    document.getElementById("resumenNombre").textContent =
        document.getElementById("nombre").value;
    document.getElementById("resumenApellido").textContent =
        document.getElementById("apellido").value;
    document.getElementById("resumenCorreo").textContent =
        document.getElementById("correo").value;
    document.getElementById("resumenCantidadEntradas").textContent =
        cantidadEntradas;
    document.getElementById("resumenCategoria").textContent = categoria;
    document.getElementById("resumenTotalPagar").textContent = "$" + totalPagar;
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("totalPagar").innerHTML = "";
    document.getElementById("resumenNombre").textContent = "";
    document.getElementById("resumenApellido").textContent = "";
    document.getElementById("resumenCorreo").textContent = "";
    document.getElementById("resumenCantidadEntradas").textContent = "";
    document.getElementById("resumenCategoria").textContent = "";
    document.getElementById("resumenTotalPagar").textContent = "";
}
