// Métodos úteis para objetos

// Pode copiar um objeto usando ... ou com Object.assign():
const produto = {
    nome: 'Caneca',
    preco: 14
};

const outroProduto = {...produto, tamanho: 23};
outroProduto.nome = 'Torneira';
console.log(outroProduto);
console.log(produto);

const outroProduto2 = {};
Object.assign(outroProduto2, produto, {idade: 32});
console.log(outroProduto2);

// Pode puxar as chaves, valores e os 2 usando Object.keys / values / entries
console.log(Object.keys(outroProduto2));
console.log(Object.values(outroProduto2));
console.log(Object.entries(outroProduto2));

// Pode retornar congigurações usando Object.getOwnPropertyDescriptor().
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
