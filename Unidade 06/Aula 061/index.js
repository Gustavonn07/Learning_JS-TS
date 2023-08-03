// Prototype

// Base de POO.
// Todos os objetos possuem uma referencia interna de prototipo.
// JS usa protótipos para passar propriedades e métodos de um objeto para o outro.

// Construtora:
function Pessoa(n, sn) {
    this.nome = n;
    this.sobrenome = sn;
}

// Podemos criar prototype assim:
Pessoa.prototype.nomeCompleto = function(nome, sobrenome) {return `${this.nome} ${this.sobrenome}`};

let pessoa1 =  new Pessoa('Gustavo', 'Nepomuceno');
console.log(pessoa1.nomeCompleto(this.nome, this.sobrenome));