// Validador de CPF:

function ValidaCpf(cpf) {
    this.cpfOriginal = cpf;
    this.cpfOriginalNumeros = this.cpfOriginal.replace(/\D+/g, '');
    this.cpfVerificavel = Array.from(this.cpfOriginal.replace(/\D+/g, ''));
    this.ultimosValores = this.cpfVerificavel.splice(9, 2);
        
    this.valoresMultiplicados1 = this.multiplicarValores(this.cpfVerificavel, 2);
    this.cpfVerificavelPenultimo = this.verificadorUltimosValores(this.valoresMultiplicados1);
    this.novoCpfVerificavel = [...this.cpfVerificavel];
        
    this.valoresMultiplicados2 = this.multiplicarValores(this.novoCpfVerificavel, 2);
    this.cpfVerificavelUltimo = this.verificadorUltimosValores(this.valoresMultiplicados2);
        
    this.cpfFinal = `${this.cpfVerificavel.reverse().join('')}${this.cpfVerificavelPenultimo}${this.cpfVerificavelUltimo}`;

    console.log(this.comparadorDeCpf(this.cpfOriginalNumeros, this.cpfFinal));
}


ValidaCpf.prototype.multiplicarValores = function (array, somador) {
    return array.reverse().map((valor, indice) => {
        return Number(valor) * (indice + somador);
    });
};

ValidaCpf.prototype.verificadorUltimosValores = function (array) {
    const reduzido = array.reduce((acumulador, valor) => {
        return acumulador + valor;
    }, 0);

    return 11 - reduzido % 11 > 9 ? 0 : 11 - reduzido % 11;
}

ValidaCpf.prototype.comparadorDeCpf = function (cpfOriginal, cpfVerificador) {
    return cpfOriginal === cpfVerificador ? true : false;
}

new ValidaCpf('038.119.143-59');
new ValidaCpf('064.709.943-56');
