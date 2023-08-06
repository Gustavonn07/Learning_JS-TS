// Objeto Map()

// Diferente do método map().
// É uma estrutura de dados que permite armazenar chaves e valores (Podem ser de qualquer tipo).
// Não pode ter chaves duplicadas.
// Útil para associar valores a chaves e fazer pesquisas rápidas com base nessas chaves.

const pessoas = [
    {id: 1, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Helena'},
];

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(2));