let result = document.querySelector('#resultado');
let form = document.querySelector('form');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');

function calcular(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    let imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2);

    // if (imc < 18.5) {
    //     result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está Abaixo do peso`;
    // } else if (imc >= 18.5 && imc < 25) {
    //     result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está no Peso normal`;
    // } else if (imc >= 25 && imc < 30) {
    //     result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está em Sobrepeso`;
    // } else if (imc >= 30 && imc < 35) {
    //     result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está em Obesidade 1 grau`;
    // } else if (imc >= 35 && imc < 40) {
    //     result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está em Obesidade 2 grau`;
    // } else if (imc >= 40) {
    //     result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está em Obesidade 3 grau`;
    // };

    // Testando operação ternária
    const operacao = imc < 18.5 ? result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está Abaixo do peso`: imc >= 18.5 && imc < 25 ? result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está no Peso normal` : imc >= 25 && imc < 30 ? result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está em Sobrepeso` : imc >= 30 && imc < 35 ? result.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e você está em Obesidade 1 grau` : imc >= 35 && imc < 40 ? `O seu IMC é de ${imc.toFixed(2)} e você está em Obesidade 2 grau` : `O seu IMC é de ${imc.toFixed(2)} e você está em Obesidade 3 grau`;
}

form.addEventListener('submit', calcular);
