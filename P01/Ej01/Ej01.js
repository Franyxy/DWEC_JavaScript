window.onload=primo;

function primo(){
    var cont=0;
    let VstResuelto=" ";
    for(let VitIndice=1;VitIndice<=100;VitIndice++){
        for(let VitIndice2=1;VitIndice2<=VitIndice;VitIndice2++){

            if(VitIndice%VitIndice2==0)
            cont++;
        }
        if(cont==2){
            VstResuelto+=VitIndice.toString()+"|";
        }
        cont=0;
    }

    document.formulario.texta.value=VstResuelto;
}