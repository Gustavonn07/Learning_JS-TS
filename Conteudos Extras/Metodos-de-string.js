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

// Extrair uma seção da string (substring não aceita valores negativos ---> viram 0): 
console.log(str1.slice(0, 4));
console.log(str1.substring(0, 4));
console.log(str1.slice (10, -2));
console.log(str1.substring(10, -2));
    // Retorna Jão / Jão / pelido comum para o nome Joã / Jão é um a

// Transformar uma string em seções (aceita limites):
console.log(str1.split(' '));
console.log(str1.split('o'));
console.log(str1.split('o', 3));
    // Separa a cada espaço / a cada letra o / a cada letra o com limite de 3

// Achar um elemento em uma string (aceita posição para verificar):
console.log(str1.includes('Jão'));
console.log(str1.includes('apelido', 9));
console.log(str1.includes('apelido', 10));
    // retorna true / true / false