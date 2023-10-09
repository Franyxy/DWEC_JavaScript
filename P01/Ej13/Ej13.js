window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = palindromo;
}
function palindromo(){
    var VstPalindromo = document.formulario.palindromo.value;
    var VstMensaje = "";
    if(validarPalindromo(VstPalindromo))
        {VstMensaje="Si es un Palindromo";}
    else
        {VstMensaje="NO es un Palindromo";}
    document.formulario.mensaje.value = VstMensaje;
}

function validarPalindromo(VstPalindromo) {
    VstPalindromo=VstPalindromo.toUpperCase();
    VstPalindromo=VstPalindromo.replace(/\s+/g, '');
    let VstPalindromoReverse=reverseString(VstPalindromo);
    console.log(VstPalindromo);
    console.log(VstPalindromoReverse);
    if(VstPalindromo!=VstPalindromoReverse)
        return false;
    return true;
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

