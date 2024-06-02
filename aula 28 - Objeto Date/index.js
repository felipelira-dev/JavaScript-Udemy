// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/* ---------------Hora Unix----------------*/
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);  //01/01/1970 Timestamp unix ou Época unix

/* ---------------New Date----------------*/
//milisegundos só vai até 999
//se for adicionado qualquer valor acima do permitido ele irá corrigir, todos os valores
//New Date - precisar ter no minimo 2 parametros
//Meses se iniciam do 0 - 11 (janeiro a dezembro)
// a, m, d, h, M, s, ms (ordem para classificar)
//const data = new Date(); //pega a data e hora no exato momento que foi chamada

/* ---------------Const Data----------------*/
// const data = new Date('2019-04-20 20:15:59');
// console.log('Dia', data.getDate()); // data do dia
// console.log('Mês', data.getMonth() + 1); // Mês Começa do zero
// console.log('Ano', data.getFullYear()); // Ano
// console.log('Hora', data.getHours()); // Horas
// console.log('Min', data.getMinutes()); // Minutos
// console.log('Sec', data.getSeconds()); // Segundos
// console.log('ms', data.getMilliseconds()); // Milesegundos
// console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - Sábado

// console.log(data.toString());
// // console.log(Date.now()); pega a data atual convertida em milesegundos

/* ---------------Função - Formatar Data----------------*/
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
} // adiciona O a esquerda se o numero for menor que 10

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
/*[Running] node "c:\Users\Felip\OneDrive\Documentos\GitHub\JavaScript-Udemy\aula 28 - Objeto Date\index.js"
02/06/2024 12:57:18

[Done] exited with code=0 in 0.091 seconds*/