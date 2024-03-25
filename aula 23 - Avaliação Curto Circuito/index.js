/*
&& -> fasle && true -> RETORNA O VALOR REAL 'FALSE', CASO TUDO SEJA TRUE VOLTA O ULTIMO VALOR.
|| -> 

FALSY - valores return false
false - falso literal
0
'' "" `` - todos vazios return false
null / undefined
NaN
*/

// console.log(0 || false || null || "Felipe" ||);

/*
const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = "false"; //-> aqui como está como string ele consta como verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

//ELE VOLTA SOMENTE O VERDADEIRO
