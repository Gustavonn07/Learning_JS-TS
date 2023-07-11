// Métodos de Strings

// Não será abordado propriedades de objetos string (lenght,...).
const str1 = 'Jão é um apelido comum para o nome João.';

// Acessar um caractere da string:
console.log(str1[4]);
console.log(str1.charAt(7));
    // Retorna é / m

// Retornar o índice de uma palavra da string (aceita posição de início):
console.log(str1.indexOf('um'));
console.log(str1.lastIndexOf('um'));
console.log(str1.indexOf('um', 7));
    // Retorna 6 / 20 / 20