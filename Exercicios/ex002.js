// Aula 06 e 07

const nome = 'Gustavo';
const sobrenome = 'Nepomuceno';
const idade = 17;
const peso = 80;
const altura = 1.72;
let imc = peso/altura**2

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg.`);
console.log(`${nome} possui ${altura} metros de altura e seu IMC é de: ${imc.toFixed(2)}`);
// Usei a função toFixed para deixar com apenas 2 casas decimais depois da virgula