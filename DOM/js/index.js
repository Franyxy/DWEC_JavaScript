const botondef=document.getElementById('botondefiniciones');
botondef.addEventListener("click", () => {
    VstPalabra=document.getElementById('palabra').value;
    VstDefinicion=document.getElementById('concepto').value;
    const node = document.createElement("li");
    const textnode = document.createTextNode(VstPalabra+".- "+VstDefinicion);
    node.appendChild(textnode);
    document.getElementById("listaDefiniciones").appendChild(node);

    VinpPalabra=document.getElementById('palabra');
    VinpPalabra.value="";
    VinpConcepto=document.getElementById('concepto');
    VinpConcepto.value="";

});

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

    document.getElementById("tablacoches").appendChild(tr);
});