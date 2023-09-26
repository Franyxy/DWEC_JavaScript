window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=cadena;
}

function cadena(){
    var cadena=document.formulario.name1.value;
    var VitNumVoc=VitNumA=VitNumE=VitNumI=VitNum0=VitNumU=CstConsonantes=0;
    var VstCons="bcdfghjklmnñpqrstvwxyz"
    cadena=cadena.toLowerCase();
    cadena=cadena.replace(/\s+/g, '');

    for(let i=0;i<cadena.length;i++){
        let aux=cadena.charAt(i);
        if(aux==="a"||aux==="á"){
            VitNumA++;
            VitNumVoc++;
        }else if(aux==="e"||aux=="é"){
            VitNumE++;
            VitNumVoc++;
        }else if(aux=="i"||aux=="í"){
            VitNumI++;
            VitNumVoc++;
        }else if(aux=="o"||aux=="ó"||aux=="ö"){
            VitNum0++;
            VitNumVoc++;
        }else if(aux=="u"||aux=="ú"){
            VitNumU++;
            VitNumVoc++;
        }else if(VstCons.includes(cadena.charAt(i))){
            CstConsonantes++;
        }

    }


    
    document.formulario.vocales.value=VitNumVoc;
    document.formulario.a.value=VitNumA;
    document.formulario.e.value=VitNumE;
    document.formulario.i.value=VitNumI;
    document.formulario.o.value=VitNum0;
    document.formulario.u.value=VitNumU;
    document.formulario.consonantes.value=CstConsonantes;

}