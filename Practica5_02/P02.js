window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}
function Comprobar(){
    var VstNif = document.formulario.nif.value;
    var VstMensaje = "";
    var VinOpcion=esNIF(VstNif);
    switch (VinOpcion) {
        case 1:
            VstMensaje="NIE Correcto"
            break;  
        case 2:
            VstMensaje="NIE Incorrecto - Caracter de Control No Válido"
            break;
        case 3:
            VstMensaje="NIE en proceso"
            break;
        case 4:
            VstMensaje="Dato introducido No Válido"
            break;
    }
    document.formulario.mensaje.value = VstMensaje;
}

function esNIF(VstNif) {
    let VstCaracteres="XLKM";
    VstNif=VstNif.toUpperCase();
    let VarrNif=VstNif.split("");
    let VarrLetras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    if(!VerificarNif(VarrNif))
        return 4; 
    if(VstCaracteres.includes(VarrNif[0]))
        VarrNif[0]=0
    else if(VarrNif[0]=='Y')
        VarrNif[0]=1
    else if(VarrNif[0]=='Z')
        VarrNif[0]=2;
        let VinAux=parseInt(concArray(VarrNif),10)%23;
        if(VarrLetras[VinAux]==VarrNif[VarrNif.length-1])
            return 1
        else 
            return 2;
}

function concArray(VarrNif){
    let sum="";
    for(let i=0;i<8;i++)
        sum+=VarrNif[i];
    return sum;
}
function VerificarNif(VarrNif){
    let VstCaracteres="XLKMYZ";
    let VstAbecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let VstNum="1234567890";
    if(VarrNif.length==9){
        if(VstCaracteres.includes(VarrNif[0])||VstNum.includes(VarrNif[0])){
            for(let i=1;i<VarrNif.length-1;i++){
                if(VstNum.includes(VarrNif[i])){
                    if(VstAbecedario.includes(VarrNif[VarrNif.length-1])){
                        return true;
                    }
                }
            }
        }
    }
    return false;

}
