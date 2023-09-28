// Import / Export

import { nome as nome2, sobrenome, idade, soma } from './modulo1';
import classe from './modulo1'

const nome = 'João';

console.log(nome2, sobrenome, idade, soma(5, 12));

const p1 = new classe('Gustavo', 'Nogueira');
console.log(p1);
