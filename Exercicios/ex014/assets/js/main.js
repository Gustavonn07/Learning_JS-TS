const getTimeFromSeconds = (sec) => {
    // transforma em ms
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT',
    });
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let sec = 0;
let timer;

const startClock = () => {
        timer = setInterval(function () {
        sec++;
        relogio.innerHTML = getTimeFromSeconds(sec);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startClock();
});

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado')
    clearInterval(timer);
});

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    sec = 0;
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
});

// Não estava no formato certo, mas era funcinal!
// let c = 0;
// const timer = document.querySelector('#timer');
// const start = document.querySelector('#start');
// const pause = document.querySelector('#pause');
// const reset = document.querySelector('#reset');
// let temp;

// start.onclick = () => {
//     temp = setInterval(() => {
//         timer.innerHTML = c++;
//     }, 1000);
// };

// pause.onclick = () => {
//     clearInterval(temp)
// };

// reset.onclick = () => {
//     clearInterval(temp);
//     c = 0;
//     timer.innerHTML = c;
// };