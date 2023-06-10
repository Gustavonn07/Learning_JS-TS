// NodeList

// Seleciona apenas 1 elemento:
const paragrafos = document.querySelector('.paragrafos');

// NodeList parece uma array, mas não é (porém se comporta exatamente igual).
// NodeList permite selecionar mais de um elemento:
const ps = paragrafos.querySelectorAll('p');

// Pode usar getComputedStyle() para coletar o estilo de alguma tag:
const body = getComputedStyle(document.body);

// Podemos selecionar por índices:
for (c in ps) {
    ps[c].style.width = '525px';
    ps[c].style.padding = '10px';
    ps[c].style.color = '#ffffff';
    ps[c].style.borderRadius = '15px';
    ps[c].style.backgroundColor = body.backgroundColor;
}
