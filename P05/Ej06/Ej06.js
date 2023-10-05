window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=cadena;
}

function cadena() {
    var VstCadena = document.formulario.cadena.value;
    var VstSubcadena = document.formulario.subcadena.value;
    var VstMensaje = "";
    var VarrVeces = VstCadena.match(new RegExp(VstSubcadena, 'g'));

    if (VarrVeces !== null) {
        var VintAux = VarrVeces.length;
        VstMensaje = "La subcadena SI aparece en la cadena, aparece " + VintAux + " veces";
    } else {
        VstMensaje = "La subcadena NO aparece en la cadena principal.";
    }

    document.formulario.mensaje.value = VstMensaje;
}
