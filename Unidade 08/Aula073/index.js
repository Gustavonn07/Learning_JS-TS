// Métodos úteis para Promises

// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

function esperaAi(msg, tempo) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') reject('BAD VALUE');
            resolve(msg);
        }, tempo);
    });
}

function criaNumero(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

const promises = [
    esperaAi('Promise 1', criaNumero(1, 3)),
    esperaAi('Promise 2', criaNumero(1, 3)),
    esperaAi('Promise 3', criaNumero(1, 3)),
];

// Promise.race(promises)
//     .then(dados => {
//         console.log(dados);
//     })
//     .catch(e => {
//         console.log('ERRO: ' + e);
//     })

function baixaPagina() {
    const emCache = false;

    if(emCache) return Promise.resolve('Página em cache')
    return esperaAi('Baixei a página', 3000)
}

baixaPagina()
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log(e);
    });