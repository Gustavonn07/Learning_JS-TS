// Object.defineProperties() e  Object.defineProperty()

// Duas formas para definir propriedades para objetos.
// O 1 permite mais de uma propriedade configuradas, o 2 apenas 1 por vez.
// Existem 6 configs (get e set prox aula).

// value: valor da propriedade (dado).
// writable: se a propriedade pode ser alterada (booleano).  
// enumerable: se a propriedade pode ser listada quando o objeto for chamado (booleano).  
// configrable: se a propriedade pode ser reconfigurada ou excluida (booleano).  

function Produto(nome, preco, estoque) {

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: false,
    //     value: estoque,
    //     writable: true,
    //     configurable: false
    // })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },

        estoque: {
            enumerable: false,
            value: estoque,
            writable: true,
            configurable: false
        }
    })
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);