/*
Dados primitivos
String, Number, Undefined, Null, Boolean
*/
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; //String
const num1 = 10; // number (Inteiro)
const num2 = 10.52; // number (Float)
let nomeAluno; // undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

/*
PARA CONSULTAR O TYPE DE UMA (CONST/LET) CODIGO A BAIXO
console.log(typeof ***********,***********) *apos a virgulas mostrará o valor da const/let
*/

let a =2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2