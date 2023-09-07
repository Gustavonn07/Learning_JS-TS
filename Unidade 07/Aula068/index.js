// Getters e Setters:

// Pode usar Symbol para criar um ID para uma variavel (Deixando mais seguro).
// Para acessar o Symbol utilize um get.
// Para configurar o Symbol utilize um set.

const _velocidade = Symbol('velocidade');
class Carro {
    constructor(n) {
        this.nome = n;
        this[_velocidade] = 0;
    };

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        console.log('SETTER');
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    };

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    };
}

const c1 = new Carro('Mobi');
for(let i = 0; i <= 200; i++) {
    c1.acelerar();
};

console.log(c1.velocidade);

// Usando o set
c1.velocidade = 22;
console.log(c1.velocidade);