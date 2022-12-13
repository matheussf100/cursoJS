/* const h1 = document.querySelector('.container h1');

function zeroTempo(n){
    return n >= 10 ? n : `0${n}`;
}

const data = new Date();

const diaSemana = data.getDay();

const mes = data.getMonth() + 1;

const ano = data.getFullYear();

const hora = zeroTempo(data.getHours());

const min = zeroTempo(data.getMinutes());

const dia = data.getDate();

const seg = zeroTempo(data.getSeconds());

let diaSemanaTexto;
let meses;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
}

switch (mes) {
    case 1:
        meses = 'Janeiro';
        break;
    case 2:
        meses = 'Fevereiro';
        break;
    case 3:
        meses = 'Março';
        break;
    case 4:
        meses = 'Abril';
        break;
    case 5:
        meses = 'Maio';
        break;
    case 6:
        meses = 'Junho';
        break;
    case 7:
        meses = 'Julho';
        break;
    case 8:
        meses = 'Agosto';
        break;
    case 9:
        meses = 'Setembro';
        break;
    case 10:
        meses = 'Outubro';
        break;
    case 11:
        meses = 'Novembro';
        break;
    case 12:
        meses = 'Dezembro';
        break;
}

console.log(`${diaSemanaTexto}, ${dia} de ${meses} de ${ano} ${hora}:${min}`);

function relogio() {
    return `${diaSemanaTexto}, ${dia} de ${meses} de ${ano} ${hora}:${min}:${seg}`
}


h1.innerHTML = relogio();
*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString ('pt-BR', { dateStyle: 'full', timeStyle: 'short' });