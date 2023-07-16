// Métodos de Strings

// Não será abordado propriedades de objetos string (lenght,...).
const str1 = 'Jão é um apelido comum para o nome João.';
const str2 = 'Essa é uma banana.';
const str3 = '   Hello Mundo   ';
const str4 = 'Banana com ana mora em leitoana';
const str5 = 'Um carro azul estacionado no estacinoamento azul';

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

// Para saber se uma str se encontra depois da outra use:
console.log('a'.localeCompare('b'));
console.log('c'.localeCompare('b'));
console.log('a'.localeCompare('a'));
    // retorna -1 / 1 / 0

// Para achar uma palavra na string use:
console.log(str2.search('ana'));
    // retorna 12

// Para achar uma palavra e informações a mais na string use:
console.log(str4.match('ana'));
console.log(...str4.matchAll('ana'));
    // retorna [ 'ana', index: 12, input: 'Essa é uma banana.', groups: undefined ] / todas as outras 'ana'

// Para trocar uma string / substring por outra use:
console.log(str5.replace('azul', 'vermelho'));
console.log(str5.replaceAll('azul', 'vermelho'));
    // retorna Um carro vermelho estacionado na casa azul / Um carro vermelho estacionado na casa vermelho

// Para retornar o código de algum caractere em UTF-16 (até o código 65535) ou em Unicode respectivamente use:
console.log(str5.charCodeAt(1));
console.log(str5.codePointAt(1));
    // retorna 109 / 109

// Para retornar o caractere usando o seu código em UTF-16 ou em Unicode respectivamente use:
console.log(String.fromCharCode(109));
console.log(String.fromCodePoint(109));
    // retorna m / m

// Para transformar a string em maiuscula ou minuscula use:
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
    //retorna JÃO É UM APELIDO COMUM PARA O NOME JOÃO. / jão é um apelido comum para o nome joão.