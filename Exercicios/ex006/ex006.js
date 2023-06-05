// Aula 13 e 14

const num = Number(prompt('Digite um número: '));
document.body.innerHTML = `<h1>Seu número é ${num}</h1>`;
document.body.innerHTML += `<br>Raiz Quadrada: ${(num ** 0.5).toFixed(2)} <br>`;
document.body.innerHTML += `<br>É NaN? ${Number.isNaN(num)} <br>`;
document.body.innerHTML += `<br>Arredondando para baixo: ${Math.floor(num)} <br>`;
document.body.innerHTML += `<br>Arredondando para cima: ${Math.ceil(num)} <br>`;
document.body.innerHTML += `<br>Com 2 casas decimais: ${num.toFixed(2)}`;
