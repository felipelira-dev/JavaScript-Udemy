/*  OPERADORES ARITIMETICOS
+   Adição
-   Subtração
/   Divisão
*   Multiplicação
**  Potenciação
%   Resto da Divisão
*/

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** 2);
console.log(num1 % num2);

/*  PRESEDENTES / ORDEM DE CALCULO
()
**
* / %
+ -
*/

let num3 = 10;
let num4 = 5;
console.log((num3 + num4) * num3 ** 2 + num4);

/*
++ INCREMENTO
-- DECREMENTO
*/
const step = 2
let contador = 0;
contador++;
contador++;
contador++;
contador++;
contador = contador + step
contador += 2 // contador = contador + 2 / step
console.log(contador)

/* OBSERVAÇÕES EXTRAS
NaN - Not a Number
Para converção de numeros com formato de 'String' usa-se
parseInt - para numeros inteiros
parseFloat - para numeros flutuantes
Number - para uso em geral (Resumindo o vs/js se vira pra resolver o problema!)
*/
let num5 = 5;
let num6 = "Lipe";
console.log(num5 * num6)

let num7 = 5
let num8 = parseInt('5') // usando o parseInt ele declara que e numero msm sendo string
let num9 = parseFloat('5')
let num10 = Number('5')
console.log(num7 + num8)
console.log(num7 + num9)
console.log(num7 + num10)

