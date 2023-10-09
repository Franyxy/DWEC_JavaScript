window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=conversion;
}

function conversion(){
    var name1=document.formulario.name1.value;
    var num1=parseInt(name1,10);
    var binario=(num1).toString(2);
    var octal=(num1).toString(8);
    var hex=(num1).toString(16);

    document.formulario.textarea1.value=binario;
    document.formulario.textarea2.value=octal;
    document.formulario.textarea3.value=hex;
}