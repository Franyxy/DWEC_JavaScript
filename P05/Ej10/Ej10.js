window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = url;
}
function url(){
    var VstURL = document.formulario.url.value;
    var VstMensaje = "";
    if(validarURL(VstURL))
        {VstMensaje="LA URL introducida SI es correcta";}
    else
    {VstMensaje="LA URL introducida NO es correcta";}
    document.formulario.mensaje.value = VstMensaje;
}

function validarURL(VstURL) {
    VarrURL=VstURL.split(".");
    if(VarrURL.length!=3)
    return false;

    if(!VstURL.startsWith('http://www.')&&!VstURL.startsWith('https://www.')&&!VstURL.startsWith('www.'))
    return false;

    if(!isLetter(VarrURL[1].charAt(0)))
        return false;


    if(!isLetterNumber(VarrURL[1].charAt(VarrURL[1].length-1)))
        return false;

    if(VarrURL[2].length<2||VarrURL[2].length>4)
        return false;

    for(let i=0;i<VarrURL[2].length;i++)
        if(!isLetter(VarrURL[2].charAt(i)))
            return false;
    

    return true;
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/);
}
function isLetterNumber(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

