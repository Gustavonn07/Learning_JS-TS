// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json))
//     .catch(e => console.log(e));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))
    .catch(e => console.log(e))

 function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    for(let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        table.appendChild(tr);
    };

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
 }