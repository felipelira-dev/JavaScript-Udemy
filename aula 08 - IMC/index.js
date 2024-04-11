/*
LUIZ OTAVIO MIRANDA TEM 30 ANOS, PESA 84 KG
TEM 1,8 DE ALTURA E SEU IMC É DE 25.925
LUIZ OTAVIO NASCEU EM (1980)
--- CRIAR IMC, E ACERTAR O ANO DE NASCIMENTO USANDO APENAS CONST's E LET's ---
*/

const nome = 'Felipe';
const sobrenome = 'Pereira';
const idade = 25;
const peso = 55;
const alturaEmM = 1.80;
let anoAtual = 2023
// peso / (altura * altura) //
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = anoAtual - idade;

//templates strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

