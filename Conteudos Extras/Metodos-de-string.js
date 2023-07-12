// Métodos de Strings

// Não será abordado propriedades de objetos string (lenght,...).
const str1 = 'Jão é um apelido comum para o nome João.';
const str2 = 'Essa é uma banana.';
const str3 = '   Hello Mundo   ';

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

// Saber se o elemento começa com uma palavra: 
console.log(str1.startsWith('Jão'));
console.log(str1.startsWith('apelido'));
    // retorna true / false


// Saber se o elemento termina com uma palavra:
console.log(str1.endsWith('.'));
console.log(str1.endsWith('apelido'));
    // retorna true / false

// Para juntar strings use (Melhor usar += para performance):
console.log(str1.concat(' ', str2));
    // retorna Jão é um apelido comum para o nome João. Essa é uma banana

// Para repetir strings use:
console.log(str2.repeat(2));
    // retorna Essa é uma banana.Essa é uma banana.

// Para remover espaços em brancos do começo, fim e os dois use:
console.log(str3.trimStart());
console.log(str3.trimEnd());
console.log(str3.trim());
    // retorna Hello Mundo    /    Hello Mundo / Hello Mundo

// Para adicionar espaços em branco no começo e no fim use (Pode preencher com outras str):

console.log(str2.padStart(25));
console.log(str2.padStart(25, 'eae'));
console.log(str2.padEnd(25));
console.log(str2.padEnd(25, 'eae'));
    // retorna       Essa é uma banana. / eaeeaeeEssa é uma banana. / Essa é uma banana.        / Essa é uma banana.eaeeaee