let usuario1 = parseInt(prompt('Digite el primer numero '));
let usuario2 = parseInt(prompt('Digite el segundo numero '));

function mayor(usuario1, usuario2){

if (usuario1 > usuario2 ) {
    console.log(`el numero mayor es ${usuario1}`);
}else if(usuario2 > usuario1){
    console.log(`el numero mayor es ${usuario2}`);
}else{
    console.log('Los numeros son iguales');
}
}

mayor(usuario1, usuario2);