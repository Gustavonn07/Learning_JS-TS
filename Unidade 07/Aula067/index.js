// Criando classes:

// Uma classe é um modo diferente de se criar uma função construtora.
// Para criar uma classe use class.
// Para add parametros use o método constructor.
// Pode add métodos sem usar vírgulas (Já são ligados ao prototype).

class Pessoa {
    constructor(n, sn) {
        this.nome = n;
        this.sobreNome = sn;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

const p1 = new Pessoa('Gustavo', 'Nepomuceno');
const p2 = new Pessoa('Fernanda', 'Carvalho');
p1.falar();
p2.falar();