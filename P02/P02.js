window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}
function Comprobar(){
    var VstNif = document.formulario.nif.value;
    var VstCif = document.formulario.cif.value;
    var VstMensaje= "";var VstMensaje1= "";
    var VinOpcion1=esNIF(VstNif);
    switch (VinOpcion1) {
        case 1:
            VstMensaje="NIF Correcto"
            break;  
        case 2:
            VstMensaje="NIF Incorrecto - Caracter de Control No Válido"
            break;
        case 3:
            VstMensaje="Se han introducido de 6 a 8 digitos. Inválido"
            break;
        case 4:
            VstMensaje="Dato introducido No Válido"
            break;
    }
    document.formulario.mensaje.value = VstMensaje;

    var VinOpcion2=esCIF(VstCif);
    switch (VinOpcion2) {
        case 1:
            VstMensaje1="CIF Correcto"
            break;  
        case 2:
            VstMensaje1="CIF Incorrecto - Caracter de Control No Válido"
            break;
        case 3:
            VstMensaje1="CIF introducido No Válido"
            break;
    }
    document.formulario.mensaje1.value = VstMensaje1;
}

function esNIF(VstNif) {
    let VstCaracteres="XLKM";
    VstNif=VstNif.toUpperCase();
    let VarrNif=VstNif.split("");
    let VarrLetras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    if(VerificarNif(VarrNif)==4)
        return 4
    else if(VerificarNif(VarrNif)==3)
        return 3;
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
    }else if(VarrNif.length>5&&VarrNif.length<9){
        for(let i=0;i<VarrNif.length;i++){
            if(VstNum.includes(VarrNif[i])){
                let VinAux1=parseInt(concArray(VarrNif),10);
                if(VinAux1>100000){
                    return 3;
                }
            }
        }
    }
    return 4;

}

function esCIF(VstCif){
    VstCif=VstCif.toUpperCase();
    let VarrCif=VstCif.split("");
    console.log(VarrCif);
    let sumpar=0;let VinAuxSum=0;let sumimpar=0;
    if(!comprobarCif(VarrCif))
        return 3;
    for(let i=1;i<8;i=i+2){
        VinAux=parseInt(VarrCif[i],10)*2;
        if(VinAux<=9){
            sumpar=sumpar+VinAux;
        }else{
            VstAux=VinAux.toString();

            VarrAux=VstAux.split("");
            VinAuxSum=VarrAux[0]+VarrAux[1];
            VinAuxSum=parseInt(VinAuxSum,10);
            sumpar=sumpar+VinAuxSum;
        }
    }
    for(let j=2;j<9;j=j+2)
        console.log(parseInt(VarrCif[j],10))
        sumimpar=sumimpar+parseInt(VarrCif[j],10);
    
    
    
    
    
}

function comprobarCif(VarrCif){
    let VstCaracteres1="AHJUV";
    let VstCaracteres2="PQRSW";
    let VstNum="0123456789";
    if(VarrCif.length==9){
        if(VstCaracteres1.includes(VarrCif[0])||VstCaracteres2.includes(VarrCif[0])){
            for(let i=1;i<VarrCif.length;i++){
                if(VstNum.includes(VarrCif[i])){
                    return true;
                }
            }
        }
    }
    return false;
}