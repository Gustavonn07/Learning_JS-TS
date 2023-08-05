// Polimofirsmo

// Permite que objetos de diferentes classes sejam tratadas igualmente.

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente --> Saldo: R$${this.saldo.toFixed(2)}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia} / ${this.conta}  |  ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente --> Saldo: R$${this.saldo.toFixed(2)}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

const contaP = new ContaPoupanca(12, 33, 0)