window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = nombre;
}

function nombre() {
    var VstMensaje = "";
    var VstCadena = document.formulario.mensaje.value;
    var VstCons = " -ºª";
    
    if (VstCadena.length >= 3 && VstCadena.length <= 27) {
        if (isLetter(VstCadena.charAt(0)) && isLetter(VstCadena.charAt(VstCadena.length - 1))) {
            for (var i = 0; i < VstCadena.length; i++) {
                if (VstCons.includes(VstCadena.charAt(i))) {
                    VstMensaje = "El nombre introducido SI coincide con las características";
                }else{
                    VstMensaje = "El nombre introducido no contiene los caracteres esceciales requeridos";
                }
            }
        } else {
            VstMensaje = "El primer y/o último carácter no son letras.";
        }
    } else {
        VstMensaje = "La longitud del nombre no cumple con los requisitos.";
    }

    document.formulario.nombre.value = VstMensaje;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/);
}
