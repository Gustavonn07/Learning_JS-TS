// Herança

function Produto(n, p) {
    this.nome = n;
    this.preco = p;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// Podemos linkar um construtor em outro usando .call(This usado nos dois, argumentos da 2 construtora)
function Camiseta(n, p, c) {
    Produto.call(this, n, p);
    this.cor = c;
};

// Para linkar um prototipo e corrigir o construtor use:
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 49.99, 'Preta');
camiseta.aumento(100)
console.log(camiseta);

function Caneca(n, p, c, m) {
    Camiseta.call(this, n, p, c);
    this.material = m;
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Canecão', 60, 'Branca', 'Argila');
console.log(caneca);
caneca.desconto(20);
console.log(caneca);
