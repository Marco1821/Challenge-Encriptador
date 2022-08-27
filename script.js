document.getElementById("output").style.display = "none";

function encriptar() {
    var input = document.getElementById("text-input").value;
    input = input
        .toLowerCase()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("text-output").innerHTML = input;
    document.getElementById("no-mensaje").style.display = "none";
    document.getElementById("output").style.display = "inline";
}

function desencriptar() {
    var input = document.getElementById("text-input").value;
    input = input
        .toLowerCase()
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("text-output").innerHTML = input;
    document.getElementById("no-mensaje").style.display = "none";
    document.getElementById("output").style.display = "inline";
}

function copiar(id_elemento) {
    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");

    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand("copy");

    // Elimina el campo de la página
    document.body.removeChild(aux);

}
