// Logica de programação 01:

// Escreva uma função que receba 2 números e retorne o maior deles:
function comparador(n1, n2){
    let maior = (n1 > n2) ? n1 : n2;
    return console.log('O maior número é: ' + maior);
}

comparador(230, 89);
comparador(12, 71);