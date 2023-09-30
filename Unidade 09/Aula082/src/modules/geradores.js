const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const simbolos = '!@#$%¨&*()-_+=§{[ª}]º`´^~:;<>,/|?°';

const geraMaiscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolo =() => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, M, m, n, s) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        M && senhaArray.push(geraMaiscula());
        m && senhaArray.push(geraMinuscula());
        n && senhaArray.push(geraNumero());
        s && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}