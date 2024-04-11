/*
OPERADORES LOGICOS
&& -> AND -> E   // Todas as expressões precisam ser true para retornar true
|| -> OR -> OU   //
! -> NOT -> Não
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || false || false;

const usuario = "Felipe"; // form usuario digitou
const senha = "123456"; // form usuario digitou

// //                        True                  False
const vaiLogar = usuario === "Felipe" && senha === "123456";

// !true = Não Verdadeiro
// !false = Não Falso

console.log();
