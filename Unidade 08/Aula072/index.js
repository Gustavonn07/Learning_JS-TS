// Promisses

// Utilizadas para lidar com requisições de redes, leitura de arquivos, e qualquer operação que pode levar tempo (Operações assíncronas).
// Dentro das Promises 2 parametros são recebidos e seus retornos podem ser utlizados para argumento de .then() ou .catch()
// .then() ===> resolve / .catch() ===> reject.
// .then() pode encadear com outra Promise.

function esperaAi(msg, tempo) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') reject('BAD VALUE');
            resolve(msg);
        }, tempo);
    });
}

function criaNumero(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

esperaAi('Frase 1', criaNumero(1000, 3000))
    .then(argDaPromise => {
        // O argumento é a msg.
        console.log(argDaPromise);
        return esperaAi(2222, criaNumero(1000, 3000));
    })
     .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', criaNumero(1000, 3000));
     })
      .then(resposta => {
        console.log(resposta);
      })
    .catch(e => {
        console.log('ERRO:', e);
    });
