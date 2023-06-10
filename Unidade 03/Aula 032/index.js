// For in

// Lê os índices.
// Compacta o código usando in:
lista = ['a', 'b', 'c'];
for (c in lista) {
    console.log(lista[c]);
}

// Interessante com objetos (retorna as chaves):
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    }
};

for (c in pessoa) {
    console.log(c);
}