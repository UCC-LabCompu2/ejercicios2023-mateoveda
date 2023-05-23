/**
 * Convierte unidades entre metros, pulgadas, pies y yardas;
 * @method convertirUnidades
 * @param {string} id - Id del elemento input html
 * @param {number} valor - Es el valor que introduce el usuario para convertir
 */

convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto")
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada") {
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    }else if(id==="pie") {
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    }else if(id==="yarda") {
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;
}

/**
 * Convierte grados a raidanes o radianes a grados
 * @method convertirGR
 * @param {string} id - Id del elemento input html
 */

convertirGr = (id, valor) =>{
    let gr, rad;
    if(isNaN(valor)) {
        alert("El valor ingresado es incorrecto")
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="grados"){
        gr = valor;
        rad = gr*(Math.PI/180)
    }else if(id==="radianes") {
        rad = valor;
        gr = rad * (180 / Math.PI);
    }
    document.pasaje.unid_grados.value = gr;
    document.pasaje.unid_radianes.value = rad;
}

/**
 * Muestra u oculta un div en la parte inferior
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input html
 */
let mostrar_ocultar = (id) => {
    if(id==="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

let sumar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value);
    s2 = Number(document.operacionesMat.sum_num2.value)
    res = s1 + s2;
    document.operacionesMat.sum_total.value = res;
}

let gererarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;
    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split('#');
    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let guardarLS = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementById("unidades").value;

    localStorage.setItem("distanciaLS",dist);
    localStorage.setItem("unidades",uniLS);
    window.open("web2.html");
}

let cargarLs = () => {
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle = "#333";

    //dibuja el rectangulo
    let margen = 5;
    ctx.fillRect(0+margen,yMax-121-margen,130,121);

    //dibuja el circulo
    ctx.arc(xMax/2,yMax/2,200,0,2*Math.PI);
    ctx.stroke(); //dibujo los bordes
    ctx.fill();//pinto el circulo por dentro

}

let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}

let dibujar = () => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    ctx.fillRect(posX, posY, 5,5);
    ctx.fill();
}