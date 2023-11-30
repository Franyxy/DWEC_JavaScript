const botondef=document.getElementById('botondefiniciones');
botondef.addEventListener("click", () => {
    VstPalabra=(document.getElementById('palabra').value).toLowerCase();
    VstDefinicion=document.getElementById('concepto').value.toLowerCase();
    VstDefinicion=capitalizeFirstLetter(VstDefinicion);

    if(VstPalabra===""||VstDefinicion===""){
        alert("Los campos no pueden estar vacios.");
    }else{
        aux=document.getElementById(VstPalabra);
        if(aux===null){
            const Vdt = document.createElement("dt");
            const Vdd = document.createElement("dd");

            const textdd = document.createTextNode(VstPalabra);
            const textdt = document.createTextNode(VstDefinicion);

            Vdt.appendChild(textdd);
            Vdt.setAttribute('id',VstPalabra);
            Vdd.appendChild(textdt);
            Vdd.setAttribute('id',"D"+VstPalabra);

            document.getElementById("listaDefiniciones").appendChild(Vdt);
            document.getElementById("listaDefiniciones").appendChild(Vdd);

            VinpPalabra=document.getElementById('palabra');
            VinpPalabra.value="";
            VinpConcepto=document.getElementById('concepto');
            VinpConcepto.value="";
        }else{
            document.getElementById("D"+VstPalabra).textContent=VstDefinicion;
        }
    }

});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const botoncoh=document.getElementById('botoncoches');

botoncoh.addEventListener("click", () => {
    VstMarca=document.getElementById('marca').value;
    VstModelo=document.getElementById('modelo').value;
    VstPrecio=document.getElementById('precio').value;

    const tr = document.createElement("tr");

    const txt1 = document.createTextNode(VstMarca);
    const txt2 = document.createTextNode(VstModelo);
    const txt3 = document.createTextNode(VstPrecio);

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");


    td1.appendChild(txt1);
    td2.appendChild(txt2);
    td3.appendChild(txt3);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("tablacoches").appendChild(tr);
});
