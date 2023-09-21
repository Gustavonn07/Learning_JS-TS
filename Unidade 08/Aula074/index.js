// Async / Await

// Permite organizar o código e deixar mais legivel.
// Async: Define a função como assincrona.
// Await: faz a função esperar a promessa ser resolvida.

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

// esperaAi('Fase 01', criaNumero(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Fase 02', criaNumero(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Fase 03', criaNumero(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .catch(e => {
//         console.log(e);
//     });

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 01', criaNumero(1, 3));
        console.log(fase1);

        const fase2 = await esperaAi(22, criaNumero(1, 3));
        console.log(fase2);

        const fase3 = await esperaAi('Fase 03', criaNumero(1, 3));
        console.log(fase3);

        console.log('Terminamos na ' + fase3);
      
    } catch(e) {
        console.log(e);
    }
}

executa();
console.log('oi');