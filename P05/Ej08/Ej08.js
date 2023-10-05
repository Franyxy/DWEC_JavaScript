window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = fecha;
}
function fecha(){
    var VstFecha = document.formulario.fecha.value;
    var VstMensaje = "";
    if(validarFecha(VstFecha))
        {VstMensaje="La fecha introducida es correcta";}
    else
        {VstMensaje="La fecha introducida No es correcta";}
    document.formulario.mensaje.value = VstMensaje;
}

function validarFecha(VstFecha) {
    var VarrFecha = VstFecha.split(/[/|-]/);
    var VitDia=parseInt(VarrFecha[0],10);
    var VitMes=parseInt(VarrFecha[1],10);
    var VitYear=parseInt(VarrFecha[2],10);
    var VarrVerifDias=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((VitYear % 4 === 0 && VitYear % 100 !== 0) ||(VitYear % 400 === 0)){
        VarrVerifDias[1] = 29;
    }

    if(VitMes<1||VitMes>12)
        return false;
    
    if(VitDia<1||VitDia>31)
        return false;
    
    if(VarrVerifDias[VitMes-1]<VitDia)
        return false;

    return true;
}

