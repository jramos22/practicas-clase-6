let usuario = parseInt(prompt('Digite un numero se le dira si es un numero primo o no'));



function primo(usuario){
    let i=2;
    let numeroprimo ='si';
    while (i<usuario) {
        if(usuario % i == 0){
            numeroprimo='no';
        }
        i++;
    }
    
    if (numeroprimo=='si') {
        console.log(true);
    }else{
        console.log(false);
    }
}

primo(usuario);