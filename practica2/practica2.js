let numero1 = prompt('Escriba el primer numero que sea entero y que sea positivo');
let numero2 = prompt('Escriba el segundo numero que sea entero y que sea positivo');

function division ( numero1, numero2 ) {
    if (numero1 % numero2 == 0 ) {
        console.log(true);
    }else{
        console.log(false);
    }
}

division(numero1, numero2);
