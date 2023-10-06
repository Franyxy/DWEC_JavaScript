window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = codigo;
}
function codigo(){
    var VstCodigo = document.formulario.codigo.value;
    var VstMensaje = "";
    if(validarCodigo(VstCodigo))
        {VstMensaje="El Código introducido SI es correcto";}
    else
    {VstMensaje="El Código introducido NO es correcto";}
    document.formulario.mensaje.value = VstMensaje;
}

function validarCodigo(VstCodigo) {
    VstCodigo=VstCodigo.toUpperCase();
    let VstCaracteres="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ%/?!01234567809";
    let VstLetras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let letrasPermitidas = ["AN", "ES", "DL", "US"];
    let VstNumber="01234567809";
    let VstCaracteresEspeciales="#@$&";
    if(VstCodigo.length<20||VstCodigo.length>26)
        return false;
    
    for(let i=0;i<3;i++)
        if(!VstNumber.includes(VstCodigo.charAt(i)))
            return false;

    let aux=0;
    for(let i=2;i<6;i++)
        if(!VstNumber.includes(VstCodigo.charAt(i)))
            aux=i;

    let VstNewCodigo=VstCodigo.substr(aux+1,VstCodigo.length);
    let VstCodigo1=VstNewCodigo.substr(0,2);

    if (!letrasPermitidas.includes(VstCodigo1)) {
        return false;
    }
    if (!VstCaracteresEspeciales.includes(VstNewCodigo.charAt(3))) {
        return false;
    }

    let VstCodigo2=VstNewCodigo.substr(3,VstCodigo.length);
    for(let i=0;i<4;i++)
        if(!VstLetras.includes(VstCodigo2.chatAt(i)))
            return false;
    
    aux=0;
    for(let i=3;i<7;i++)
        if(!VstLetras.includes(VstCodigo2.charAt(i)))
            aux=i;
        
    let VstNewCodigo2=VstCodigo2.substr(aux+1,VstCodigo2.length);
    let VstCodigo3=VstNewCodigo2.substr(0,2);

    for(let i=0;i<2;i++)
        if(!VstNumber.includes(VstCodigo3.charAt(i)))
            return false;

    for(let i=2;i<5;i++)
        if(!VstLetras.includes(VstCodigo3.charAt(i)))
            return false;

    for(let i=5;i<10;i++)
        if(!VstCaracteres.includes(VstCodigo3.charAt(i)))
            return false;



    return true;
}



