window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = email;
}
function email(){
    var VstEmail = document.formulario.email.value;
    var VstMensaje = "";
    if(validarEmail(VstEmail))
        {VstMensaje="El Email es correcto";}
    else
        {VstMensaje="El Email NO es correcto";}
    document.formulario.mensaje.value = VstMensaje;
}

function validarEmail(VstEmail) {
    let VarrEmail=VstEmail.split("@");
    let VarrEmail1=VarrEmail[0];
    let VarrEmail2=VarrEmail[1];

    let VarrEmailPunto=VstEmail.split(".");
    let VstPuntoUlt=VarrEmailPunto[(VarrEmailPunto.length)-1];
    let VstPuntoPenUlt=VarrEmailPunto[(VarrEmailPunto.length)-2];

    if(VarrEmail.length!=2)
        return false;

    if(isLetter(VarrEmail1.charAt(0))==false)
        return false;

    if(isLetterNumber(VarrEmail1.charAt(VarrEmail1.length-1))==false)
        return false;

    if(isLetter(VarrEmail2.charAt(0))==false)
        return false;

    if(isLetter(VstPuntoPenUlt.charAt(VstPuntoPenUlt.length-1))==false)
        return false;

    if((VstPuntoUlt.length)<2||(VstPuntoUlt.length)>4)
        return false;

    for(let i=0;i<VstPuntoUlt.length;i++)
        if(isLetter(VstPuntoPenUlt.charAt(i))==false)
            return false;

    return true;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/);
}
function isLetterNumber(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}


