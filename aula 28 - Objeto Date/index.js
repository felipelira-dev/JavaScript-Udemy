// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia);  //01/01/1970 Timestamp unix ou Época unix
console.log(data.toString());