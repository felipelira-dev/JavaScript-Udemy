/*____________________________arrays simples____________________________*/
/*

// ... rest operetions, (serve para pegar o restonte)
// ... spread operetions, ()
//indice          0    1    2    3    4    5    6    7    8 
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//const [um, , três, , cinco, ...resto] = numeros; //pulando indices e valores vazios, e usando o ... rest

console.log(um, três, cinco, resto)

*/

/*____________________________arrays composto____________________________*/

/*
//                    0          1          2         - indice geral
//                 0  1  2    0  1  2    0  1  2      - indice dentro do Geral
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros[1][1])
*/

/*_________________________arrays composto/LOUCURA_______________________*/

/*
//                    0          1          2         - indice geral
//                 0  1  2    0  1  2    0  1  2      - indice dentro do Geral
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros;

console.log(seis)
*/

/*__________________________arrays composto/FACIL________________________*/

/*
//                    0          1          2         - indice geral
//                 0  1  2    0  1  2    0  1  2      - indice dentro do Geral
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;         - indice separados por listas
console.log(lista1[0]) - solicitando uma lista e dentro de colchetes o indice dentro da lista
*/