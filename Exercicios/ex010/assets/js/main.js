const elementos = [
    {tag: 'p' , texto: 'Texto 1'},
    {tag: 'div' , texto: 'Texto 2'},
    {tag: 'footer' , texto: 'Texto 3'},
    {tag: 'section' , texto: 'Texto 4'},
];

const section = document.querySelector('.container');
const div = document.createElement('div');

// Forma simplificada que eu fiz:

// for (c = 0; c < elementos.length; c++) {
//     const element = document.createElement(elementos[c].tag);
//     element.innerHTML = elementos[c].texto;
//     div.appendChild(element);
// }
// section.appendChild(div)

for (c = 0; c < elementos.length; c++) {
    let {tag, texto} = elementos[c];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

section.appendChild(div);

// Pode usar document.createElement() para criar elementos no javascript para HTML.
// Pode usar appendChild() para aninhar elementos no javascript.