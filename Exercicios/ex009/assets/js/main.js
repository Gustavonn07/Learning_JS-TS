// Dia da semana
function DSem(){
    let diaSem = new Date().getDay();
    switch (diaSem){
        case 0:
            diaSem = 'Sabado';
            break;
        case 1:
            diaSem = 'Segunda-Feira';
            break;
        case 2:
            diaSem = 'Terça-Feira';
            break;
        case 3:
            diaSem = 'Quarta-Feira';
            break;
        case 4:
            diaSem = 'Quinta-Feira';
            break;
        case 5:
            diaSem = 'Sexta-Feira';
            break;
        case 6:
            diaSem = 'Domingo';
            break;
        default:
            diaSem = 'Dia não encontrado';
            break;
    };
    return diaSem;
}

// Resto da data
function Data(){
    let data = new Date();
    function month(){
        let mes = new Date().getMonth();
        switch (mes){
            case 0:
                mes = 'Janeiro';
                break;
            case 1:
                mes = 'Fevereiro';
                break;
            case 2:
                mes = 'Março';
                break;
            case 3:
                mes = 'Abril';
                break;
            case 4:
                mes = 'Maio';
                break;
            case 5:
                mes = 'Junho';
                break;
            case 6:
                mes = 'Julho';
                break;
            case 7:
                mes = 'Agosto';
                break;
            case 8:
                mes = 'Setembro';
                break;
            case 9:
                mes = 'Outubro';
                break;
            case 10:
                mes = 'Novembro';
                break;
            case 11:
                mes = 'Dezembro';
                break;
            default:
                mes = 'Mês não encontrado';
                break;
        };
        return mes;
    };
    let horas = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours(); 
    let minutos = data.getMinutes() < length.toString(10) ? `0${data.getMinutes()}` : data.getMinutes(); 


    return `, ${data.getDate()} de ${month()} de ${data.getFullYear()}, ${horas}:${minutos}`;
}

data.innerHTML = DSem() + Data();

// data.innerHTML = new Date().toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle : 'short'});
