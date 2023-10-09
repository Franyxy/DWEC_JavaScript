window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=primo;
}

function primo(){
    var name1=document.formulario.name1.value;
    var name1=parseInt(name1,10);
    var name2=document.formulario.name2.value;
    var name2=parseInt(name2,10);

    var cont=0;
    let VstResuelto=" ";
    for(let VitIndice=name1;VitIndice<=name2;VitIndice++){
        for(let VitIndice2=name1;VitIndice2<=VitIndice;VitIndice2++){
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