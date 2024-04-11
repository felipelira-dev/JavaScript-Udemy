//let numero = prompt('Digite um número:') ;
//numero = Number(numero);
// Outra forma de converter para numero

const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML += "";
texto.innerHTML += `<p>Raiz Quadrada do seu numero é: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é interiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para Baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para Cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;

/*Raiz Quadrada?
o numero e inteiro?
geral pra baixo
geral pra cima 
numero com duas casa decimais
*/
