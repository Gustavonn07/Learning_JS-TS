function criaCalculadora() {
    return {
        display : document.querySelector('.display'),


        inicia() {
            alert('Oi iniciei');
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
                }

            // Para usar o this -> calculadora em vez do this -> document
            }.bind(this));
        },

        btnParaDisplay() {
            
        }

    };
};

const calculadora = criaCalculadora();
calculadora.inicia();