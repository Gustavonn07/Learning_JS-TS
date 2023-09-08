// Herança com classes:

// Para herdar propriedades de uma classe use extends.
// Para add parametros use super() com os parametros do Principal e depois adicione os novos como se fosse continuar no Herdado.
// Pode alterar métodos.

class Dispositivo {
    constructor(n) {
        this.nome = n;
        this.ligado = false;
    };

    ligar() {
        if(this.ligado) return;
        this.ligado = true;
    };

    desligar() {
        if(!this.ligado) return;
        this.ligado = false;
    };
}

class Smartphone extends Dispositivo {
    constructor(n, c, m) {
        super(n);
        this.cor = c;
        this.modelo = m;
    };

    ligar() {
        console.log('Método alterado!');
        if(this.ligado) return;
        this.ligado = true;
    }
}

const iphone = new Smartphone('iPhone', 'azul', 15);
iphone.ligar();
console.log(iphone);
