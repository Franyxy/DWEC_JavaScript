window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}
function Comprobar(){
    var VstNif = document.formulario.nif.value;
    var VstCif = document.formulario.cif.value;
    var VstCodBanco = document.formulario.codbanco.value;
    var VstNumSucursal = document.formulario.numsucursal.value;
    var VstNumCuenta = document.formulario.numcuenta.value;
    var VstMensaje= "";var VstMensaje1= "";var VstMensaje2= "";
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

    var VinOpcion3=esCodigoControl(VstCodBanco,VstNumSucursal,VstNumCuenta);
    if(VinOpcion3==1){
        VstMensaje2="Algunos campos introducidos no son correctos";
    }else{
        VstMensaje2="El codigo de control es: "+VinOpcion3;
    }
    document.formulario.mensaje2.value = VstMensaje2;

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
    let VarrLetrasCif=['J','A','B','C','D','E','F','G','H','I'];
    let VstAbecedarioCifLetraFinal="JABCDEFGHI";
    VstCif=VstCif.toUpperCase();
    let VarrCif=VstCif.split("");
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
            VinAuxSum=parseInt(VarrAux[0],10)+parseInt(VarrAux[1],10);
            VinAuxSum=parseInt(VinAuxSum,10);
            sumpar=sumpar+VinAuxSum;
            
        }
    }
    for(let k=2;k<8;k=k+2){
        sumimpar=sumimpar+parseInt(VarrCif[k],10);
    }

    
    let VinSumValores=sumpar+sumimpar;
    let VinResto=(VinSumValores)%10;
    let VinResultado=10-VinResto;
    if(VinResultado==10){
        VinResultado==0;
    }

    if(VstAbecedarioCifLetraFinal.includes(VarrCif[VarrCif.length-1])){
        VarrCif[VarrCif.length-1]=VarrLetrasCif.indexOf(VarrCif[VarrCif.length-1]);
    }
    

    if(VinResultado==VarrCif[VarrCif.length-1])
        return 1;
    
    return 2;
}

function comprobarCif(VarrCif){
    let VstAbecedarioCif="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let VstCaracteres1="AHJUV";
    let VstCaracteres2="PQRSW";
    let VstNum="0123456789";
    if(VarrCif.length==9){
        if((VstCaracteres1.includes(VarrCif[0])||VstCaracteres2.includes(VarrCif[0]))&&(VstAbecedarioCif.includes(VarrCif[VarrCif.length-1])||VstNum.includes(VarrCif[VarrCif.length-1]))){
            for(let i=1;i<VarrCif.length-1;i++){
                if(VstNum.includes(VarrCif[i])){
                    return true;
                }
            }
        }
    }
    return false;
}

function esCodigoControl(VstCodBanco,VstNumSucursal,VstNumCuenta){
    let VarrCodBanco=VstCodBanco.split("");
    let VarrNumSucursal=VstNumSucursal.split("");
    let VarrNumCuenta=VstNumCuenta.split("");
    if(verificarCodBanco(VarrCodBanco)==false||verificarNumSucursal(VarrNumSucursal)==false||verificarNumCuenta(VarrNumCuenta)==false){
        return 1;
    }else{
        let numero1=0;let numero2=0;let numero3=0;let rest=0;let restnum3=0;
        numero1=VarrCodBanco[0]*4+VarrCodBanco[1]*8+VarrCodBanco[2]*5+VarrCodBanco[3]*10;
        numero2=VarrNumSucursal[0]*9+VarrNumSucursal[1]*7+VarrNumSucursal[2]*3+VarrNumSucursal[3]*6;
        rest=11-((numero1+numero2)%11);
        if(rest==10){
            rest==1;
        }else if(rest==11){
            rest=0;
        }

        numero3=VarrNumCuenta[0]*1+VarrNumCuenta[1]*2+VarrNumCuenta[2]*4+VarrNumCuenta[3]*8+VarrNumCuenta[4]*5+VarrNumCuenta[5]*10+VarrNumCuenta[6]*9+VarrNumCuenta[7]*7+VarrNumCuenta[8]*3+VarrNumCuenta[9]*6;
        
        restnum3=11-(numero3%11);

        if(restnum3==10){
            restnum3==1;
        }else if(restnum3==11){
            restnum3=0;
        }
        let resultado="";
        let strest=rest.toString();
        let strrestnum3=restnum3.toString();
        resultado=strest+strrestnum3;
        console.log(resultado);

        return resultado;
    }

}



function verificarCodBanco(VarrCodBanco){
    let VstNum="0123456789";
    if(VarrCodBanco.length==4){
        for(let i=0;i<VarrCodBanco.length;i++){
            if(VstNum.includes(VarrCodBanco[i])){
                return true;
            }
        }
    }
    return false;
}

function verificarNumSucursal(VarrNumSucursal){
    let VstNum="0123456789";
    if(VarrNumSucursal.length==4){
        for(let i=0;i<VarrNumSucursal.length;i++){
            if(VstNum.includes(VarrNumSucursal[i])){
                return true;
            }
        }
    }
    return false;
}


function verificarNumCuenta(VarrNumCuenta){
    let VstNum="0123456789";
    if(VarrNumCuenta.length==10){
        for(let i=0;i<VarrNumCuenta.length;i++){
            if(VstNum.includes(VarrNumCuenta[i])){
                return true;
            }
        }
    }
    return false;
}
    
