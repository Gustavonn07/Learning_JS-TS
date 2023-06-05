// Aula 11

// Transformar o valor A em B, o valor B em C, o valor C em A

let valorA = 'A'; // B
let valorB = 'B'; // C
let valorC = 'C'; // A

let placeholder = '';

/*
placeholder = valorA; // A
valorA = valorB; // B
valorB = valorC; // C
valorC = placeholder; // A
*/

[valorA, valorB, valorC] = [valorB, valorC, valorA];

console.log(valorA, valorB, valorC);