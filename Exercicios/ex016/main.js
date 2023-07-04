function criaCalculadora() {
    return {
        display : document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta Inválida');
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Inválida');
                return;
            }
        },

        cliqueBotoes() {
                // Qualquer elemento HTML clicado é captado o evento de click (Já manda o evento para a função automaticamente).

                document.addEventListener('click', function(e) {
                    // this -> document
                    // Joga o evento de click nos elementos:
                    const el = e.target;

                    // Caso o elemento for da classe btn-num faça:
                    if(el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);
                        // Pega o que esta dentro do botão (C ( ) / 7,...)

                    } else if(el.classList.contains('btn-clear')) {
                        this.clearDisplay();

                    } else if(el.classList.contains('btn-del')) {
                        this.apagaUm();

                    } else if(el.classList.contains('btn-eq')) {
                        this.realizaConta();
                    };

            // Para usar o this -> calculadora em vez do this -> document
            // Com arrow function não precisa usar .bind
            }.bind(this));
        },

        btnParaDisplay(valor) {
            // Pega o valor do que precisamos
            // Existem varios elementos dentro do . (Objeto geral)
            this.display.value += valor;
        }

    };
};

const calculadora = criaCalculadora();
calculadora.inicia();