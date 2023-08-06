// Funções fábrica + prototype

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
};

// Juntando objetos desacoplados (Não usaria herança dessa forma) ---> Mixins:
// Pode usar Object.assign({}, objetos...) ---> Igual ao call().
const pessoaPrototype = {...falar, ...comer, ...beber}

function criaPessoa(nome, sobrenome) {
    // Vantagem: pode por configurações:
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    });
};

const p1 = criaPessoa('Jorge', 'Almeida');
p1.beber();