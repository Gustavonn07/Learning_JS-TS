const nome = 'Gustavo';
const sobrenome = 'Nepuceno';
const idade = 18;

const soma = (x, y) => {return x + y};

export { nome, sobrenome, idade, soma };

export default class Pessoa {
    constructor(n, sn) {
        this.nome = n;
        this.sobrenome = sn;
    }
}