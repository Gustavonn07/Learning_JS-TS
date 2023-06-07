// Condicionais (Parte 02)

function contador(valor){
    if (valor >= 0 && valor <= 5){
        console.log('O valor está entre 0 e 5');
    }
    else if(valor > 5){
        console.log('O valor é maior que 5');
    }
    else if(valor < 0){
        console.log('O valor é menor que 0');
    }
    else{
        console.log('Valor não é um número');
    };
}

contador(2);
contador(12);
contador(-12);   
contador('eae');


console.log('-----------------------------------------------------------------------------------------------------');

// Pode criar condicionais aninhados:
function contador2(valor){
    if (typeof(valor) === 'number'){
        if (valor >= 0 && valor <= 5){
            console.log('O valor está entre 0 e 5');
        }
        else if(valor > 5){
            console.log('O valor é maior que 5');
        }
        else if(valor < 0){
            console.log('O valor é menor que 0');
        };
    }
    else{
        console.log('Valor não é um número');
    };
}

contador2(23)
contador2(3)
contador2(-18)
contador2('batata')