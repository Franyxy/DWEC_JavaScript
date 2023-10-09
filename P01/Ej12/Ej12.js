window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = direccion;
}
function direccion(){
    var VstDireccion = document.formulario.direccion.value;
    var VstMensaje = "";
    if(validarDireccion(VstDireccion))
        {VstMensaje="La dirección introducida SI es correcta";}
    else
        {VstMensaje="La dirección introducida NO es correcta";}
    document.formulario.mensaje.value = VstMensaje;
}

function validarDireccion(VstDireccion) {
    VstDireccion=VstDireccion.toLowerCase();
    let VstCaracteres="abcdefghijklmmnñopqrstuvwxyzºª/- 0123456789";
    if(!isLetter(VstDireccion.charAt(0)))
        return false;

    if(!isLetterNumber(VstDireccion.charAt(VstDireccion.length-1)))
        return false;

    if(VstDireccion.length<8||VstDireccion.length>42)
        return false;

    for(let i=1;i<VstDireccion.length-1;i++)
        if(!VstCaracteres.includes(VstDireccion.charAt(i)))
            return false;

    return true;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/);
}
function isLetterNumber(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

