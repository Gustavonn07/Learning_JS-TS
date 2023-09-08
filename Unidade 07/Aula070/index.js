// Métodos de instância e estáticos:

// Métodos que podem ser acessados na classe sem instânciar a classe (sem usar o new).
// Para criar um método estático use static.

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    };

    aumentarVolume() {
        this.volume += 2
    };

    diminuirVolume() {
        this.volume -= 2
    };

    static soma(x, y) {
        console.log(x + y);
    }
}

const controle1 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
ControleRemoto.soma(12, 34);