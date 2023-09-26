window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=cadena;
}

function cadena(){
    var VstCadena=document.formulario.cadena.value;
    var VstSubcadena=document.formulario.subcadena.value;
    var VstMensaje="";

    if(VstCadena.indexOf(VstSubcadena)){
        VstMensaje="La subcadena SI aparece en la cadena.";
    }else{
        VstMensaje="La subcadena NO aparece en la cadena principal.";
    }

    


    
    document.formulario.mensaje.value=VstMensaje;

}