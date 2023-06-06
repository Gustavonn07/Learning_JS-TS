const btn = document.querySelector('#btn');

btn.onclick = function coleta() {
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;

    const lista = {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    };
    
    console.log(lista);
};