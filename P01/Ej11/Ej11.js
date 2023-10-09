window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = localidad;
}
function localidad(){
    var VstLocalidad = document.formulario.localidad.value;

    var VstMensaje = "";
    if(validarLocalidad(VstLocalidad))
        {VstMensaje="La localidad es correcta";}
    else
        {VstMensaje="La localidad NO es correcta";}
    document.formulario.mensaje.value = VstMensaje;
}

function validarLocalidad(VstLocalidad) {
    for (let i=0;i<3;i++)
        if(!isLetter(VstLocalidad.charAt(i)))
            return false;

    if(!isLetter(VstLocalidad.charAt(VstLocalidad.length-1)))
        return false;
    if(!isLetter(VstLocalidad.charAt(VstLocalidad.length-2)))
        return false;

    for(let j=0;j<VstLocalidad.length;j++)
        if(!isLetter(VstLocalidad.charAt(j)))
            return false;

    if(VstLocalidad.length<7||VstLocalidad.length>35)
        return false;

    return true;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z ]/);
}


