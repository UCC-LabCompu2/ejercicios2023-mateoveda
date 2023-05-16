/**
 * Convierte unidades entre metros, pulgadas, pies y yardas;
 * @method convertirUnidades
 * @param {string} id - Id del elemento input html
 * @param {number} valor - Es el valor que introduce el usuario para convertir
 */

function convertirUnidades(id,valor){
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto")
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = valor*39.3701;
        document.lasUnidades.unid_pie.value = valor*3.28084;
        document.lasUnidades.unid_yarda.value = valor*1.09361;
    }
}

function convertirGr(id){
    if(id=="grados"){
        let gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = gr*(Math.PI/180);
    }else if(id=="radianes"){
        let rad = document.getElementById("radianes").value;
        document.getElementById("grados").value = rad*(180/Math.PI);
    }
}