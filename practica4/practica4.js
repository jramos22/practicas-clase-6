let veces =parseInt(prompt('Digite de cuantas lineas va a ser la lista de numeros'));


function ciclo(veces){
    let j = 0;
    while (j < veces) {
        let numero =parseInt(prompt('Digite un numero'));
        let tamano =parseInt(prompt('digite el numero de espacios'));
        espacios(numero,tamano);
        j++;
    }
}

function espacios(numero,tamano) {
    let numeroeditado = numero.toString();
    let resultado='';
    let i = numeroeditado.length;
    while ( i < tamano) {
        resultado= resultado +' ';
        i++;
    }
    resultado=resultado+numeroeditado;
    console.log(resultado);
}

ciclo(veces);