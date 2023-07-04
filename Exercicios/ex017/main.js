function Calculadora() {
    const display = document.querySelector('.display');

    const btnParaDisplay = (valor) => {
        display.value += valor;
    }

    const clearDisplay = () => {
        display.value = '';
    };

    const apagaUm = () => {
        display.value = display.value.slice(0, -1);
    };

    const realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);
            if(!conta) alert('Conta Inválida');
            display.value = String(conta);

        } catch(e) {
            alert('Conta Inválida');
            return;
        }
    }

    const cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) btnParaDisplay(el.innerText);
            else if (el.classList.contains('btn-clear')) clearDisplay();
            else if (el.classList.contains('btn-del')) apagaUm();
            else if (el.classList.contains('btn-eq')) realizaConta();
        });
    }

    // Só tem acesso a essa função que usa this:
    this.inicia = () => {
        cliqueBotoes();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();