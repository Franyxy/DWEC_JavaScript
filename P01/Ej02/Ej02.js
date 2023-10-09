window.onload=primo;

function primo(){
    var cont=0,contprimos=0,aux=1;
    let VstResuelto=" ";
    while(contprimos!=100){
            for(let VitIndice2=1;VitIndice2<=aux;VitIndice2++){
                if(aux%VitIndice2==0)
                cont++;
            }
            if(cont==2){
                VstResuelto+=aux.toString()+"|";
                contprimos++;
            }
            cont=0;
            aux++;  
    }
    document.formulario.texta.value=VstResuelto;
}