// Getters e Setters

// Uma forma de proteger o código.
// Ultimas 2 configs.
// Get: retorna o valor da propriedade (Chamado quando a propriedade é acessada).
// Set: retorna o novo valor como argumento e pode fazer ações com isso (Chamado quando a propriedade tem seu valor mudado).

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        
        set: function(novoValor) {
            if(typeof(novoValor) !== 'number') {
                console.log('Não é numero');

            } else {
                console.log('Novo valor aceito');
                estoque = novoValor;

            };
        },

        get: function(){
            return estoque;
        }
    });
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 32;
// p1.estoque = '32';
console.log(p1.estoque);